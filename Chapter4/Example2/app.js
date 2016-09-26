var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input-1 input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input-1 input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input-1 input").val("");
        }
    };
    var addCommentFromInputBox2 = function () {
        var $new_comment;

        if ($(".comment-input-2 input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input-2 input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input-2 input").val("");
        }
    };

    $(".comment-input-1 button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input-1 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });

    $(".comment-input-2 button").on("click", function (event) {
        addCommentFromInputBox2();
    });

    $(".comment-input-2 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox2();
        }
    });
};

$(document).ready(main);
