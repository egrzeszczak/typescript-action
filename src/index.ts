import { notice, setFailed } from "@actions/core";
import { context } from "@actions/github";

(
    async () => {
        try {
            notice("Displaying context")
            console.log(context)
        } catch (error: any) {
            setFailed(error.message)
        }
    }
)();