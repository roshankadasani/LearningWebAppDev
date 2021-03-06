/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 100, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var main = function () {
    'use strict';

    var addCommentFromInputBox = function () {
        var $newComment;

        if ($('.comment-input-1 input').val() !== '') {
            $newComment = $('<p class="colors1">').text($('.comment-input-1 input').val());
            $newComment.hide();
            $('.comments').append($newComment);
            $newComment.fadeIn();
            $('.comment-input-1 input').val('');
        }
    };
    var addCommentFromInputBox2 = function () {
        var $newComment2;

        if ($('.comment-input-2 input').val() !== '') {
            $newComment2 = $('<p class="colors2">').text($('.comment-input-2 input').val());
            $newComment2.hide();
            $('.comments').append($newComment2);
            $newComment2.fadeIn();
            $('.comment-input-2 input').val('');
        }
    };

    $('.comment-input-1 button').on('click', function () {
        addCommentFromInputBox();
    });

    $('.comment-input-1 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });

    $('.comment-input-2 button').on('click', function () {
        addCommentFromInputBox2();
    });

    $('.comment-input-2 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox2();
        }
    });
};

$(document).ready(main);
