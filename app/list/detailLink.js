'use client'

import { useRouter } from "next/navigation"

export default function DetailLink() {
    let router = useRouter()
    return (
        <button onClick={() => { router.push('/') }}>페이지 이동</button>
     // <button onClick={() => { router.back() }}>뒤로 이동</button>
     // <button onClick={() => { router.forward() }}>앞으로 이동</button>
     // <button onClick={() => { router.refresh() }}>새로 고침</button>
     // <button onClick={() => { router.prefetch('/...') }}>페이지 미리 로드</button>
    )
}