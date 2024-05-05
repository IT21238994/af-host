import React from 'react'
import VenusImg from '../Component/PlanetImg/venus.jpg';

export default function () {
  return (
    <div>
        <h1 class="text-center">
            Venus
        </h1>
        <p>
            Venus is the second planet from the Sun. It is a terrestrial planet and is the closest in mass and size to its orbital 
            neighbour Earth. Venus is notable for having the densest atmosphere of the terrestrial planets, composed mostly of carbon 
            dioxide with a thick, global sulfuric acid cloud cover. At the surface it has a mean temperature of 737 K (464 °C; 867 °F) 
            and a pressure of 92 times that of Earth's at sea level. These conditions are extreme enough to compress carbon dioxide into 
            a supercritical state close to Venus's surface.
            <br></br>
            <br></br>
            Internally, Venus has a core, mantle, and crust. Venus lacks an internal dynamo, and its weak induced magnetosphere is 
            instead caused by atmospheric interactions with the solar wind. Internal heat escapes through active volcanism, resulting in 
            resurfacing instead of plate tectonics. Venus is one of two planets in the Solar System that have no moons.[20] Conditions 
            perhaps favourable for life on Venus have been identified at its cloud layers. Venus may have had liquid surface water early 
            in its history with a habitable environment,[21][22] before a runaway greenhouse effect evaporated any water and turned Venus 
            into its present state.[23][24][25]
            <br></br>
            <br></br>
            <img
            className="d-block w-100"
            src={VenusImg}
            
          />
            The rotation of Venus has been slowed and turned against its orbital direction (retrograde) by the strong currents and drag of 
            its atmosphere. It takes 224.7 Earth days for Venus to complete an orbit around the Sun, and a Venusian solar year is just 
            under two Venusian days long. The orbits of Venus and Earth are the closest between any two Solar System planets, approaching 
            each other in synodic periods of 1.6 years. Venus and Earth have the lowest difference in gravitational potential of any pair 
            of Solar System planets. This allows Venus to be the most accessible destination and a useful gravity assist waypoint for 
            interplanetary flights from Earth.
            <br></br>
            <br></br>
            
            Venus has historically been a common and important object for humans, in both their cultures and astronomy. Orbiting inferiorly 
            (inside of Earth's orbit), it always appears close to the Sun in Earth's sky, as either a "morning star" or an "evening star". 
            While this is also true for Mercury, Venus appears more prominent, since it is the third brightest object in Earth's sky after 
            the Moon and the Sun.[26][27]
            <br></br>
            <br></br>
            In 1961, Venus became the target of the first interplanetary flight, Venera 1, followed by many essential interplanetary firsts, 
            such as the first soft landing on another planet by Venera 7 in 1970. These probes demonstrated the extreme surface conditions, 
            an insight that has informed predictions about global warming on Earth.[28][29] This finding ended the theories and then popular 
            science fiction about Venus being a habitable or inhabited planet.
        </p>
    </div>
  )
}
