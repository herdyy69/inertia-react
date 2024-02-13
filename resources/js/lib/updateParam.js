import { useCallback } from "react";
import { router } from "@inertiajs/react";

export const useUpdateParams = (value) => {
    const searchParams = new URLSearchParams(window.location.search);
    const url = window.location.pathname;

    const updateSearchParams = useCallback(
        (value) => {
            Object.keys(value).forEach((k, v) => {
                if (value[k] === "") {
                    searchParams.delete(k);
                } else {
                    searchParams.set(k, value[k]);
                }

                const queryString = searchParams.toString();
                const newUrl = `${url}?${queryString}`;

                const oldUrl = window.location.href;
                const newsUrl = oldUrl.split("?")[0] + "?" + queryString;

                if (oldUrl !== newsUrl) {
                    window.history.pushState({ path: newUrl }, "", newUrl);
                    router.get(
                        newUrl,
                        {},
                        { preserveState: true, replace: true }
                    );
                }
            });
        },
        [searchParams]
    );

    return updateSearchParams;
};
