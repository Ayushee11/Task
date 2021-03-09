import React from "react";
import './styles.css'
import {useMediaQuery} from 'react-responsive'

function App() {
 const isMobile=useMediaQuery({query:mediaQueries.mobileQuery});
 const isDesktop=useMediaQuery({query:mediaQueries.desktopQuery});

 if(isMobile)
 return <Indexresponsivex375 {...indexresponsivex375Data} />;
 else
  return <Indexx1366 {...indexx1366Data} />;
  
  
}

export default App;
export const screenSizes={
  mobile:468,
  tablet:1024,
  desktop:1366,
};

export const mediaQueries={
  mobileQuery:`(max-width:${screenSizes.mobile}px)`,
  desktopQuery:`(min-width:${screenSizes.tablet}px)`
};

function Indexx1366(props) {
  const {
    bitmap,
    rectangle5,
    needHelpToBuildY,
    loremIpsumIsSimpl,
    text3,
    overlapGroup2,
    letsTalk,
    path,
    motivationalSoftwar,
    xcompany,
    aboutUs,
    services,
    portfolio,
    blog,
    contactUs,
    button,
    startAProject,
    whyWorkWithUs,
    weCanDoItForYou,
    typeAndScrambledI,
    ontraryToPopularB,
    stripe,
    stripe2,
    stripe3,
    stripe4,
    stripe5,
    stripe6,
    theStandardChunkO,
    ourServices,
    vector,
    vector2,
    vector3,
    vector4,
    whatIsPythonExec,
    ythonIsAnInterpre,
    website,
    whatIsPythonExec2,
    ythonIsAnInterpre2,
    mobile,
    whatIsPythonExec3,
    ythonIsAnInterpre3,
    hover,
    hover2,
    pea,
    whatIsPythonExec4,
    ythonIsAnInterpre4,
    overlapGroup1,
    overlapGroup22,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    vector11,
    whatIsPythonExec5,
    ythonIsAnInterpre5,
    overlapGroup12,
    vector12,
    vector13,
    overlapGroup3,
    vector14,
    overlapGroup23,
    vector15,
    whatIsPythonExec6,
    ythonIsAnInterpre6,
    vector16,
    vector17,
    vector18,
    vector19,
    vector20,
    whatIsPythonExec7,
    ythonIsAnInterpre7,
    overlapGroup13,
    vector21,
    vector22,
    overlapGroup32,
    vector23,
    overlapGroup24,
    vector24,
    whatIsPythonExec8,
    ythonIsAnInterpre8,
    ourServices2,
    bx,
    overlapGroup14,
    rectangleCopy,
    simplyDummyTextOf,
    projectTitleWithT,
    hover3,
    hover4,
    overlapGroup15,
    rectangleCopy2,
    simplyDummyTextOf2,
    projectTitleWithT2,
    overlapGroup25,
    goToPortfolioPage,
    path2,
    nowYouKnowSomeIn,
    letUsKnowYourReq,
    overlapGroup26,
    letsTalk2,
    path3,
    path4,
    becomeTheBestNear,
    x2019,
    github,
    dribbble,
    instagram,
    linkedin,
    pinterest,
    blog2,
    somethingAboutUser,
    text1,
    text2,
    legancySystemMigra,
    ourCompany,
    jobOffersCustomers,
    useful,
    githubResourcesFre,
  } = props;

  return (
    <div className="index-x1366">
      <div className="first-section">
        <div className="overlap-group10">
          <img className="bitmap" src={bitmap} />
          <img className="rectangle-5" src={rectangle5} />
          <div className="content">
            <h1 className="need-help-to-build-y helveticaneue-bold-ship-gray-36px">{needHelpToBuildY}</h1>
            <div className="overlap-group1">
              <div className="lorem-ipsum-is-simpl helveticaneue-regular-normal-scarpa-flow-18px">
                {loremIpsumIsSimpl}
              </div>
              <div className="rectangle"></div>
              <div className="text-3">{text3}</div>
            </div>
            <div className="btn">
              <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="lets-talk helveticaneue-medium-white-18px">{letsTalk}</div>
                <img className="path" src={path} />
              </div>
            </div>
          </div>
          <div className="nav">
            <div className="logo">
              <div className="rectangle-6"></div>
              <div className="rectangle-7"></div>
              <div className="rectangle-8"></div>
              <div className="overlap-group2-1">
                <div className="motivational-softwar">{motivationalSoftwar}</div>
                <div className="xcompany">{xcompany}</div>
              </div>
            </div>
            <div className="menu">
              <div className="about-us helveticaneue-regular-normal-scarpa-flow-14px">{aboutUs}</div>
              <div className="services helveticaneue-regular-normal-scarpa-flow-14px">{services}</div>
              <div className="portfolio helveticaneue-regular-normal-scarpa-flow-14px">{portfolio}</div>
              <div className="blog helveticaneue-regular-normal-scarpa-flow-14px">{blog}</div>
              <div className="contact-us helveticaneue-regular-normal-scarpa-flow-14px">{contactUs}</div>
              <div className="flag">
                <div className="overlap-group1-1">
                  <div className="rectangle-1"></div>
                  <div className="rectangle-2"></div>
                  <div className="rectangle-copy-2"></div>
                </div>
              </div>
            </div>
            <div className="btn-1">
              <div className="overlap-group1-2">
                <img className="button" src={button} />
                <div className="start-a-project">{startAProject}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="flex-row">
          <div className="why-work-with-us helveticaneue-medium-ship-gray-24px">{whyWorkWithUs}</div>
          <div className="we-can-do-it-for-you helveticaneue-medium-ship-gray-24px">{weCanDoItForYou}</div>
        </div>
        <div className="flex-row-1">
          <p className="type-and-scrambled-i helveticaneue-regular-normal-scarpa-flow-16px">{typeAndScrambledI}</p>
          <p className="ontrary-to-popular-b helveticaneue-regular-normal-scarpa-flow-16px">{ontraryToPopularB}</p>
        </div>
        <div className="flex-row-2">
          <div className="fav-copy border-1px-periwinkle-gray">
            <img className="stripe-1" src={stripe} />
          </div>
          <div className="fav-copy-1 border-1px-periwinkle-gray">
            <img className="stripe-1" src={stripe2} />
          </div>
          <div className="fav-copy-1 border-1px-periwinkle-gray">
            <img className="stripe-1" src={stripe3} />
          </div>
          <div className="fav-copy-1 border-1px-periwinkle-gray">
            <img className="stripe-1" src={stripe4} />
          </div>
          <div className="fav-copy-2 border-1px-periwinkle-gray">
            <img className="stripe" src={stripe5} />
          </div>
          <div className="fav-copy-1 border-1px-periwinkle-gray">
            <img className="stripe-1" src={stripe6} />
          </div>
        </div>
        <p className="the-standard-chunk-o helveticaneue-regular-normal-scarpa-flow-16px">{theStandardChunkO}</p>
      </div>
      <div className="services-section">
        <div className="our-services helveticaneue-medium-ship-gray-24px">{ourServices}</div>
        <div className="flex-row-3">
          <div className="flex-col">
            <div className="bx">
              <div className="overlap-group-1 border-1px-periwinkle-gray">
                <div className="team">
                  <div className="overlap-group2-2">
                    <img className="vector" src={vector} />
                    <img className="vector-5" src={vector2} />
                    <img className="vector-6" src={vector3} />
                    <img className="vector-7" src={vector4} />
                  </div>
                </div>
                <div className="flex-col-1">
                  <div className="what-is-python-exec-1 helveticaneue-medium-ship-gray-18px">{whatIsPythonExec}</div>
                  <div className="ython-is-an-interpre-1 helveticaneue-regular-normal-scarpa-flow-16px">
                    {ythonIsAnInterpre}
                  </div>
                </div>
              </div>
            </div>
            <div className="bx-1">
              <div className="overlap-group4 border-1px-periwinkle-gray">
                <img className="website" src={website} />
                <div className="flex-col-3">
                  <div className="what-is-python-exec helveticaneue-medium-ship-gray-18px">{whatIsPythonExec2}</div>
                  <div className="ython-is-an-interpre-2 helveticaneue-regular-normal-scarpa-flow-16px">
                    {ythonIsAnInterpre2}
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group6">
              <div className="bx-2">
                <div className="overlap-group1-3 border-1px-periwinkle-gray">
                  <img className="mobile" src={mobile} />
                  <div className="flex-col-4">
                    <div className="what-is-python-exec-2 helveticaneue-medium-ship-gray-18px">{whatIsPythonExec3}</div>
                    <div className="ython-is-an-interpre-2 helveticaneue-regular-normal-scarpa-flow-16px">
                      {ythonIsAnInterpre3}
                    </div>
                  </div>
                </div>
              </div>
              <div className="element-curser">
                <img className="hover-1" src={hover} />
                <div className="hover">{hover2}</div>
              </div>
            </div>
            <div className="bx-3">
              <div className="overlap-group8 border-1px-periwinkle-gray">
                <img className="pea" src={pea} />
                <div className="flex-col-5">
                  <div className="what-is-python-exec-3 helveticaneue-medium-ship-gray-18px">{whatIsPythonExec4}</div>
                  <div className="ython-is-an-interpre helveticaneue-regular-normal-scarpa-flow-16px">
                    {ythonIsAnInterpre4}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col-6">
            <div className="bx-4">
              <div className="overlap-group3 border-1px-periwinkle-gray">
                <div className="web">
                  <div className="overlap-group1-4" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                    <div className="overlap-group2-3" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                      <div className="flex-col-7">
                        <img className="vector-1" src={vector5} />
                        <img className="vector-2" src={vector6} />
                      </div>
                      <div className="flex-col-2">
                        <img className="vector-1" src={vector7} />
                        <img className="vector-2" src={vector8} />
                      </div>
                      <div className="flex-col-2">
                        <img className="vector-8" src={vector9} />
                        <img className="vector-2" src={vector10} />
                      </div>
                    </div>
                    <img className="vector-9" src={vector11} />
                  </div>
                </div>
                <div className="flex-col-8">
                  <div className="what-is-python-exec-4 helveticaneue-medium-ship-gray-18px">{whatIsPythonExec5}</div>
                  <div className="ython-is-an-interpre-2 helveticaneue-regular-normal-scarpa-flow-16px">
                    {ythonIsAnInterpre5}
                  </div>
                </div>
              </div>
            </div>
            <div className="bx-5">
              <div className="overlap-group-1 border-1px-periwinkle-gray">
                <div className="rtc">
                  <div className="overlap-group1-5" style={{ backgroundImage: `url(${overlapGroup12})` }}>
                    <img className="vector-3" src={vector12} />
                  </div>
                  <img className="vector-10" src={vector13} />
                  <div className="flex-row-4">
                    <div className="overlap-group3-1" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                      <img className="vector-3" src={vector14} />
                    </div>
                    <div className="overlap-group2-4" style={{ backgroundImage: `url(${overlapGroup23})` }}>
                      <img className="vector-3" src={vector15} />
                    </div>
                  </div>
                </div>
                <div className="flex-col-1">
                  <div className="what-is-python-exec-1 helveticaneue-medium-ship-gray-18px">{whatIsPythonExec6}</div>
                  <div className="ython-is-an-interpre-1 helveticaneue-regular-normal-scarpa-flow-16px">
                    {ythonIsAnInterpre6}
                  </div>
                </div>
              </div>
            </div>
            <div className="bx-6">
              <div className="overlap-group7 border-1px-periwinkle-gray">
                <div className="messenger">
                  <div className="overlap-group1-6">
                    <img className="vector-11" src={vector16} />
                    <img className="vector-12" src={vector17} />
                    <img className="vector-13" src={vector18} />
                    <img className="vector-14" src={vector19} />
                    <img className="vector-15" src={vector20} />
                  </div>
                </div>
                <div className="flex-col-9">
                  <div className="what-is-python-exec-5 helveticaneue-medium-ship-gray-18px">{whatIsPythonExec7}</div>
                  <div className="ython-is-an-interpre-2 helveticaneue-regular-normal-scarpa-flow-16px">
                    {ythonIsAnInterpre7}
                  </div>
                </div>
              </div>
            </div>
            <div className="bx-7">
              <div className="overlap-group-1 border-1px-periwinkle-gray">
                <div className="solutions">
                  <div className="overlap-group1-7" style={{ backgroundImage: `url(${overlapGroup13})` }}>
                    <img className="vector-4" src={vector21} />
                  </div>
                  <img className="vector-16" src={vector22} />
                  <div className="flex-row-5">
                    <div className="overlap-group3-2" style={{ backgroundImage: `url(${overlapGroup32})` }}>
                      <img className="vector-4" src={vector23} />
                    </div>
                    <div className="overlap-group2-5" style={{ backgroundImage: `url(${overlapGroup24})` }}>
                      <img className="vector-17" src={vector24} />
                    </div>
                  </div>
                </div>
                <div className="flex-col-1">
                  <div className="what-is-python-exec-1 helveticaneue-medium-ship-gray-18px">{whatIsPythonExec8}</div>
                  <div className="ython-is-an-interpre-1 helveticaneue-regular-normal-scarpa-flow-16px">
                    {ythonIsAnInterpre8}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-section">
        <div className="flex-col-10">
          <div className="our-services-1 helveticaneue-medium-ship-gray-24px">{ourServices2}</div>
          <div className="overlap-group5">
            <img className="bx-8" src={bx} />
            <div className="bx-9">
              <div className="overlap-group1-8" style={{ backgroundImage: `url(${overlapGroup14})` }}>
                <img className="rectangle-copy" src={rectangleCopy} />
                <p className="simply-dummy-text-of helveticaneue-regular-normal-white-16px">{simplyDummyTextOf}</p>
                <div className="project-title-with-t helveticaneue-bold-white-18px">{projectTitleWithT}</div>
              </div>
            </div>
            <div className="element-curser-1">
              <img className="hover-1" src={hover3} />
              <div className="hover-2">{hover4}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group4-1">
          <div className="bx-10">
            <div className="overlap-group1-9" style={{ backgroundImage: `url(${overlapGroup15})` }}>
              <img className="rectangle-copy-1" src={rectangleCopy2} />
              <p className="simply-dummy-text-of-1 helveticaneue-regular-normal-white-16px">{simplyDummyTextOf2}</p>
              <div className="project-title-with-t-1 helveticaneue-bold-white-18px">{projectTitleWithT2}</div>
            </div>
          </div>
          <div className="more">
            <div className="overlap-group2-6" style={{ backgroundImage: `url(${overlapGroup25})` }}>
              <div className="go-to-portfolio-page helveticaneue-bold-white-18px">{goToPortfolioPage}</div>
              <img className="path-1" src={path2} />
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="last-section">
          <div className="overlap-group1-10">
            <div className="now-you-know-some-in">{nowYouKnowSomeIn}</div>
            <p className="let-us-know-your-req helveticaneue-regular-normal-white-16px">{letUsKnowYourReq}</p>
            <div className="btn-2">
              <div className="overlap-group2-7" style={{ backgroundImage: `url(${overlapGroup26})` }}>
                <div className="lets-talk-1 helveticaneue-medium-white-18px">{letsTalk2}</div>
                <img className="path-2" src={path3} />
              </div>
            </div>
          </div>
        </div>
        <div className="go-to-top">
          <div className="overlap-group3-3">
            <div className="rectangle-3"></div>
            <img className="path-3" src={path4} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="flex-col-11">
          <div className="logo-1">
            <div className="overlap-group1-11">
              <div className="rectangle-6-1"></div>
              <div className="rectangle-7-1"></div>
            </div>
            <div className="rectangle-8-1"></div>
          </div>
          <p className="become-the-best-near helveticaneue-regular-normal-periwinkle-gray-16px">{becomeTheBestNear}</p>
          <p className="x2019 helveticaneue-regular-normal-periwinkle-gray-16px">{x2019}</p>
          <div className="flex-row-6">
            <img className="github" src={github} />
            <img className="flex-row-item" src={dribbble} />
            <img className="flex-row-item" src={instagram} />
            <img className="linked-in" src={linkedin} />
            <img className="flex-row-item" src={pinterest} />
          </div>
        </div>
        <div className="flex-row-7">
          <div className="flex-col-12">
            <div className="blog-1 helveticaneue-medium-ship-gray-18px">{blog2}</div>
            <div className="something-about-user helveticaneue-regular-normal-scarpa-flow-16px">
              {somethingAboutUser}
            </div>
            <div className="text-1 helveticaneue-regular-normal-scarpa-flow-16px">{text1}</div>
            <div className="text-2 helveticaneue-regular-normal-scarpa-flow-16px">{text2}</div>
            <div className="legancy-system-migra helveticaneue-regular-normal-scarpa-flow-16px">
              {legancySystemMigra}
            </div>
          </div>
          <div className="flex-col-13">
            <div className="our-company helveticaneue-medium-ship-gray-18px">{ourCompany}</div>
            <div className="job-offers-customers helveticaneue-regular-normal-scarpa-flow-16px">
              {jobOffersCustomers}
            </div>
          </div>
          <div className="flex-col-14">
            <div className="useful helveticaneue-medium-ship-gray-18px">{useful}</div>
            <div className="github-resources-fre helveticaneue-regular-normal-scarpa-flow-16px">
              {githubResourcesFre}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const indexx1366Data = {
    bitmap: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/bitmap-2@1x.svg",
    rectangle5: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/rectangle-5-2@1x.svg",
    needHelpToBuildY: "NEED HELP TO BUILD YOUR WEB APPLICATION?",
    loremIpsumIsSimpl: (<>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s<br /><br />We’re a full-stack JavaScript development company, creating serverless cross-platform and web applications.</>),
    text3: "is simply dummy text",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy-12@2x.svg",
    letsTalk: "Let’s talk",
    path: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-13@2x.svg",
    motivationalSoftwar: "Motivational software solution",
    xcompany: "XCompany",
    aboutUs: "About Us",
    services: "Services",
    portfolio: "Portfolio",
    blog: "Blog",
    contactUs: "Contact Us",
    button: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-1@2x.svg",
    startAProject: "Start a Project",
    whyWorkWithUs: "Why work with us ?",
    weCanDoItForYou: "We can do it for you with our special strategy",
    typeAndScrambledI: "type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
    ontraryToPopularB: "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    stripe: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe-5@2x.svg",
    stripe2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe-4@2x.svg",
    stripe3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe-7@2x.svg",
    stripe4: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe-6@2x.svg",
    stripe5: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe-9@2x.svg",
    stripe6: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe-8@2x.svg",
    theStandardChunkO: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    ourServices: "Our Services",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-9@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-10@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-11@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-12@2x.svg",
    whatIsPythonExec: "The technical team and coaching for big and cross-platform projects",
    ythonIsAnInterpre: "object-oriented, high-level programming",
    website: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/website@2x.svg",
    whatIsPythonExec2: "Website",
    ythonIsAnInterpre2: "object-oriented, high-level programming",
    mobile: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/mobile@2x.svg",
    whatIsPythonExec3: "Mobile Applications",
    ythonIsAnInterpre3: "object-oriented, high-level programming",
    hover: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/hover-1@2x.svg",
    hover2: "Hover",
    pea: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/pea@2x.svg",
    whatIsPythonExec4: "PWA: Progressive web apps",
    ythonIsAnInterpre4: "object-oriented, high-level programming",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-13@2x.svg",
    overlapGroup22: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-15@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-17@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-16@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-19@2x.svg",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-18@2x.svg",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-21@2x.svg",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-20@2x.svg",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-14@2x.svg",
    whatIsPythonExec5: "Web Applications",
    ythonIsAnInterpre5: "object-oriented, high-level programming",
    overlapGroup12: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-23@2x.svg",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-24@2x.svg",
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-22@2x.svg",
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-25@2x.svg",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-26@2x.svg",
    overlapGroup23: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-27@2x.svg",
    vector15: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-28@2x.svg",
    whatIsPythonExec6: "RTC protocol software solutions (Voice and Video) - an end to end communication",
    ythonIsAnInterpre6: "object-oriented, high-level programming",
    vector16: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-29@2x.svg",
    vector17: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-30@2x.svg",
    vector18: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-31@2x.svg",
    vector19: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-32@2x.svg",
    vector20: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-33@2x.svg",
    whatIsPythonExec7: "Private and secure messenger solutions",
    ythonIsAnInterpre7: "object-oriented, high-level programming",
    overlapGroup13: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-37@2x.svg",
    vector21: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-38@2x.svg",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-34@2x.svg",
    overlapGroup32: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-39@2x.svg",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-40@2x.svg",
    overlapGroup24: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-35@2x.svg",
    vector24: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-36@2x.svg",
    whatIsPythonExec8: "Sip protocol software solutions (Voice and Video)",
    ythonIsAnInterpre8: "object-oriented, high-level programming",
    ourServices2: "Our Portfolio",
    bx: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/bx@1x.svg",
    overlapGroup14: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/rectangle-copy-3-1@1x.svg",
    rectangleCopy: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/rectangle-copy-1@1x.svg",
    simplyDummyTextOf: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    projectTitleWithT: "Project Title with technologies",
    hover3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/hover@2x.svg",
    hover4: "Hover",
    overlapGroup15: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/rectangle-copy-3-2@1x.svg",
    rectangleCopy2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/rectangle-copy-2@1x.svg",
    simplyDummyTextOf2: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    projectTitleWithT2: "Project Title with technologies",
    overlapGroup25: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy-11@2x.svg",
    goToPortfolioPage: "Go to portfolio page and watch more projects",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-12@2x.svg",
    nowYouKnowSomeIn: "Now you know some information, Trust us and Start your Project",
    letUsKnowYourReq: "Let us know your requirements and we'll get back to you as soon as possible. We care about your privacy and automatically agree to the following NDA. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.",
    overlapGroup26: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy-10@2x.svg",
    letsTalk2: "Let’s talk",
    path3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-10@2x.svg",
    path4: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-11@2x.svg",
    becomeTheBestNear: (<>Become the best.<br />with these recommendations.<br />Reference site about.</>),
    x2019: "© 2019 XCompany. All rights reserved",
    github: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/github-1@2x.svg",
    dribbble: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/dribbble-1@2x.svg",
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/instagram-1@2x.svg",
    linkedin: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/linkedin-1@2x.svg",
    pinterest: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/pinterest-1@2x.svg",
    blog2: "Blog",
    somethingAboutUser: "Something about User Exprience",
    text1: "E-Learning is rising",
    text2: "Why Can’t E-commerce",
    legancySystemMigra: "Legancy System Migrate",
    ourCompany: "Our Company",
    jobOffersCustomers: (<>Job Offers<br /><br />Customers Support<br /><br />CRM<br /><br />Careers</>),
    useful: "Useful",
    githubResourcesFre: (<>Github Resources<br /><br />Free Resources<br /><br />Component<br /><br />Shared Directory</>),
};




function Indexresponsivex375(props) {
  const {
    overlapGroup4,
    rectangle5,
    needHelpToBuildY,
    motivationalSoftwar,
    xcompany,
    combinedShape,
    loremIpsumIsSimpl,
    overlapGroup1,
    letsTalk,
    path,
    whyWorkWithUs,
    typeAndScrambledI,
    stripe,
    stripe2,
    stripe3,
    stripe4,
    weCanDoItForYou,
    ontraryToPopularB,
    theStandardChunkO,
    ourServices,
    overlapGroup12,
    vector,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    whatIsPythonExec,
    ythonIsAnInterpre,
    buttonCopy,
    path2,
    arrow,
    path3,
    ourServices2,
    overlapGroup3,
    rectangleCopy,
    simplyDummyTextOf,
    projectTitleWithT,
    buttonCopy2,
    path4,
    arrowCopy3,
    path5,
    overlapGroup13,
    goToPortfolioPage,
    path6,
    nowYouKnowSomeIn,
    letUsKnowYourReq,
    overlapGroup2,
    letsTalk2,
    path7,
    path8,
    becomeTheBestNear,
    x2020AminsoftAll,
    github,
    dribbble,
    instagram,
    linkedin,
    pinterest,
  } = props;

  return (
    <div className="index-responsive-x375">
      <div className="viewport">
        <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <img className="rectangle-5" src={rectangle5} />
          <h1 className="need-help-to-build-y helveticaneue-bold-ship-gray-24px">{needHelpToBuildY}</h1>
          <div className="nav">
            <div className="overlap-group1">
              <div className="logo">
                <div className="rectangle-6"></div>
                <div className="rectangle-7"></div>
                <div className="rectangle-8"></div>
                <div className="overlap-group2">
                  <div className="motivational-softwar helveticaneue-regular-normal-periwinkle-gray-12px">
                    {motivationalSoftwar}
                  </div>
                  <div className="xcompany helveticaneue-medium-ship-gray-20px">{xcompany}</div>
                </div>
              </div>
              <img className="combined-shape" src={combinedShape} />
            </div>
          </div>
        </div>
        <p className="lorem-ipsum-is-simpl helveticaneue-regular-normal-scarpa-flow-16px">{loremIpsumIsSimpl}</p>
        <div className="btn">
          <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <div className="lets-talk helveticaneue-medium-white-18px">{letsTalk}</div>
            <img className="path-1" src={path} />
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="why-work-with-us helveticaneue-medium-ship-gray-24px">{whyWorkWithUs}</div>
        <p className="type-and-scrambled-i helveticaneue-regular-normal-scarpa-flow-16px">{typeAndScrambledI}</p>
        <div className="slider">
          <div className="fav-copy border-1px-periwinkle-gray">
            <img className="stripe" src={stripe} />
          </div>
          <div className="fav-copy-1 border-1px-periwinkle-gray">
            <img className="stripe" src={stripe2} />
          </div>
          <div className="fav-copy-1 border-1px-periwinkle-gray">
            <img className="stripe" src={stripe3} />
          </div>
          <div className="fav-copy-1 border-1px-periwinkle-gray">
            <img className="stripe" src={stripe4} />
          </div>
        </div>
        <div className="we-can-do-it-for-you helveticaneue-medium-ship-gray-24px">{weCanDoItForYou}</div>
        <p className="ontrary-to-popular-b helveticaneue-regular-normal-scarpa-flow-16px">{ontraryToPopularB}</p>
        <p className="the-standard-chunk-o helveticaneue-regular-normal-scarpa-flow-16px">{theStandardChunkO}</p>
      </div>
      <div className="services-section">
        <div className="our-services helveticaneue-medium-ship-gray-24px">{ourServices}</div>
        <div className="bx">
          <div className="web">
            <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup12})` }}>
              <div className="overlap-group2-1">
                <img className="vector" src={vector} />
                <img className="vector-1" src={vector2} />
                <img className="vector-2" src={vector3} />
                <img className="vector-3" src={vector4} />
                <img className="vector-4" src={vector5} />
                <img className="vector-5" src={vector6} />
                <img className="vector-6" src={vector7} />
              </div>
              <img className="vector-7" src={vector8} />
            </div>
          </div>
          <div className="what-is-python-exec helveticaneue-medium-ship-gray-18px">{whatIsPythonExec}</div>
          <div className="ython-is-an-interpre helveticaneue-regular-normal-scarpa-flow-16px">{ythonIsAnInterpre}</div>
        </div>
        <div className="flex-row">
          <div className="arrow-copy">
            <div className="overlap-group-2">
              <img className="button-copy" src={buttonCopy} />
              <img className="path-2" src={path2} />
            </div>
          </div>
          <div className="arrow" style={{ backgroundImage: `url(${arrow})` }}>
            <img className="path-3" src={path3} />
          </div>
        </div>
      </div>
      <div className="portfolio-section">
        <div className="our-services-1 helveticaneue-medium-ship-gray-24px">{ourServices2}</div>
        <div className="bx-1">
          <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
            <img className="rectangle-copy" src={rectangleCopy} />
            <p className="simply-dummy-text-of helveticaneue-regular-normal-white-16px">{simplyDummyTextOf}</p>
            <div className="project-title-with-t helveticaneue-bold-white-18px">{projectTitleWithT}</div>
          </div>
        </div>
        <div className="flex-row-1">
          <div className="arrow-copy">
            <div className="overlap-group-2">
              <img className="button-copy" src={buttonCopy2} />
              <img className="path-2" src={path4} />
            </div>
          </div>
          <div className="arrow" style={{ backgroundImage: `url(${arrowCopy3})` }}>
            <img className="path-3" src={path5} />
          </div>
        </div>
        <div className="more">
          <div className="overlap-group1-2" style={{ backgroundImage: `url(${overlapGroup13})` }}>
            <div className="go-to-portfolio-page helveticaneue-medium-white-18px">{goToPortfolioPage}</div>
            <img className="path" src={path6} />
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="last-section">
          <div className="overlap-group1-3">
            <div className="now-you-know-some-in">{nowYouKnowSomeIn}</div>
            <p className="let-us-know-your-req helveticaneue-regular-normal-white-16px">{letUsKnowYourReq}</p>
            <div className="btn-1">
              <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="lets-talk helveticaneue-medium-white-18px">{letsTalk2}</div>
                <img className="path-1" src={path7} />
              </div>
            </div>
          </div>
        </div>
        <div className="go-to-top">
          <div className="overlap-group3-1">
            <div className="rectangle"></div>
            <img className="path-4" src={path8} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="logo-1">
          <div className="overlap-group1-4">
            <div className="rectangle-6-1"></div>
            <div className="rectangle-7-1"></div>
          </div>
          <div className="rectangle-8"></div>
        </div>
        <p className="become-the-best-near helveticaneue-regular-normal-periwinkle-gray-16px">{becomeTheBestNear}</p>
        <p className="x2020-amin-soft-all helveticaneue-regular-normal-periwinkle-gray-16px">{x2020AminsoftAll}</p>
        <div className="flex-row-2">
          <img className="github" src={github} />
          <img className="flex-row-item" src={dribbble} />
          <img className="flex-row-item" src={instagram} />
          <img className="flex-row-item" src={linkedin} />
          <img className="flex-row-item" src={pinterest} />
        </div>
      </div>
    </div>
  );
}
const indexresponsivex375Data = {
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/bitmap@2x.svg",
    rectangle5: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/rectangle-5@2x.svg",
    needHelpToBuildY: "NEED HELP TO BUILD YOUR WEB APPLICATION?",
    motivationalSoftwar: "Motivational software solution",
    xcompany: "XCompany",
    combinedShape: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/combined-shape@2x.svg",
    loremIpsumIsSimpl: (<>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s<br /><br />We’re a full-stack JavaScript development company, creating serverless cross-platform and web applications.</>),
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy-6@2x.svg",
    letsTalk: "Let’s talk",
    path: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-7@2x.svg",
    whyWorkWithUs: "Why work with us ?",
    typeAndScrambledI: "type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
    stripe: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe-3@2x.svg",
    stripe2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe-2@2x.svg",
    stripe3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe-1@2x.svg",
    stripe4: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/stripe@2x.svg",
    weCanDoItForYou: "We can do it for you with our special strategy",
    ontraryToPopularB: "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    theStandardChunkO: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    ourServices: "Our Services",
    overlapGroup12: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-2@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-3@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-4@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-5@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-6@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-7@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-8@2x.svg",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/vector-1@2x.svg",
    whatIsPythonExec: "Web Applications",
    ythonIsAnInterpre: "object-oriented, high-level programming",
    buttonCopy: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy-5@2x.svg",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-6@2x.svg",
    arrow: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy-4@2x.svg",
    path3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-5@2x.svg",
    ourServices2: "Our Portfolio",
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/rectangle-copy-3@2x.svg",
    rectangleCopy: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/rectangle-copy@2x.svg",
    simplyDummyTextOf: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    projectTitleWithT: "Project Title with technologies",
    buttonCopy2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy-3@2x.svg",
    path4: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-4@2x.svg",
    arrowCopy3: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy-2@2x.svg",
    path5: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-3@2x.svg",
    overlapGroup13: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy-1@2x.svg",
    goToPortfolioPage: "Go to portfolio page and watch more projects",
    path6: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-2@2x.svg",
    nowYouKnowSomeIn: "Now you know some information, Trust us and Start your Project",
    letUsKnowYourReq: "Let us know your requirements and we'll get back to you as soon as possible. We care about your privacy and automatically agree to the following NDA. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/button-copy@2x.svg",
    letsTalk2: "Let’s talk",
    path7: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path@2x.svg",
    path8: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/path-1@2x.svg",
    becomeTheBestNear: (<>Become the best.<br />with these recommendations.<br />Reference site about.</>),
    x2020AminsoftAll: "© 2019 XCompany. All rights reserved",
    github: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/github@2x.svg",
    dribbble: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/dribbble@2x.svg",
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/instagram@2x.svg",
    linkedin: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/linkedin@2x.svg",
    pinterest: "https://anima-uploads.s3.amazonaws.com/projects/60466454b7659df178236686/releases/6047457392aa0b7a32bbde08/img/pinterest@2x.svg",
};

