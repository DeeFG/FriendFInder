
let newFriend = {};
let bestMatch = {
  diff: 100,
  name: "",
  image: ""
};

$("#submit").on("click", () => {
  let userName = $("#name")
    .val()
    .trim();
  let imag = $("#image")
    .val()
    .trim();
  let ans1 = $("#quest1")
    .val()
    .trim();
  let ans2 = $("#quest2")
    .val()
    .trim();
  let ans3 = $("#quest3")
    .val()
    .trim();
  let ans4 = $("#quest4")
    .val()
    .trim();
  let ans5 = $("#quest5")
    .val()
    .trim();

  if (
    userName === "" ||
    imag === "" ||
    ans1 === "" ||
    ans2 === "" ||
    ans3 === "" ||
    ans4 === "" ||
    ans5 === ""
  ) {
    alert("Please fill in all fields");
  } else {
    newFriend = {
      name: userName,
      photo: imag,
      scores: [ans1, ans2, ans3, ans4, ans5]
    };

    findFriend(newFriend.scores);

    setTimeout(postData, 1500);

    function postData() {
      $.post(
        { url: "/api/friends", contentType: "application/json" },
        JSON.stringify(newFriend)
      );
    }

    $("#name").val("");
    $("#image").val("");
    $("#quest1").val("");
    $("#quest2").val("");
    $("#quest3").val("");
    $("#quest4").val("");
    $("#quest5").val("");
  }
});

function findFriend(scores) {
  $.get("/api/friends", friends => {
    let count = 0;
    let arrayLength = friends.length;

    for (var i = 0; i < arrayLength; i++) {
      calcScoreDiff(scores, friends[i]);
      count++;
    }

    if (count === arrayLength) {
      $("#friendName").text(bestMatch.name);
      $("#friendImg").attr("src", bestMatch.image);
      $("#myModal").modal("toggle");
    }
  });
}

function calcScoreDiff(user, friend) {
  let diff = 0;
  let count = 0;

  for (var i = 0; i < 5; i++) {
    diff += Math.abs(user[i] - friend.scores[i]);
    count++;
  }

  if (count === 5) {
    if (diff < bestMatch.diff) {
      bestMatch.diff = diff;
      bestMatch.name = friend.name;
      bestMatch.image = friend.photo;
    } else {
      return;
    }
  }
}
