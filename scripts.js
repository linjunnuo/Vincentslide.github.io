const slides = [
    {
        title: "Slide - 20250109",
        link: "presentation_list/pre_20250109/",
        image: "presentation_list/pre_20250109/slides/img/slide1.jpg" // 确保路径正确
    },
    {
        title: "Slide - 20250110",
        link: "presentation_list/pre_20250110/",
        image: "presentation_list/pre_20250110/slides/img/slide1.jpg" // 确保路径正确
    }
];

const slidesList = document.getElementById('slidesList');
const searchInput = document.getElementById('searchInput');

function renderSlides(filter = "") {
    slidesList.innerHTML = "";
    slides
        .filter(slide => slide.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(slide => {
            const slideItem = document.createElement('div');
            slideItem.className = 'slide-item';
            slideItem.innerHTML = `
                <img src="${slide.image}" alt="${slide.title}" onerror="this.src='placeholder.jpg';">
                <h2>${slide.title}</h2>
                <a href="${slide.link}">View Slide</a>
            `;
            slidesList.appendChild(slideItem);
        });
}

renderSlides();

searchInput.addEventListener('input', () => {
    renderSlides(searchInput.value);
});