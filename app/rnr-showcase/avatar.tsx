import Themelayout from "~/components/theme-layout";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Text } from "~/components/ui/text";

const AVATAR_URI = "https://raosandeep.netlify.app/me_avatar.png";

const AvatarExample = () => {
  return (
    <Themelayout className="items-center">
      <Avatar alt="Sandeep's Avatar">
        <AvatarImage source={{ uri: AVATAR_URI }} />
        <AvatarFallback>
          <Text>SP</Text>
        </AvatarFallback>
      </Avatar>
    </Themelayout>
  );
};

export default AvatarExample;
