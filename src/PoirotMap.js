import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";

const PoirotMap = () => {
  const [selectedInvestigation, setSelectedInvestigation] = useState({
    id: 1,
    name: "The Mystery of the Styles",
    lat: 51.88,
    lng: 0.55,
    description:
      "In my first significant case, I employed my peculiar methods to solve a perplexing murder in a quaint country house.",
  });

  const customIcon = new L.Icon({
    iconUrl: "/poirot/mousetach.png",
    iconSize: [50, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  const handleMarkerClick = (investigation) => {
    setSelectedInvestigation(investigation);
    console.log("Marker clicked:", investigation);
  };

  const investigations = [
    {
      id: 1,
      name: "The Mystery of the Styles",
      lat: 51.88,
      lng: 0.55,
      description:
        "In my first significant case, I employed my peculiar methods to solve a perplexing murder in a quaint country house.",
    },
    {
      id: 2,
      name: "Murder on the Orient Express",
      lat: 41.0082,
      lng: 28.9784,
      description:
        "A most intriguing case on the luxurious Orient Express, where I unraveled a murder most baffling.",
    },
    {
      id: 3,
      name: "Death on the Nile",
      lat: 25.6872,
      lng: 32.6396,
      description:
        "Aboard a Nile cruise, I faced a complex weave of love, jealousy, and murder, a challenge most stimulating.",
    },
    {
      id: 4,
      name: "Evil Under the Sun",
      lat: 50.321,
      lng: -3.5779,
      description:
        "A seemingly tranquil holiday at a seaside resort led me to expose the sinister truth behind a cunning murder.",
    },
    {
      id: 5,
      name: "The ABC Murders",
      lat: 52.3555,
      lng: -1.1743,
      description:
        "A series of alphabetically ordered murders presented a challenge, which I, of course, accepted with alacrity.",
    },
    {
      id: 6,
      name: "Appointment with Death",
      lat: 31.7683,
      lng: 35.2137,
      description:
        "In the ancient city of Jerusalem, I investigated the murder of a tyrannical woman during a Middle-Eastern excursion.",
    },
    {
      id: 7,
      name: "Hercule Poirot's Christmas",
      lat: 51.5074,
      lng: -0.1278,
      description:
        "A festive gathering turned grim with the murder of a family patriarch, a puzzle most intriguing.",
    },
    {
      id: 8,
      name: "Five Little Pigs",
      lat: 51.2084,
      lng: 0.5208,
      description:
        "I re-investigated a sixteen-year-old case, proving that justice can prevail even after many years.",
    },
    {
      id: 9,
      name: "Peril at End House",
      lat: 50.2629,
      lng: -5.051,
      description:
        "In picturesque Cornwall, I protected a young heiress from repeated attempts on her life.",
    },
    {
      id: 10,
      name: "Lord Edgware Dies",
      lat: 51.5074,
      lng: -0.1278,
      description:
        "A perplexing case in London where the prime suspect had an unbreakable alibi.",
    },
    {
      id: 11,
      name: "Murder in Mesopotamia",
      lat: 32.0144,
      lng: 44.1453,
      description:
        "In Iraq, I solved the murder of an archaeologist's wife, a case rife with deception and greed.",
    },
    {
      id: 12,
      name: "The Murder of Roger Ackroyd",
      lat: 51.4036,
      lng: -0.3375,
      description:
        "A riveting case involving the murder of a wealthy widower, where everyone had something to hide.",
    },
    {
      id: 13,
      name: "Cat Among the Pigeons",
      lat: 51.4067,
      lng: -0.3781,
      description:
        "At a girls' boarding school, I untangled a web of espionage and murder most foul.",
    },
    {
      id: 14,
      name: "After the Funeral",
      lat: 51.3762,
      lng: -0.0982,
      description:
        "A family's mourning was interrupted by murder, a puzzle I resolved with usual precision.",
    },
    {
      id: 15,
      name: "Elephants Can Remember",
      lat: 51.5074,
      lng: -0.1278,
      description:
        "A case from the past, where memories held the key to solving a tragic mystery.",
    },
    {
      id: 16,
      name: "Murder in the Mews",
      lat: 48.8566,
      lng: 2.3522,
      description:
        "In Paris, I uncovered the truth behind a seemingly straightforward suicide.",
    },
    {
      id: 17,
      name: "The Mystery of the Blue Train",
      lat: 43.7102,
      lng: 7.262,
      description:
        "A murder and jewel theft on the Blue Train to the French Riviera presented a sparkling challenge.",
    },
    {
      id: 18,
      name: "Taken at the Flood",
      lat: 31.2001,
      lng: 29.9187,
      description:
        "In post-war Egypt, I navigated a complex family drama to reveal a cunning murder.",
    },
    {
      id: 19,
      name: "The Hollow",
      lat: 47.4979,
      lng: 8.4799,
      description:
        "A Swiss chalet retreat was marred by a cleverly orchestrated murder.",
    },
    {
      id: 20,
      name: "Death in the Clouds",
      lat: 48.8566,
      lng: 2.3522,
      description:
        "Aboard a flight from Paris to London, I solved a murder most high, quite literally!",
    },
    {
      id: 21,
      name: "The Mystery of the Christmas Pudding",
      lat: 51.5074,
      lng: -0.1278,
      description:
        "During the Christmas holidays, a theft of a priceless family relic led me to a country house filled with unique characters and hidden secrets.",
    },
    {
      id: 22,
      name: "The Mystery of End House",
      lat: 50.2629,
      lng: -5.051,
      description:
        "The beautiful mansion of End House was the scene of mysterious attempts on the life of heiress Nick Buckley, embroiled in deadly threats and secrets.",
    },
    {
      id: 23,
      name: "The Sittaford Mystery",
      lat: 50.7184,
      lng: -3.5339,
      description:
        "In the cozy town of Sittaford, a séance predicting a murder turned into a reality, leading me through a labyrinth of deception and secrets.",
    },
    {
      id: 24,
      name: "The Adventure of the Cheap Flat",
      lat: 51.5074,
      lng: -0.1278,
      description:
        "A surprisingly low price for an apartment in central London unraveled a tale linked to international espionage and intricate crimes.",
    },
    {
      id: 25,
      name: "The Seven Dials Mystery",
      lat: 51.5074,
      lng: -0.1278,
      description:
        "The discovery of mysterious clock faces in a country house led me to a spy network and complex international intrigues hidden behind a mundane facade.",
    },
  ];

  return (
    <div className="PoirotMap">
      <MapContainer

        center={[ 51.88, 0.55]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
        // ?key=6839e759-b69d-4cf6-b5ff-17dfdd1e4173
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />

        {investigations.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                handleMarkerClick(place);
              },
            }}
          >
            <Popup className="custom-popup">{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedInvestigation && (
        <div>
          <h3 className="map-case-name">{selectedInvestigation.name}</h3>
          <p className="map-case-description">{selectedInvestigation.description}</p>
        </div>
      )}
    </div>
  );
};

export default PoirotMap;
