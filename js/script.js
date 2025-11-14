// 导航条交互
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// 滚动效果
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// 导航条背景变化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 知识图谱切换
function showGraph(type) {
    // 隐藏所有图谱
    document.querySelectorAll('.graph-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 移除所有按钮的active状态
    document.querySelectorAll('.graph-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 显示选中的图谱
    document.getElementById(`${type}-graph`).classList.add('active');
    
    // 设置按钮active状态
    event.target.classList.add('active');
}

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.timeline-item, .experience-card, .award-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// 图片加载错误处理
document.getElementById('profile-img').addEventListener('error', function() {
    this.src = 'https://via.placeholder.com/300x300/667eea/ffffff?text=张学思';
    this.alt = '默认头像';
});

// 页面加载完成后的初始化
window.addEventListener('load', () => {
    // 添加加载完成类用于动画
    document.body.classList.add('loaded');
});
