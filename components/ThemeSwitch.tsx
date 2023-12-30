'use client'
import React from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "@/utils/SunIcon";
import { MoonIcon } from "@/utils/MoonIcon";


export default function ThemeSwitch() {
    return (
        <Switch
            defaultSelected
            size="lg"
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
        >
            
        </Switch>
    );
}
