import { dataNavbar } from '../data/data';

const Navbar = () => {
  return (
    <nav className='flex flex-col min-w-[290px] bg-app-light-background'>
      <aside className='flex items-center justify-center py-11 border-b-2 border-app-border'>
        <a href='#'>
          <img
            src={dataNavbar().logo.icon}
            alt={dataNavbar().logo.title}
            className='w-32'
          />
        </a>
      </aside>

      <ul className='flex flex-col gap-y-7 py-12 overflow-scroll'>
        {dataNavbar().nav.map((item) => (
          <a
            key={item.id}
            href={item.to}
            className='group flex flex-row items-center mx-6 p-2 rounded-md hover:bg-app-shade-6'
            onClick={() => {
              alert(item.title);
            }}
          >
            <img src={item.icon} alt={item.title} />

            <span
              className={`ml-3 text-base font-medium text-app-shade-5 group-hover:text-app-black`}
            >
              {item.title}
            </span>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
