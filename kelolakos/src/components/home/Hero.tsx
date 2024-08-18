import React from "react";
import { FlipWords } from "../ui/flip-words";
import { ShimmerButton } from "../ui/shimmer-button";

export function Hero() {
  const words = ["Mudah", "Simple", "Gampang", "Nyaman"];

  return (
    <div className="pt-12 px-6">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 font-semibold" >
        Jadi
        <FlipWords words={words} /> <br />
        Kelola kos milik kamu
      </div>
      <p className="text-base text-muted-foreground text-sm mt-4 w-60 text-zinc-600">
        Skip the ugly hiring process and get instant-access to a senior designer.
        </p> 
        <button 
            className="mt-4 shadow-xl inline-flex text-sm animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50text-sm shadow-[0_10px_5px_-2.5px_#00000020,inset_0_4px_16px_#FFFFFF50] transition-colors hover:bg-neutral-50/30 active:bg-neutral-50/40 dark:bg-neutral-700 dark:shadow-[0_10px_5px_-2.5px_#00000020,inset_0_4px_16px_rgba(150,150,150,0.5)] shadow-\[0_10px_5px_-2\.5px_\#00000020\2c inset_0_4px_16px_\#FFFFFF50\"
            style={{ borderRadius: 99999}}>
             <div className="pulse mr-2" /> Coba Sekarang
        </button>
    </div>
  );
}


      