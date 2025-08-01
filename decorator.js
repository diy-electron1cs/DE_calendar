
// Получить элемент по id
function getId(id) {
    return document.getElementById(id);
}


const container = document.querySelector('.day_image');

function addImage(position = 'right-top', src, width, vertical = 'auto', horizontal = 'auto') {
    // Удаляем старую картинку, если есть
    const oldImg = container.querySelector('img');
    if (oldImg) oldImg.remove();

    const img = document.createElement('img');
    img.src = src;
    img.class = 'day-img-set';
    img.alt = 'Day Image';
    img.style.position = 'absolute';
    img.style.width = width;
    img.style.height = 'auto';



    if (position === 'right-top') {
        img.style.top = vertical;
        img.style.right = horizontal;
        img.style.bottom = '';
        img.style.left = '';
        img.style.transform = '';
    } else if (position === 'left-top') {
        img.style.top = vertical;
        img.style.right = '';
        img.style.bottom = '10px';
        img.style.left = horizontal;
        img.style.transform = '';
    } else if (position === 'center-top') {
        img.style.top = vertical;
        img.style.left = '50%';          // по центру по горизонтали
        img.style.right = '';
        img.style.bottom = '';
        img.style.transform = 'translateX(-50%)'; // сдвигаем на половину ширины влево для центрирования
    }

    container.style.position = 'relative'; // чтобы абсолютное позиционирование работало внутри контейнера
    container.appendChild(img);
}

function removeImage() {
    const img = container.querySelector('img');
    if (img) img.remove();
}


function setResponsiveBackground(imageUrl) {
    const elements = document.querySelectorAll('.back-img');

    elements.forEach(el => {
        el.style.setProperty('background', 'none', 'important');
        el.style.setProperty('background-color', 'transparent', 'important');
    });

    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = "cover";       // чтобы картинка растягивалась по всей странице
    document.body.style.backgroundRepeat = "no-repeat";  // чтобы картинка не повторялась
    document.body.style.backgroundPosition = "center center"; // выравнивание по центру
}

