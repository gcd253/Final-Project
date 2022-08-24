import React from 'react'

const DonationLinks = () => {
  return (
    <div className="grid grid-cols-7 gap-4 w-5/6 m-auto mb-12 pb-12" >

    <a target="_blank" href={'https://www.plannedparenthood.org/get-involved/other-ways-give'} className="rounded-xl col-span-4 w-full p-8 hover:scale-[1.02] duration-300 bg-planned-parenthood bg-cover cursor-pointer">
      <div href={'https://www.plannedparenthood.org/get-involved/other-ways-give'} className="local text-3xl bg-gray-700 w-auto m-auto opacity-90 text-white uppercase rounded-sm px-2" >Planned parenthood</div>
    </a>


    <a target="_blank" href={'https://www.google.com/search?q=donate+to+schools+near+me&sxsrf=ALiCzsYPiVEmbD2fQ_f1MORdFlprzciS-g%3A1661281646041&ei=biUFY4STArygiLMPjsOR0A8&ved=0ahUKEwiEgomz1N35AhU8EGIAHY5hBPoQ4dUDCA8&uact=5&oq=donate+to+schools+near+me&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAeEAUyBggAEB4QBTIGCAAQHhAIMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIMgYIABAeEAgyBQgAEIYDMgUIABCGAzoICAAQgAQQsAM6CQgAEB4QsAMQCDoICAAQhgMQsAM6BggAEB4QBzoICAAQHhAIEAdKBAhBGAFKBAhGGABQh_gEWM3_BGDjhwVoA3AAeACAAboDiAG_DJIBCTMuMS4wLjEuMpgBAKABAcgBBcABAQ&sclient=gws-wiz'} className="rounded-xl col-span-3 w-full p-8 hover:scale-[1.02] duration-300 bg-local-schools bg-cover cursor-pointer">
      <div className="local text-3xl bg-gray-700 w-auto m-auto  text-white uppercase rounded-sm opacity-90" >local schools</div>
    </a>


    <a target="_blank" href={'https://www.planetaid.org/find-a-bin'} className="rounded-xl col-span-3 w-full p-8 hover:scale-[1.02] duration-300 bg-planet-aid bg-cover cursor-pointer">
      <div className="local text-3xl bg-gray-700 w-auto m-auto opacity-90 text-white uppercase rounded-sm opacity-90" >Planet Aid</div>
    </a>


    <a target="_blank" href={'https://dressforsuccess.org/get-involved/donate/'} className="rounded-xl col-span-4 w-full p-8 hover:scale-[1.02] duration-300 bg-dress-for-success bg-cover cursor-pointer">
      <div className="local text-3xl bg-gray-700 w-auto m-auto opacity-90 text-white uppercase rounded-sm opacity-90" >Dress for Success</div>
    </a>


    <a target="_blank" href={'https://www.google.com/search?q=donate+to+women%27s+shelters+near+me&sxsrf=ALiCzsaeMl7g6zdWK3G7VM4zWXNbaF76GA%3A1661281626625&ei=WiUFY5jWJfOkiLMPyumykAM&oq=donate+to+women%27s+shelters+near+me&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCAAQgAQyBggAEB4QCDIFCAAQhgMyBQgAEIYDMgUIABCGAzoHCAAQsAMQQzoNCC4QxwEQ0QMQsAMQQzoGCAAQHhAHOggIABAeEAgQB0oECEEYAUoECEYYAFDpEFibIWDkKWgCcAB4AIABzQOIAakWkgEJMS4zLjEuMi4zmAEAoAEByAEKwAEB&sclient=gws-wiz'} className="rounded-xl col-span-4 w-full p-8 hover:scale-[1.02] duration-300 bg-local-shelters bg-cover cursor-pointer">
      <div className="local text-3xl bg-gray-700 w-auto m-auto opacity-90 text-white uppercase rounded-sm opacity-90" >Local Shelters</div>
    </a>


    <a target="_blank" href={'https://www.redcross.org/donate/donation.html/'} className="rounded-xl col-span-3 w-full p-8 hover:scale-[1.02] duration-300 bg-red-cross bg-cover cursor-pointer">
      <div className="local text-3xl bg-gray-700 w-auto m-auto opacity-90 text-white uppercase rounded-sm opacity-90">Red Cross</div>
    </a>

  </div>
  )
}

export default DonationLinks