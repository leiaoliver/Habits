import { Plus } from "phosphor-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import logoImage from "../assets/Group 2.svg";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex item-center justify-between">
      <img src={logoImage} alt="Habits" />

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
        >
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Conteudo do modal
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
