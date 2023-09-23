import React from 'react'
import AdminSide from '../AdminSide'
import { Link } from 'react-router-dom'
import "../../css/Metric.css"
export default function Templates() {
  return (
    <div className='metric'>

    <div className='dashboard'>
<AdminSide/>
<div className='conin1'>
          <Link to="/bmw">
            <img src={"https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg"} alt="loading..." className='c1'></img> 
            </Link> 
          <div className='ctxt1'>
            <Link to='/BMW'style={{ left:"0px",bottom: "0px"}}>TEMPLATE 1</Link>
          </div>
          </div>
          <div className='conin2'>
            <Link to='/jagu'>
            <img src={"https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg"} alt="loading..." className='c2'></img> 
            </Link>
          <div className='ctxt1'>
            <Link to='/jagu'style={{left:"0px",bottom:"0px"}}>TEMPLATE 2</Link>
          </div>
          </div>
          <div className='conin3'>
            <Link to='/lexus'>
            <img src={"https://cdn-images.zety.com/templates/zety/cascade-3-duo-blue-navy-21@3x.png"} alt="loading..." className='c3'></img> 
            </Link>
          <div className='ctxt1'>
            <Link to='/lexus'style={{left:"0px",bottom:"0px"}}>TEMPLATE 3</Link>
          </div>
          </div>
          {/* <div className='conin4'>
            <Link to='/mercedes'>
            <img src={"http://www.sagmart.com/uploads/2018/09/24/product_1/mercedes-benz-c-class-progressive-c-220d.jpg"} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='conin5'>
            <Link to='/bmw3'>
            <img src={("https://cdni.autocarindia.com/ExtraImages/20210114120710_BMW_320Ld_tracking.jpg")} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='conin6'>
            <Link to='/mini'>
            <img src={("https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/20210702055716_Mini-Cooper-JCW-front-static-1.jpg&c=0")} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='conin7'>
            <Link to='/volvo'>
            <img src={("https://carsales.pxcrush.net/carsales//cars/dealer/3mg1dlvrvnji2sjwr7p21ozw0.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480")} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='ctxt1'>
            <Link to='/mercedes'style={{left:"100px",top:"1470px"}}>MERCEDES-BENZ C<br></br> CLASS C220d Progressive</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/bmw3'style={{left:"570px",top:"1470px"}}>BMW 320 LD</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/mini'style={{left:"1050px",top:"1470px"}}>MINI(John Cooper Works)</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/volvo'style={{left:"100px",top:"1990px"}}>VOLVO XC60<br></br> D5 Inscription</Link>
          </div> */}

    </div>
    </div>
  )
}
