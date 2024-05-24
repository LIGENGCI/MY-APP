/** 
 * @author 李耕棋 <s1040704@mqjh.tw>
 */
import Link from "next/link";
import { Navbar, 
        NavbarBrand, 
        NavbarCollapse, 
        NavbarLink, 
        NavbarToggle,
        Footer,
        FooterCopyright,
        FooterLink,
        FooterLinkGroup,
        Carousel,
        Card,
        Button,
        DarkThemeToggle
 } from "flowbite-react";


export default function Home() {
  
  const items = [
    {
      cover:"/banner/小琉球-1.jpg",
      name:"小琉球性感實拍照",
      description:"只要來小棋度假旅遊網預定行程都有提供拍照服務",
    },
    {      
      cover:"/banner/小琉球5.jpg",
      name:"小琉球性感實拍照",
      description:"只要來小棋度假旅遊網預定行程都有提供拍照服務",
    },
    {
      cover:"/banner/小琉球4.jpg",
      name:"小琉球性感實拍照",
      description:"只要來小棋度假旅遊網預定行程都有提供拍照服務",
    },
    {
      cover:"/banner/小琉球3.jpg",
      name:"小琉球性感實拍照",
      description:"只要來小棋度假旅遊網預定行程都有提供拍照服務",
    },


  ];

  return (
    <>
    <div className="bg-cyan-800">
     <div className="container mx-auto">
       <Navbar fluid className="bg-cyan-800">
        <NavbarBrand as={Link} href="/">
          <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">小棋度假旅遊網</span>
        </NavbarBrand>
        <NavbarToggle />
       <NavbarCollapse>
          <NavbarLink href="#" className="text-white " >
            <spen className="px-4 py-2 hover:text-yellow-500  hover:border-yellow-500  hover:border-b-2" >交通</spen>
          </NavbarLink>

          <NavbarLink as={Link} href="#" className="text-white ">
            <spen className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2 " >景點</spen>
          </NavbarLink>

          <NavbarLink href="#"className="text-white ">
          <spen className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500  hover:border-b-2" >關於我們</spen>
          </NavbarLink>

        </NavbarCollapse>
        <DarkThemeToggle/>
       </Navbar>
       </div>
       </div> 
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="\banner\小琉球-1.jpg" alt="..." />
        <img src="\banner\小琉球2.jpg" alt="..." />
        <img src="\banner\小琉球3.jpg" alt="..." />
        <img src="\banner\小琉球4.jpg" alt="..." />
        <img src="\banner\小琉球5.jpg" alt="..." />
      </Carousel>
    </div>
    <div className="bg-white py-16">
     <div className="container mx-auto grid grid-cols-4 gap-4">
      { items.map(item =>

    <Card
      className="max-w-sm"
      imgAlt={item.name}
      imgSrc={item.cover}

    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.name}

      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.description}
      </p>
      <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
        )}
    </div>
       </div> 
    <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
   </>
  );
}

    
