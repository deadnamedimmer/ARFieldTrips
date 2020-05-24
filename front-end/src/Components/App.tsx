import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Box,
  Grid,
} from "@material-ui/core";
import Item from "./Item";

const App: React.FunctionComponent = () => {
  const [item, setItem] = React.useState<string>("Utahraptor");

  const handleItemChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setItem(event.target.value as string);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">AR Field Trips</Typography>
        </Toolbar>
      </AppBar>
      <Box style={{ height: "80vh", marginLeft: "2.5%", marginRight: "2.5%" }}>
        {item === "Utahraptor" && (
          <Item
            file="../../Assets/Files/Utahraptor_Skeleton.usdz"
            image="../../Assets/Images/Utahraptor.jpg"
            audio="../../Assets/Audio/test.mp3"
            title="Utahraptor"
            info="Utahraptor ostrommaysorum is one of the geologically oldest and largest known dromaeosaurids. This group of carnivorous dinosaurs had a large retractable sickle claw on its foot, specialized for cutting.  With a name meaning “Utah’s predator,” Utahraptor was a ferocious hunter that used its sickle-shaped claws to attack and rip apart its prey. The claw itself was 9.5 inches (24 cm) long! The species name ‘ostrommaysorum’ honors Dr. John Ostrom of Yale University for his pioneering research linking carnivorous dinosaurs to the ancestry of birds. Utahraptor was the inspiration for the Velociraptors in the film Jurassic Park! Utahraptor, however, was quite a bit bigger than Velociraptor; adults were around 20 feet (6.1 meters) long and around 5 feet (1.5 meters) tall at the hip."
          ></Item>
        )}

        {item === "Laocoon" && (
          <Item
            file="../../Assets/Files/Laocoon_and_His_Sons.usdz"
            image="../../Assets/Images/Laocoon.jpg"
            audio="../../Assets/Audio/test.mp3"
            title="Laocoon and His Sons"
            info="Laocoön and His Sons is a marble sculpture from the Hellenistic Period (323 BCE – 31 CE). Following its discovery in a Roman vineyard in 1506, it was placed in the Vatican, where it remains today. In true Hellenistic fashion, Laocoön and His Sons showcases an interest in the realistic depiction of movement. In the action-packed scene, three figures frantically try to free themselves from the grasp of sinuous serpents. No matter how much they twist and turn, however, they remain entangled, culminating in a swirling mass of snakes and limbs."
          ></Item>
        )}

        {item === "Mammoth" && (
          <Item
            file="../../Assets/Files/Mammuthus_primigenius_Blumbach.usdz"
            image="../../Assets/Images/Mammoth.jpg"
            audio="../../Assets/Audio/test.mp3"
            title="Mammuthus Primigenius Blumbach"
            info="Woolly mammoths were closely related to today's Asian elephants. They looked a lot like their modern cousins, except for one major difference. They were covered in a thick coat of brown hair to keep them warm in their home on the frigid Arctic plains. They even had fur-lined ears.Their large, curved tusks may have been used for fighting. They also may have been used as a digging tool for foraging meals of shrubs, grasses, roots and other small plants from under the snow.Though woolly mammoths went extinct around 10,000 years ago, humans know quite a bit about them because of where they lived. The permafrost of the Arctic preserved many woolly mammoth bodies almost intact. When the ground around riverbanks and streams erodes, it often reveals the corpse of a long-dead mammoth that looks much like it did when it died.For example, in 2007 in Siberia, a pair of mummified baby mammoths were found. The bodies were so well preserved that CT scans found the mammoths died from choking on mud 40,000 years ago. The mud was like a 'really thick batter that they got clogged in their trachea and they were unable to dislodge by coughing,' said study co-author Daniel Fisher, the director of the University of Michigan Museum of Paleontology. 'It basically prevented them from taking them another breath.'"
          ></Item>
        )}

        {item === "Thinker" && (
          <Item
            file="../../Assets/Files/The_Thinker.usdz"
            image="../../Assets/Images/Thinker.jpg"
            audio="../../Assets/Audio/test.mp3"
            title="The Thinker"
            info="The Thinker, French Le Penseur, sculpture of a pensive nude male by French artist Auguste Rodin, one of his most well-known works. Many marble and bronze editions in several sizes were executed in Rodin’s lifetime and after, but the most famous version is the 6-foot (1.8-metre) bronze statue (commonly called a monumental) cast in 1904 that sits in the gardens of the Rodin Museum in Paris. The large muscular figure has captivated audiences for decades in his moment of concentrated introspection. The Thinker was originally called The Poet and was conceived as part of The Gates of Hell, initially a commission (1880) for a pair of bronze doors to a planned museum of decorative arts in Paris. Rodin chose for his subject Dante’s Inferno from The Divine Comedy (c. 1308–21) and modeled a series of small clay figures that represented some of the poem’s tormented characters. The museum, however, was never constructed, and The Gates were never cast during Rodin’s lifetime. Some suggestion of his vision can be found in the original plaster exhibited at the Musée d’Orsay and in the doors that were made posthumously. In these examples, a 27.5-inch (70-cm) Poet appears on the tympanum above the doors. The nude form is seated on a rock, his back hunched forward, brows furrowed, chin resting on his relaxed hand, and mouth thrust into his knuckles. Still and pensive, he observes the twisting figures of those suffering in the circles of Hell below. Some scholars suggest that the Poet was originally meant to represent Dante, but the muscular and bulky form contrasts with typical sculptures that depict the poet as slender and lithe."
          ></Item>
        )}

        {item === "Apollo" && (
          <Item
            file="../../Assets/Files/Apollo_11_Command_Module_Combined.usdz"
            image="../../Assets/Images/Apollo.jpg"
            audio="../../Assets/Audio/test.mp3"
            title="The Apollo 11 Command Module"
            info="Astronauts Neil A. Armstrong, Michael Collins and Edwin E. 'Buzz' Aldrin Jr., inside the command module of the Apollo 11 Saturn V launch vehicle, rose from Pad 39A at Kennedy Space Center, Florida. The instant of lift-off was 9:32 a.m. EDT, July 16, 1969. Once on the journey to the Moon, the Apollo spacecraft provided an extraordinary transport and self-sufficient place for working and living. In the extremely hostile environment of space, these spacecraft had to provide everything the astronauts required for the journey: protection, flight and work equipment, air, food, clothing, the space-equivalent of bathrooms, and more. The artifacts in this exhibition indicate the unprecedented ingenuity and planning required for a trip through space to another world. The Apollo 11 mission had three spacecraft: the Command Module Columbia, a Service Module, and the Lunar Module Eagle. While astronauts Armstrong and Aldrin descended to the Moon in Eagle, Michael Collins remained alone in Columbia. For 28 hours he served as a communications link and photographed the lunar surface. After reclaiming Armstrong and Aldrin from the ascent stage of the Lunar Module, Columbia was the only part of the spacecraft to return to Earth."
          ></Item>
        )}

        {item === "Sculpture" && (
          <Item
            file="../../Assets/Files/Stone_sculpture_I.usdz"
            image="../../Assets/Images/Sculpture.jpg"
            audio="../../Assets/Audio/test.mp3"
            title="Stone Sculpture 1"
            info="This is a set of concrete interactive sculptures - a BRUSSEL style climbing couch. The sculptures were created by the architect Zdeněk Macháčka to make the first full-panel housing estate Brno-Julian, which was built between 1960 and 1965.   The sculptures were renovated in 2011."
          ></Item>
        )}

        {item === "Stone" && (
          <Item
            file="../../Assets/Files/The_Rosetta_Stone.usdz"
            image="../../Assets/Images/Stone.jpg"
            audio="../../Assets/Audio/test.mp3"
            title="The Rosetta Stone"
            info="The Stone is a broken part of a bigger stone slab. It has a message carved into it, written in three types of writing (called scripts). It was an important clue that helped experts learn to read Egyptian hieroglyphs (a writing system that used pictures as signs). Why is it important? The writing on the Stone is an official message, called a decree, about the king (Ptolemy V, r. 204–181 BC). The decree was copied on to large stone slabs called stelae, which were put in every temple in Egypt. It says that the priests of a temple in Memphis (in Egypt) supported the king. The Rosetta Stone is one of these copies, so not particularly important in its own right. The important thing for us is that the decree is inscribed three times, in hieroglyphs (suitable for a priestly decree), Demotic (the native Egyptian script used for daily purposes, meaning ‘language of the people’), and Ancient Greek (the language of the administration – the rulers of Egypt at this point were Greco-Macedonian after Alexander the Great’s conquest)."
          ></Item>
        )}

        {item === "Rome" && (
          <Item
            file="../../Assets/Files/Sarcófago_romano_Florencia.usdz"
            image="../../Assets/Images/Roman.jpg"
            audio="../../Assets/Audio/test.mp3"
            title="Sarcófago Romano Florencia"
            info="A sarcophagus (meaning “flesh-eater” in Greek) is a coffin for inhumation burials, widely used throughout the Roman empire starting in the second century A.D. The most luxurious were of marble, but they were also made of other stones, lead (65.148), and wood. Prior to the second century, burial in sarcophagi was not a common Roman practice; during the Republican and early imperial periods, the Romans practiced cremation and placed remaining bones and ashes in urns or ossuaries. Sarcophagi had been used for centuries by the Etruscans and the Greeks; when the Romans eventually adopted inhumation as their primary funerary practice, both of these cultures had an impact on the development of Roman sarcophagi. The trend spread all over the empire, creating a large demand for sarcophagi during the second and third centuries. Three major regional types dominated the trade: Metropolitan Roman, Attic, and Asiatic."
          ></Item>
        )}
      </Box>

      <div
        style={{
          position: "absolute",
          bottom: "2",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Grid container justify="center" style={{ width: "100%" }}>
          <Grid item>
            <Typography
              variant="h4"
              style={{ marginLeft: "10px", marginRight: "1rem" }}
            >
              Exhibit:
            </Typography>
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleItemChange}
                fullWidth
                value={item}
              >
                <MenuItem value={"Utahraptor"}>Utahraptor</MenuItem>
                <MenuItem value={"Laocoon"}>Laocoon and His Sons</MenuItem>
                <MenuItem value={"Mammoth"}>Wooly Mammoth</MenuItem>
                <MenuItem value={"Thinker"}>The Thinker</MenuItem>
                <MenuItem value={"Apollo"}>Apollo Capsule</MenuItem>
                <MenuItem value={"Sculpture"}>Stone Sculpture 1</MenuItem>
                <MenuItem value={"Stone"}>Rosetta Stone</MenuItem>
                <MenuItem value={"Rome"}>Sarcófago Romano Florencia</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
