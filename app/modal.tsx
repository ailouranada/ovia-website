"use client";

import { PlayCircle, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Modal(close:{close:void}) {

    return <div className="w-full h-full absolute top-0 left-0 z-10 bg-white">
        <div className="h-2/3 justify-center items-center flex">
            <video src="/promotion.mp4" controls />
        </div>
        <div className="absolute top-5 left-5 size-20">
            <Image src="/logo.png" alt="Logo" fill objectFit="cover" />
        </div>
        <button onClick={() => close} className="border-0 ring-0 bg-transparent text-black absolute top-5 right-5 cursor-pointer">
            <X size={40} color="black" />
        </button>
    </div>
}