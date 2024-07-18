document.addEventListener('DOMContentLoaded', function() {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        var question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            item.classList.toggle('open');
            var answer = item.querySelector('.faq-answer');
            if (item.classList.contains('open')) {
                answer.style.display = 'block';
                question.querySelector('::after').style.transform = 'rotate(180deg)';
            } else {
                answer.style.display = 'none';
                question.querySelector('::after').style.transform = 'rotate(0deg)';
            }
        });
    });
});
