import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BadgeCheck, Flame, Home, ShieldCheck, Droplets, Wind, MapPin, Phone, CalendarCheck, Wrench, PawPrint, Menu, X } from 'lucide-react';
import './styles.css';

const phone = '941-720-7794';
const services = [
  ['Chimney Cleaning', 'Creosote removal plus a Level I inspection for blockages, leaks, animals and carbon monoxide concerns.', '/assets/chimney-cleaning.jpg'],
  ['Chimney Caps', 'Professional caps to keep rain, wind, sparks, birds and raccoons where they belong: outside.', '/assets/chimney-caps.jpg'],
  ['Animal Removal', 'Humane help for unwanted visitors and preventive protection for your flue.', '/assets/animal-removal.jpg'],
  ['Water Damage Repair', 'Diagnosis for leaks caused by missing caps, cracked crowns, failed liners or flashing issues.', '/assets/water-damage.jpg'],
  ['Wood Stoves', 'Service and support for efficient, safe wood-burning setups.', '/assets/wood-stoves.jpg'],
  ['Chimney Repairs', 'Liners, masonry repair, tuckpointing, crowns and structural restoration options.', '/assets/chimney-repairs.jpg'],
  ['Fireplace Installations', 'Fireplace installation and upgrade options for Tampa Bay homes.', '/assets/installations.jpg'],
  ['Dryer Vent Cleaning', 'Annual vent cleaning to reduce fire risk, improve drying performance and extend appliance life.', '/assets/vent-cleaning.jpg'],
];
const areas = ['Tampa Bay', 'Largo', 'St. Petersburg', 'Clearwater', 'Bradenton', 'Sarasota', 'Port Richey', 'Tarpon Springs'];
function App(){
  const [open,setOpen]=React.useState(false);
  return <>
    <header className="nav">
      <a className="brand" href="#top"><img src="/assets/logo.png" alt="A Sweep Across The Bay logo"/><span>A Sweep Across The Bay</span></a>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
      <nav className={open?'open':''}><a href="#services">Services</a><a href="#repairs">Repairs</a><a href="#areas">Service Area</a><a href="#contact">Contact</a><a className="call" href={`tel:${phone}`}>{phone}</a></nav>
    </header>
    <main id="top">
      <section className="hero">
        <div className="heroImage" aria-hidden="true"></div>
        <div className="heroContent">
          <div className="eyebrow"><Flame size={16}/> Tampa Bay's experienced chimney company</div>
          <h1>Chimney sweep, repair, and water-damage help across the Bay.</h1>
          <p>A Sweep Across The Bay is a family-owned and operated chimney and fireplace service company with 44+ years of experience helping residential and commercial customers keep their systems safe, dry and working properly.</p>
          <div className="ctaRow"><a className="primary" href={`tel:${phone}`}><Phone size={18}/> Call {phone}</a><a className="secondary" href="https://www.asweepacrossthebay.com/contact-us-appointment/"><CalendarCheck size={18}/> Request an appointment</a></div>
          <div className="trust"><span><BadgeCheck/> 44+ years experience</span><span><ShieldCheck/> Level I inspection with sweeping</span><span><Home/> Family-owned and operated</span></div>
        </div>
      </section>
      <section className="intro">
        <div><p className="kicker">Full-service chimney care</p><h2>From routine sweeping to leak diagnosis after Florida storms.</h2></div>
        <p>Regular chimney cleaning removes creosote buildup that can lead to chimney fires. Inspections also check for animal nests, blockages, moisture intrusion, damaged liners and issues that can create carbon monoxide risks.</p>
      </section>
      <section className="cards" id="services">{services.map(([title,copy,img])=><article className="card" key={title}><img src={img} alt={title}/><div><h3>{title}</h3><p>{copy}</p></div></article>)}</section>
      <section className="split" id="repairs">
        <div className="panel dark"><p className="kicker">Repair specialties</p><h2>Stop water before it travels through the chimney system.</h2><p>If rainfall is coming inside, the cause can be a missing cap, cracked crown, damaged flashing, cracked liner or masonry failure. A Sweep Across The Bay uses a process of elimination to find the source and recommend practical repair options.</p><ul><li><Droplets/> Chimney leak and moisture diagnostics</li><li><Wrench/> Liners, tuckpointing, masonry and crowns</li><li><PawPrint/> Animal entry prevention</li></ul></div>
        <div className="panel"><p className="kicker">Dryer vents</p><h2>Cleaner vents. Safer homes. Better drying.</h2><p>The NFPA recommends annual dryer vent cleaning. Technicians inspect the vent, use air pressure and agitation tools with a vacuum, clean the connection piece, reattach the dryer and recheck airflow during operation.</p><div className="benefits"><span>Reduced fire risk</span><span>Lower operation costs</span><span>Longer appliance life</span><span>Improved indoor air quality</span></div></div>
      </section>
      <section className="areas" id="areas"><div><p className="kicker">Service area</p><h2>Serving Tampa Bay, Sarasota, St. Pete, Clearwater and nearby communities.</h2><div className="pills">{areas.map(a=><span key={a}><MapPin size={14}/>{a}</span>)}</div></div><img src="/assets/service-map.png" alt="A Sweep Across The Bay service area map"/></section>
      <section className="process"><p className="kicker">Simple next steps</p><h2>Getting started is easy.</h2><div className="steps"><div><b>1</b><h3>Call or request an appointment</h3><p>Share what you are seeing: smoke, leaks, slow dryer cycles, animals or general maintenance.</p></div><div><b>2</b><h3>Inspection and diagnosis</h3><p>Your technician checks for safety issues, blockages, moisture, damaged masonry and needed repairs.</p></div><div><b>3</b><h3>Clear repair options</h3><p>You get a practical plan that accounts for your home, safety needs and budget.</p></div></div></section>
      <section className="final" id="contact"><div><p className="kicker">Schedule your inspection</p><h2>Need chimney repair near you?</h2><p>Call A Sweep Across The Bay or complete their short appointment form to schedule chimney, fireplace or dryer vent service.</p></div><div className="ctaRow"><a className="primary" href={`tel:${phone}`}><Phone size={18}/> {phone}</a><a className="secondary light" href="https://www.asweepacrossthebay.com/contact-us-appointment/"><ArrowRight size={18}/> Appointment form</a></div></section>
    </main>
    <footer><img src="/assets/logo.png" alt=""/><p>Preview redesign for A Sweep Across The Bay. Original business website: <a href="https://asweepacrossthebay.com">asweepacrossthebay.com</a></p></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
