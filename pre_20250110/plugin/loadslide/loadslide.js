document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[data-external]');
    const fetchPromises = [];

    sections.forEach(section => {
        const url = section.getAttribute('data-external');
        const fetchPromise = fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${url}: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                section.outerHTML = html; // 插入加载的内容
            })
            .catch(err => {
                console.error(err);
            });
        fetchPromises.push(fetchPromise);
    });

    // 等待所有外部内容加载完成后初始化 Reveal.js
    Promise.all(fetchPromises).then(() => {
        Reveal.initialize({
            math: {
                mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
                config: 'TeX-AMS_HTML-full',
                TeX: {
                  Macros: {
                    RR: "{\\bf R}"
                  }
                }
            },
            hash: true,
            plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath ]
        });
    });
});