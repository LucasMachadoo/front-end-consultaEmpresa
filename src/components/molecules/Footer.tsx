import React from "react";
import NavLinks from "./NavLinks";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="mt-3 bg-slate-50 px-6 md:px-24 lg:px-32">
      <div className="border-t-2 pt-4"></div>
      <div className="flex justify-center py-4 px-1">
        <div>
          <NavLinks color="text-black" className="text-center" />
        </div>
      </div>

      <div className=" flex justify-around text-sm mt-3 p-3">
        <p className=" ">Copyright © 2023 - Todos os direitos reservados à <strong>consultaempresas.com</strong></p>
        <p>
          Desenvolvido por : <a className="hover:text-orange-300" href="#">Alkimera tech</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
