import { isLoggedIn, logout } from "utils/session";
import Segment from "components/Segment";
import { Flex, Button } from "@chakra-ui/core";

export default (): JSX.Element => {
    if (!isLoggedIn()) return <div />;
    return (
        <Segment height={30} background="#252A2E">
            <Flex direction="row-reverse">
                <Button
                    variant="unstyled"
                    color="white"
                    size="xs"
                    onClick={logout}
                >
                    Log out
                </Button>
            </Flex>
        </Segment>
    );
};