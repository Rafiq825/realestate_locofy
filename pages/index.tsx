import type { NextPage } from "next";
import SellYourHomeContainer from "../components/sell-your-home-container";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-white h-[5096px] flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch h-[98px] bg-gray-white flex flex-row items-center justify-center py-[22px] px-20 box-border text-5xl text-primary-500">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="w-11 relative h-11" alt="" src="/houseline.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">REIS</div>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900">
            <div className="flex flex-row items-start justify-start gap-[30px]">
              <div className="relative leading-[22px]">HOME</div>
              <div className="relative leading-[22px]">ABOUT US</div>
              <div className="relative leading-[22px]">OUR AGENTS</div>
              <div className="relative leading-[22px] font-semibold">
                PROPERTIES
              </div>
              <div className="relative leading-[22px]">GALLERY</div>
              <div className="relative leading-[22px]">BLOG</div>
              <div className="relative leading-[22px]">CONTACT US</div>
              <div className="relative leading-[22px]">SEARCH</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/notification.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-33xl text-gray-white font-body-regular-400">
        <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative leading-[72px] font-semibold">
              Find Your Dream Home
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-base font-body-large-400">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="rounded bg-primary-500 overflow-hidden flex flex-row items-start justify-start py-3 px-6">
                <div className="relative leading-[24px] font-medium">Rent</div>
              </div>
              <div className="rounded bg-gray-white overflow-hidden flex flex-row items-start justify-start py-3 px-6 text-primary-400">
                <div className="relative leading-[24px] font-medium">Sale</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-primary-700">
              <div className="w-[1400px] rounded-lg bg-gray-white flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px]">
                <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative leading-[24px] capitalize font-semibold">
                    Locations
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[4px] text-left text-gray-400">
                    <div className="relative leading-[24px]">
                      Select your city
                    </div>
                    <img
                      className="w-2.5 relative h-1.5 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[177px] flex flex-col items-start justify-start gap-[16px] text-left">
                  <div className="w-[150px] relative leading-[24px] capitalize font-semibold flex items-end">
                    Property Type
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[5px] text-gray-400">
                    <div className="relative leading-[24px]">
                      Select property type
                    </div>
                    <img
                      className="w-2.5 relative h-1.5 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[155px] flex flex-col items-start justify-start gap-[16px] text-left">
                  <div className="w-[150px] relative leading-[24px] capitalize font-semibold flex items-end">
                    Rent Range
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[5px] text-gray-400">
                    <div className="relative leading-[24px]">
                      Select rent range
                    </div>
                    <img
                      className="w-2.5 relative h-1.5 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[102px] rounded bg-primary-500 flex flex-row items-center justify-center py-3 px-6 box-border text-gray-white">
                  <div className="relative leading-[24px] font-medium">
                    Search
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%] text-left text-5xl text-gray-white">
          <div className="self-stretch w-[1300px] flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[26px]">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-2@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px]">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Arlington
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0">
        <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%]">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px]">
            <SellYourHomeContainer
              listingImageId="/icon.svg"
              homeActionImageUrl="Sell your home"
            />
            <SellYourHomeContainer
              listingImageId="/icon1.svg"
              homeActionImageUrl="Rent your home"
              propWidth="312px"
            />
            <SellYourHomeContainer
              listingImageId="/icon2.svg"
              homeActionImageUrl="Buy a home"
              propWidth="unset"
            />
            <SellYourHomeContainer
              listingImageId="/icon3.svg"
              homeActionImageUrl="Free marketing"
              propWidth="312px"
            />
          </div>
        </div>
      </div>
      <div className="w-[1920px] flex flex-col items-center justify-start py-[86px] px-0 box-border gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px] text-left text-mini-5 text-gray-700">
            <div className="h-[467px] flex-1 rounded-3xs bg-gray-white box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/property-image@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start p-2.5">
                <div className="flex-1 relative leading-[20.32px] font-medium">
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
                <div className="relative leading-[18.98px] font-semibold">
                  $ 590,693
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-2xs-8 text-gray-500">
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/car.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/bathtub.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/arrowsout.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    2,096.00 ft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-center text-xs-6">
                <div className="flex flex-row items-center justify-start gap-[5.8px]">
                  <img
                    className="w-[27.6px] relative rounded-[50%] h-[27.6px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="relative leading-[17.42px] font-medium">
                    Jenny Wilson
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.7px]">
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/sharenetwork.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[467px] flex-1 rounded-3xs bg-gray-white box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/property-image@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start p-2.5">
                <div className="flex-1 relative leading-[20.32px] font-medium">
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
                <div className="relative leading-[18.98px] font-semibold">
                  $ 590,693
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-2xs-8 text-gray-500">
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/car.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/bathtub.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/arrowsout.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    2,096.00 ft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-center text-xs-6">
                <div className="flex flex-row items-center justify-start gap-[5.8px]">
                  <img
                    className="w-[27.6px] relative rounded-[50%] h-[27.6px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="relative leading-[17.42px] font-medium">
                    Jenny Wilson
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.7px]">
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/sharenetwork.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[467px] flex-1 rounded-3xs bg-gray-white box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/property-image@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start p-2.5">
                <div className="flex-1 relative leading-[20.32px] font-medium">
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
                <div className="relative leading-[18.98px] font-semibold">
                  $ 590,693
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-2xs-8 text-gray-500">
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/car.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/bathtub.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/arrowsout.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    2,096.00 ft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-center text-xs-6">
                <div className="flex flex-row items-center justify-start gap-[5.8px]">
                  <img
                    className="w-[27.6px] relative rounded-[50%] h-[27.6px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="relative leading-[17.42px] font-medium">
                    Jenny Wilson
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.7px]">
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/sharenetwork.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[467px] flex-1 rounded-3xs bg-gray-white box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/property-image@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start p-2.5">
                <div className="flex-1 relative leading-[20.32px] font-medium">
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
                <div className="relative leading-[18.98px] font-semibold">
                  $ 590,693
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-2xs-8 text-gray-500">
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/car.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/bathtub.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.4px]">
                  <img
                    className="w-[17.4px] relative h-[17.4px]"
                    alt=""
                    src="/arrowsout.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    2,096.00 ft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-center text-xs-6">
                <div className="flex flex-row items-center justify-start gap-[5.8px]">
                  <img
                    className="w-[27.6px] relative rounded-[50%] h-[27.6px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="relative leading-[17.42px] font-medium">
                    Jenny Wilson
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.7px]">
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/sharenetwork.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
                    <img
                      className="w-[14.5px] relative h-[14.5px]"
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded bg-primary-500 flex flex-row items-start justify-start py-3 px-6 text-base text-gray-white">
          <div className="relative leading-[24px] font-medium">
            Load more listing
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
            <div className="flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/card-11@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
              <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="w-6 relative h-6" alt="" src="/mappin.svg" />
                  <div className="relative leading-[24px] font-medium">
                    Washington
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/arrowsout1.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    12000
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/card-21@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
              <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="w-6 relative h-6" alt="" src="/mappin.svg" />
                  <div className="relative leading-[24px] font-medium">
                    Washington
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/arrowsout1.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    12000
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/card-31@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
              <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="w-6 relative h-6" alt="" src="/mappin.svg" />
                  <div className="relative leading-[24px] font-medium">
                    Washington
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/arrowsout1.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    12000
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/card-41@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
              <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="w-6 relative h-6" alt="" src="/mappin.svg" />
                  <div className="relative leading-[24px] font-medium">
                    Washington
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/arrowsout1.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    12000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded bg-primary-500 flex flex-row items-start justify-start py-3 px-6 text-base text-gray-white">
          <div className="relative leading-[24px] font-medium">
            Load more listing
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px]">
        <div className="w-[900px] flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Contact us
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-gray-white flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <b className="self-stretch h-9 relative leading-[36px] inline-block">
                Enquiry Form
              </b>
              <div className="self-stretch relative text-[18px] leading-[30px] font-components-input-text text-slategray">
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-base text-darkgray font-components-input-text">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px]">
                <div className="self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    First name
                  </div>
                </div>
                <div className="self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 border-[1px] border-solid border-gray1">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    Last name
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Email id
                </div>
              </div>
              <div className="self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray1">
                <div className="h-6 relative tracking-[0.15px] leading-[24px] inline-block">
                  Comments or questions
                </div>
              </div>
              <div className="w-[222px] rounded bg-primary-500 h-[46px] flex flex-col items-center justify-center text-center text-gray-white">
                <div className="w-[203.1px] relative inline-block">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start p-[50px] text-left text-5xl text-gray-black font-body-regular-400">
        <div className="flex-1 flex flex-row items-start justify-between">
          <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-large-400">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <img className="w-11 relative h-11" alt="" src="/houseline.svg" />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] font-semibold">
                  REIS
                </div>
                <div className="relative text-sm leading-[16px] font-medium">
                  Real State
                </div>
              </div>
            </div>
            <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
              <div className="relative text-5xl leading-[32px] font-semibold text-gray-black">
                Contact Us
              </div>
              <div className="relative leading-[24px]">Call : +123 400 123</div>
              <div className="w-[312px] relative leading-[24px] flex items-end">
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </div>
              <div className="relative leading-[24px] text-gray-700">
                Email: example@mail.com
              </div>
            </div>
            <div className="w-[304px] flex flex-row items-center justify-between">
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="w-5 relative h-5"
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo1.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo2.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo3.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo4.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">
              Features
            </div>
            <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <div className="relative leading-[24px]">Home</div>
              <div className="relative leading-[24px]">Become a Host</div>
              <div className="relative leading-[24px]">Pricing</div>
              <div className="relative leading-[24px]">Blog</div>
              <div className="relative leading-[24px]">Contact</div>
            </div>
          </div>
          <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">Company</div>
            <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <div className="relative leading-[24px]">About Us</div>
              <div className="relative leading-[24px]">Press</div>
              <div className="relative leading-[24px]">Contact</div>
              <div className="relative leading-[24px]">Careers</div>
              <div className="relative leading-[24px]">Blog</div>
            </div>
          </div>
          <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">
              Team and policies
            </div>
            <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <div className="relative leading-[24px]">Terms of servies</div>
              <div className="relative leading-[24px]">Privacy Policy</div>
              <div className="relative leading-[24px]">Security</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
