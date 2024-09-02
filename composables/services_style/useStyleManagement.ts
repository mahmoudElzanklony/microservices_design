import { reactive } from "vue";

export function useStyleManagement() {
    const styleFormServiceData = reactive({});

    const toStyleString = (obj) => {
        return Object.entries(obj)
            .map(([key, value]) => `${key}:${value}${key === "width" ? "%" : ""}`)
            .join(";");
    };

    const handleFormStyle = (data, time = 0) => {
        styleFormServiceData.value = data;
        const mainSectionStyle = toStyleString(data?.main_section || {});
        const mainTitlesStyle = toStyleString(data?.main_titles || {});
        const mainInputsStyle = toStyleString(data?.main_inputs || {});
        const submitStyle = toStyleString(data?.submit || {});

        if (time > 0) {
            setTimeout(() => {
                applyStyles(mainSectionStyle,mainTitlesStyle, mainInputsStyle, submitStyle);
            }, time);
        } else {
            applyStyles(mainSectionStyle,mainTitlesStyle, mainInputsStyle, submitStyle);
        }
    };

    const applyStyles = (mainSection,mainTitlesStyle, mainInputsStyle, submitStyle) => {
        if(document) {
            document.querySelector(".simulation > div").style.cssText = mainSection;
            document.querySelector(".simulation h2").style.cssText = mainTitlesStyle;
            document.querySelector(".simulation h2:last-of-type").style.cssText = mainTitlesStyle;
            document.querySelectorAll(".simulation .input-data").forEach((input) => {
                input.style.cssText = mainInputsStyle;
            });
            document.querySelector(".simulation .input-submit").style.cssText = submitStyle;
        }
    };

    return {
        styleFormServiceData,
        handleFormStyle,
        applyStyles,
    };
}
