import {
  Center,
  Image,
  Space,
  Group,
  Paper,
  Title,
  Text,
  Badge
} from "@mantine/core";
import otownlogo from "../assets/otownlogo.jpg";
import FeatureSection from "../components/FeatureSection";
import ContactUsBox from "../components/ContactUsBox";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import ap1 from "../assets/ap1.jpg";
import bp1 from "../assets/bp1.jpg";
import ap2 from "../assets/ap2.jpg";
import bp2 from "../assets/bp2.jpg";

export default function Home() {
  const A1 = {
    imageUrl: ap1
  };
  const B1 = {
    imageUrl: bp1
  };
  const A2 = {
    imageUrl: ap2
  };
  const B2 = {
    imageUrl: bp2
  };

  return (
    <>
      <Center>
        <Image maw={444} mx="auto" radius="md" src={otownlogo} />
      </Center>
      <Center>
        <FeatureSection />
      </Center>
      <Space h="xl" />
      <Center>
        <Group>
          <Paper p="xl" withBorder>
            <Title color={"#225465"} order={2} ta="center" mt="sm">
              Before & After
            </Title>
            <Space h="xl" />
            <Group group="apart">
              <Paper shadow="xl" p="xl" withBorder>
                <ReactBeforeSliderComponent
                  feelsOnlyTheDelimiter="true"
                  firstImage={B1}
                  secondImage={A1}
                />
              </Paper>
              <Paper shadow="xl" p="xl" withBorder>
                <ReactBeforeSliderComponent
                  feelsOnlyTheDelimiter="true"
                  firstImage={B2}
                  secondImage={A2}
                />
              </Paper>
            </Group>
          </Paper>
        </Group>
      </Center>

      <Space h="xl" />

      <Space h="xl" />
      <Center>
        <ContactUsBox />
      </Center>
    </>
  );
}
