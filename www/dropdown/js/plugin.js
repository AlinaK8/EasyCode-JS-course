// 7. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот  dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться. 

let dropdownItems = document.querySelectorAll('.dropdown-item');

for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click', function(e) {
        if (dropdownItems[i].querySelector('.dropdown-menu') !== e.currentTarget.querySelector('.dropdown-menu')) {
            dropdownItems[i].querySelector('.dropdown-menu').classList.add('d-none');
        } 
        e.currentTarget.querySelector('.dropdown-menu').classList.toggle('d-none');  
    });
}

