import { IoMdCall } from "react-icons/io";
const ContactUsButton = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
      <div className="hidden lg:block">
        <a
          href="/contact-us"
          className="text-blue-500 group flex gap-3 items-center text-lg bg-green-100 font-medium ml-9 py-2.5 px-10 transition duration-150 ease-in-out rounded-full hover:bg-[#6759FF] hover:text-white  "
        >
          <IoMdCall className="text-green-500 text-xl group-hover:text-white" />
          <p>Contact Us</p>
        </a>
      </div>
    </div>
  );
};

export default ContactUsButton;
