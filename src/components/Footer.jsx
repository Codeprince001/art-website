import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Footer = () => {
  return (
    <div className="flex centre flex-col md:flex-row mx-auto text-[14px] text-primary mt-11 r">
      <div className="md:mr-8 mb-8">
        <img src={Logo} alt="logo" />
      </div>

      <div className="flex flex-col md:flex-row flex-wrap md:gap-[4rem] flex-1 gap-8">
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="mb-2 font-bold">COMMUNITY</h3>
          <div><Link>Twitter</Link></div>
          <div><Link>Facebook</Link></div>
          <div><Link>Youtube</Link></div>
          <div><Link>Kingschat</Link></div>
          <div><Link>Ticktok</Link></div>
          <div><Link>Instagram</Link></div>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <h3 className="mb-2 font-bold">COMPANY</h3>
          <div><Link>About</Link></div>
          <div><Link>Roadmap</Link></div>
          <div><Link>Meet the mind</Link></div>
          <div><Link>App (coming soon)</Link></div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h3 className="mb-2 font-bold">CONTACT</h3>
          <div><Link>+2349024956996</Link></div>
          <div><Link>Support@earthinc.io</Link></div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
