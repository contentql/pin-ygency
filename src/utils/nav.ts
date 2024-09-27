// Sticky nav
export const stickyNav = () => {
  window.addEventListener('scroll', () => {
    let offset = window.scrollY
    const sticky = document.querySelectorAll('.main-header')
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i]
      if (stick) {
        if (offset > 10) {
          stick.classList.add('fixed-header')
        } else {
          stick.classList.remove('fixed-header')
        }
      }
    }
  })
}

export const sidebarClick = () => {
  const buttons = document.querySelectorAll('.menu-sidebar button')
  const backDrop = document.querySelector('.form-back-drop')
  const crossIcon = document.querySelector('.cross-icon')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('body')?.classList.add('side-content-visible')
    })
  })
  backDrop?.addEventListener('click', () => {
    document.querySelector('body')?.classList.remove('side-content-visible')
  })
  crossIcon?.addEventListener('click', () => {
    document.querySelector('body')?.classList.remove('side-content-visible')
  })
}
export const sidebarSignUpClick = () => {
  const buttons = document.querySelectorAll('.menu-sidebar-signup button')
  const backDrop = document.querySelector('.form-back-drop-signup')
  const crossIcon = document.querySelector('.cross-icon-signup')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document
        .querySelector('body')
        ?.classList.add('side-content-visible-signup')
    })
  })
  backDrop?.addEventListener('click', () => {
    document
      .querySelector('body')
      ?.classList.remove('side-content-visible-signup')
  })
  crossIcon?.addEventListener('click', () => {
    document
      .querySelector('body')
      ?.classList.remove('side-content-visible-signup')
  })
}

export const scrollTopFun = (): void => {
  const scrollUp = document.querySelector('.scroll-top') as HTMLElement | null
  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
    const st = window.scrollY
    if (scrollUp) {
      if (st > 110) {
        scrollUp.style.display = 'block'
      } else {
        scrollUp.style.display = 'none'
      }
    }
  })
}
