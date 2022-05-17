import React from "react";
import { Center, Pressable, Actionsheet, useDisclose } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import ActionScreen from "../screens/ActionScreen";
import { Marker } from "react-native-maps";

const ActionButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;

  return (
    <Marker
      coordinate={{
        latitude: Number(site.lat),
        longitude: Number(site.lng),
      }}
      title={site.sna}
      description={site.ar}
      tracksViewChanges={false}
      onPress={onOpen}
    >
      <Center
        bg="white"
        borderRadius={60}
        p={3 * zoomRatio}
        borderWidth={2 * zoomRatio}
        borderColor="black"
      >
        <Icon name={"bicycle"} size={30 * zoomRatio} color="black" />
      </Center>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} />
      </Actionsheet>
    </Marker>
  );
};
export default ActionButton;
