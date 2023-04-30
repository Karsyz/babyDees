export default function Footer() {
  return (
    <footer className="py-10 px-6 grid gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-3 justify-items-center bg-gradient-to-b from-white to-babyDeesBG-text">
      <img src="/bdLogoComp.png" alt="" className="w-50 drop-shadow-bdLogo w-3/5"/>
      <div className="flex flex-col justify-end justify-self-start sm:justify-self-center">
        <h5 className="text-babyDeesBG-comp font-bold uppercase text-2xl mb-3">Site Map</h5>
        <div className="grid grid-cols-2 max-w-md gap-x-16 sm:gap-x-32">
          <ul className="">
            <li className="list-none  text-babyDeesBG-comp"><h5 className="text-babyDeesBG-comp font-bold uppercase">Title</h5></li>
            <li className="list-none  text-babyDeesBG-comp">Words</li>
            <li className="list-none  text-babyDeesBG-comp">Words</li>
            <li className="list-none  text-babyDeesBG-comp">Words</li>
          </ul>
          <ul className="">
            <li className="list-none  text-babyDeesBG-comp"><h5 className="text-babyDeesBG-comp font-bold uppercase">Title</h5></li>
            <li className="list-none  text-babyDeesBG-comp">Words</li>
            <li className="list-none  text-babyDeesBG-comp">Words</li>
            <li className="list-none  text-babyDeesBG-comp">Words</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-end w-full sm:w-7/12">
        <h5 className="text-babyDeesBG-comp font-bold uppercase text-2xl mb-3">Newsletter</h5>
        <form className="" action="">
          <label htmlFor="newsLetterEmail" className="text-babyDeesBG-comp mb-3">Enter your email address</label>
          <div className="flex flex-col gap-4 sm:gap-2">
            <input type="text" id="newsLetterEmail" name="newsLetterEmail" placeholder={'username@site.com'} className="h-10 w-full bg-babyDeesBG-comp text-babyDeesBG-text rounded-lg placeholder:text-gray-400 mt-2"></input> 
            
            <button className="h-10 w-full lg:w-2/5 rounded-lg bg-babyDeesBG-red text-sm font-semibold text-white shadow-sm">Subscribe</button>
          </div>
        </form>
      </div>
    </footer>
  )
}
