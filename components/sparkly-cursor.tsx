"use client"

import { useEffect } from "react"

const COLOR = "#ffffff"
const SPARKLES = 120

export function SparklyCursor() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches || !document.getElementById) return

    let x = 400
    let y = 300
    let ox = 400
    let oy = 300
    let swide = window.innerWidth
    let shigh = window.innerHeight
    let sleft = window.pageXOffset
    let sdown = window.pageYOffset

    const tiny: HTMLDivElement[] = []
    const star: HTMLDivElement[] = []
    const starv = Array<number>(SPARKLES).fill(0)
    const starx = Array<number>(SPARKLES).fill(0)
    const stary = Array<number>(SPARKLES).fill(0)
    const tinyx = Array<number>(SPARKLES).fill(0)
    const tinyy = Array<number>(SPARKLES).fill(0)
    const tinyv = Array<number>(SPARKLES).fill(0)

    const createDiv = (height: number, width: number) => {
      const div = document.createElement("div")
      div.style.position = "absolute"
      div.style.height = `${height}px`
      div.style.width = `${width}px`
      div.style.overflow = "hidden"
      div.style.backgroundColor = COLOR
      div.style.pointerEvents = "none"
      div.style.zIndex = "9999"
      return div
    }

    for (let i = 0; i < SPARKLES; i++) {
      const tinyNode = createDiv(3, 3)
      tinyNode.style.visibility = "hidden"
      document.body.appendChild(tinyNode)
      tiny[i] = tinyNode

      const starNode = createDiv(5, 5)
      starNode.style.backgroundColor = "transparent"
      starNode.style.visibility = "hidden"

      const rlef = createDiv(1, 5)
      const rdow = createDiv(5, 1)
      rlef.style.top = "2px"
      rlef.style.left = "0px"
      rdow.style.top = "0px"
      rdow.style.left = "2px"

      starNode.appendChild(rlef)
      starNode.appendChild(rdow)
      document.body.appendChild(starNode)
      star[i] = starNode
    }

    const setScroll = () => {
      sdown = window.pageYOffset
      sleft = window.pageXOffset
    }

    const setWidth = () => {
      swide = window.innerWidth
      shigh = window.innerHeight
    }

    const updateStar = (i: number) => {
      starv[i] -= 1
      if (starv[i] === 25) {
        star[i].style.clipPath = "inset(1px 1px 1px 1px)"
      }
      if (starv[i] > 0) {
        stary[i] += 1 + Math.random() * 3
        if (stary[i] < shigh + sdown) {
          star[i].style.top = `${stary[i]}px`
          starx[i] += (i % 5 - 2) / 5
          star[i].style.left = `${starx[i]}px`
        } else {
          star[i].style.visibility = "hidden"
          starv[i] = 0
        }
      } else {
        tinyv[i] = 50
        tiny[i].style.top = `${(tinyy[i] = stary[i])}px`
        tiny[i].style.left = `${(tinyx[i] = starx[i])}px`
        tiny[i].style.width = "2px"
        tiny[i].style.height = "2px"
        star[i].style.visibility = "hidden"
        tiny[i].style.visibility = "visible"
      }
    }

    const updateTiny = (i: number) => {
      tinyv[i] -= 1
      if (tinyv[i] === 25) {
        tiny[i].style.width = "1px"
        tiny[i].style.height = "1px"
      }
      if (tinyv[i] > 0) {
        tinyy[i] += 1 + Math.random() * 3
        if (tinyy[i] < shigh + sdown) {
          tiny[i].style.top = `${tinyy[i]}px`
          tinyx[i] += (i % 5 - 2) / 5
          tiny[i].style.left = `${tinyx[i]}px`
        } else {
          tiny[i].style.visibility = "hidden"
          tinyv[i] = 0
        }
      } else {
        tiny[i].style.visibility = "hidden"
      }
    }

    const sparkle = () => {
      if (x !== ox || y !== oy) {
        ox = x
        oy = y
        for (let c = 0; c < SPARKLES; c++) {
          if (!starv[c]) {
            star[c].style.left = `${(starx[c] = x)}px`
            star[c].style.top = `${(stary[c] = y)}px`
            star[c].style.clipPath = "inset(0px 0px 0px 0px)"
            star[c].style.visibility = "visible"
            starv[c] = 50
            break
          }
        }
      }

      for (let c = 0; c < SPARKLES; c++) {
        if (starv[c]) updateStar(c)
        if (tinyv[c]) updateTiny(c)
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      setScroll()
      y = e.pageY
      x = e.pageX
    }

    setWidth()
    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("resize", setWidth)
    const timer = window.setInterval(sparkle, 40)

    return () => {
      window.clearInterval(timer)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", setWidth)
      for (const node of [...tiny, ...star]) {
        node.remove()
      }
    }
  }, [])

  return null
}
