export const XML = `<?xml version="1.0" standalone="yes"?>
<OpenDRIVE>
    <header revMajor="1" revMinor="1" name="" version="1.00" date="Thu Dec 10 10:35:57 2009" north="0.0000000000000000e+00" south="0.0000000000000000e+00" east="0.0000000000000000e+00" west="0.0000000000000000e+00" maxRoad="517" maxJunc="2" maxPrg="0">
    </header>
    <road name="" length="1.6517824248160636e+01" id="500" junction="2">
        <link>
            <predecessor elementType="road" elementId="502" contactPoint="start" />
            <successor elementType="road" elementId="514" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="-7.0710678117841717e+00" y="7.0710678119660715e+00" hdg="5.4977871437752235e+00" length="4.8660000002386400e-01">
                <line/>
            </geometry>
            <geometry s="4.8660000002386400e-01" x="-6.7269896520425938e+00" y="6.7269896522231525e+00" hdg="5.4977871437736381e+00" length="3.1746031746031744e+00">
                <spiral curvStart="-0.0000000000000000e+00" curvEnd="-1.2698412698412698e-01"/>
            </geometry>
            <geometry s="3.6612031746270386e+00" x="-4.6416930098385274e+00" y="4.3409250448366459e+00" hdg="5.2962250374496271e+00" length="9.1954178989066371e+00">
                <arc curvature="-1.2698412698412698e-01"/>
            </geometry>
            <geometry s="1.2856621073533674e+01" x="-4.6416930098799849e+00" y="-4.3409256447923106e+00" hdg="4.1285529233027525e+00" length="3.1746031746031744e+00">
                 <spiral curvStart="-1.2698412698412698e-01" curvEnd="-0.0000000000000000e+00"/>
            </geometry>
            <geometry s="1.6031224248136848e+01" x="-6.7269896521209764e+00" y="-6.7269902521517775e+00" hdg="3.9269908169787415e+00" length="4.8660000002378989e-01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <predecessor id="2"/>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <predecessor id="3"/>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="2.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="3.9999995757174296e+00" id="514" junction="-1">
        <link>
            <predecessor elementType="junction" elementId="2" />
            <successor elementType="road" elementId="509" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="-7.0710678118665120e+00" y="-7.0710684118906357e+00" hdg="3.9269907109051632e+00" length="3.9999995757174296e+00">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <left>
                    <lane id="4" type="none" level= "0">
                        <link>
                            <successor id="4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000002e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="3" type="sidewalk" level= "0">
                        <link>
                            <successor id="3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="2" type="border" level= "0">
                        <link>
                            <successor id="2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="1" type="driving" level= "0">
                        <link>
                            <successor id="1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </left>
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="broken" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                            <successor id="-4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000046e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
            <signal s="1.0000000000000001e-01" t="5.5999999999999996e+00" id="40" name="_Sg40" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000001" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="5.5999999999999996e+00" id="41" name="_Sg41" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000002" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="-5.5999999999999996e+00" id="42" name="_Sg42" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000001" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="-5.5999999999999996e+00" id="43" name="_Sg43" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000002" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="3.8999999999999999e+00" t="5.5999999999999996e+00" id="0" name="" dynamic="no" orientation="-" zOffset="0.0000000000000000e+00" type="306" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
        </signals>
    </road>
    <road name="" length="1.6517824248160643e+01" id="515" junction="2">
        <link>
            <predecessor elementType="road" elementId="514" contactPoint="start" />
            <successor elementType="road" elementId="516" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="-7.0710678119936246e+00" y="-7.0710678117566195e+00" hdg="7.8539816339160284e-01" length="4.8660000002386461e-01">
                <line/>
            </geometry>
            <geometry s="4.8660000002386461e-01" x="-6.7269896522493644e+00" y="-6.7269896520163819e+00" hdg="7.8539816339001800e-01" length="3.1746031746031744e+00">
                <spiral curvStart="-0.0000000000000000e+00" curvEnd="-1.2698412698412698e-01"/>
            </geometry>
            <geometry s="3.6612031746270390e+00" x="-4.3409250448547327e+00" y="-4.6416930098216129e+00" hdg="5.8383605706600694e-01" length="9.1954178989066371e+00">
                <arc curvature="-1.2698412698412698e-01"/>
            </geometry>
            <geometry s="1.2856621073533676e+01" x="4.3409256447834164e+00" y="-4.6416930099218154e+00" hdg="-5.8383605708086783e-01" length="3.1746031746031744e+00">
                 <spiral curvStart="-1.2698412698412698e-01" curvEnd="-0.0000000000000000e+00"/>
            </geometry>
            <geometry s="1.6031224248136851e+01" x="6.7269902521255664e+00" y="-6.7269896521471884e+00" hdg="-7.8539816341104807e-01" length="4.8660000002379050e-01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <predecessor id="2"/>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <predecessor id="3"/>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="2.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="3.9999995757174296e+00" id="516" junction="-1">
        <link>
            <predecessor elementType="junction" elementId="2" />
            <successor elementType="road" elementId="508" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="7.0710684118630835e+00" y="-7.0710678118940642e+00" hdg="5.4977870376961633e+00" length="3.9999995757174296e+00">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <left>
                    <lane id="4" type="none" level= "0">
                        <link>
                            <successor id="4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000002e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="3" type="sidewalk" level= "0">
                        <link>
                            <successor id="3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="2" type="border" level= "0">
                        <link>
                            <successor id="2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="1" type="driving" level= "0">
                        <link>
                            <successor id="1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </left>
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="broken" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                            <successor id="-4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000046e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
            <signal s="1.0000000000000001e-01" t="5.5999999999999996e+00" id="10" name="_Sg10" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000001" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="5.5999999999999996e+00" id="11" name="_Sg11" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000002" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="-5.5999999999999996e+00" id="12" name="_Sg12" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000001" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="-5.5999999999999996e+00" id="13" name="_Sg13" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000002" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="3.8999999999999999e+00" t="5.5999999999999996e+00" id="0" name="" dynamic="no" orientation="-" zOffset="0.0000000000000000e+00" type="205" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
        </signals>
    </road>
    <road name="" length="1.6517824248160640e+01" id="517" junction="2">
        <link>
            <predecessor elementType="road" elementId="516" contactPoint="start" />
            <successor elementType="road" elementId="501" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="7.0710678117290673e+00" y="-7.0710678120211767e+00" hdg="2.3561944901826029e+00" length="4.8660000002386528e-01">
                <line/>
            </geometry>
            <geometry s="4.8660000002386528e-01" x="6.7269896519901700e+00" y="-6.7269896522755754e+00" hdg="2.3561944901810179e+00" length="3.1746031746031744e+00">
                <spiral curvStart="-0.0000000000000000e+00" curvEnd="-1.2698412698412698e-01"/>
            </geometry>
            <geometry s="3.6612031746270395e+00" x="4.6416930098154774e+00" y="-4.3409250448891337e+00" hdg="2.1546323838570069e+00" length="9.1954178989066371e+00">
                <arc curvature="-1.2698412698412698e-01"/>
            </geometry>
            <geometry s="1.2856621073533676e+01" x="4.6416930099387308e+00" y="4.3409256447653304e+00" hdg="9.8696026971013262e-01" length="3.1746031746031744e+00">
                 <spiral curvStart="-1.2698412698412698e-01" curvEnd="-0.0000000000000000e+00"/>
            </geometry>
            <geometry s="1.6031224248136851e+01" x="6.7269896521734003e+00" y="6.7269902520993554e+00" hdg="7.8539816337995205e-01" length="4.8660000002378989e-01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <predecessor id="2"/>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <predecessor id="3"/>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="2.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="3.9999995757174296e+00" id="501" junction="-1">
        <link>
            <predecessor elementType="junction" elementId="2" />
            <successor elementType="road" elementId="508" contactPoint="end" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="7.0710678119216164e+00" y="7.0710684118355314e+00" hdg="7.8539805731254286e-01" length="3.9999995757174296e+00">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <left>
                    <lane id="4" type="none" level= "0">
                        <link>
                            <successor id="-4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000002e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="3" type="sidewalk" level= "0">
                        <link>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="2" type="border" level= "0">
                        <link>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="1" type="driving" level= "0">
                        <link>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </left>
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="broken" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <successor id="1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <successor id="2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <successor id="3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                            <successor id="4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000046e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
            <signal s="1.0000000000000001e-01" t="5.5999999999999996e+00" id="30" name="_Sg30" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000001" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="5.5999999999999996e+00" id="31" name="_Sg31" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000002" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="-5.5999999999999996e+00" id="32" name="_Sg32" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000001" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="-5.5999999999999996e+00" id="33" name="_Sg33" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000002" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="3.8999999999999999e+00" t="5.5999999999999996e+00" id="0" name="" dynamic="no" orientation="-" zOffset="0.0000000000000000e+00" type="306" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
        </signals>
    </road>
    <road name="" length="3.9999995757174296e+00" id="502" junction="-1">
        <link>
            <predecessor elementType="junction" elementId="2" />
            <successor elementType="road" elementId="509" contactPoint="end" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="-7.0710684118079783e+00" y="7.0710678119491694e+00" hdg="2.3561943841035431e+00" length="3.9999995757174296e+00">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <left>
                    <lane id="4" type="none" level= "0">
                        <link>
                            <successor id="-4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000002e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="3" type="sidewalk" level= "0">
                        <link>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="2" type="border" level= "0">
                        <link>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="1" type="driving" level= "0">
                        <link>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </left>
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="broken" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <successor id="1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <successor id="2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <successor id="3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                            <successor id="4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000046e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
            <signal s="1.0000000000000001e-01" t="5.5999999999999996e+00" id="20" name="_Sg20" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000001" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="5.5999999999999996e+00" id="21" name="_Sg21" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000002" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="-5.5999999999999996e+00" id="22" name="_Sg22" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000001" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="1.0000000000000001e-01" t="-5.5999999999999996e+00" id="23" name="_Sg23" dynamic="yes" orientation="-" zOffset="0.0000000000000000e+00" type="1000002" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
            <signal s="3.8999999999999999e+00" t="5.5999999999999996e+00" id="0" name="" dynamic="no" orientation="-" zOffset="0.0000000000000000e+00" type="205" country="OpenDRIVE" subtype="-1" value="-1.0000000000000000e+00"/>
        </signals>
    </road>
    <road name="" length="1.6517824248160647e+01" id="503" junction="2">
        <link>
            <predecessor elementType="road" elementId="501" contactPoint="start" />
            <successor elementType="road" elementId="502" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="7.0710678120487289e+00" y="7.0710678117015151e+00" hdg="3.9269908169686372e+00" length="4.8660000002387466e-01">
                <line/>
            </geometry>
            <geometry s="4.8660000002387466e-01" x="6.7269896523017803e+00" y="6.7269896519639518e+00" hdg="3.9269908169720189e+00" length="3.1746031746031744e+00">
                <spiral curvStart="-0.0000000000000000e+00" curvEnd="-1.2698412698412698e-01"/>
            </geometry>
            <geometry s="3.6612031746270493e+00" x="4.3409250448908985e+00" y="4.6416930097877751e+00" hdg="3.7254287106480075e+00" length="9.1954178989066371e+00">
                <arc curvature="-1.2698412698412698e-01"/>
            </geometry>
            <geometry s="1.2856621073533685e+01" x="-4.3409256447380580e+00" y="4.6416930099307159e+00" hdg="2.5577565965011333e+00" length="3.1746031746031744e+00">
                 <spiral curvStart="-1.2698412698412698e-01" curvEnd="-0.0000000000000000e+00"/>
            </geometry>
            <geometry s="1.6031224248136859e+01" x="-6.7269902520731444e+00" y="6.7269896521996131e+00" hdg="2.3561944901771223e+00" length="4.8660000002378739e-01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <predecessor id="2"/>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <predecessor id="3"/>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="2.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="2.0000000848565204e+01" id="504" junction="2">
        <link>
            <predecessor elementType="road" elementId="501" contactPoint="start" />
            <successor elementType="road" elementId="514" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="7.0710678119216164e+00" y="7.0710684118355314e+00" hdg="3.9269908594064900e+00" length="2.0000000848565204e+01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="none" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="6.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="2.0000000848565204e+01" id="505" junction="2">
        <link>
            <predecessor elementType="road" elementId="516" contactPoint="start" />
            <successor elementType="road" elementId="502" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="7.0710684118630835e+00" y="-7.0710678118940642e+00" hdg="2.3561945326126628e+00" length="2.0000000848565204e+01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="none" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="6.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="2.0000000848565204e+01" id="506" junction="2">
        <link>
            <predecessor elementType="road" elementId="502" contactPoint="start" />
            <successor elementType="road" elementId="516" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="-7.0710684118079783e+00" y="7.0710678119491694e+00" hdg="5.4977871861974901e+00" length="2.0000000848565204e+01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="broken" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="none" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="6.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="2.0000000848565204e+01" id="507" junction="2">
        <link>
            <predecessor elementType="road" elementId="514" contactPoint="start" />
            <successor elementType="road" elementId="501" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="-7.0710678118665120e+00" y="-7.0710684118906357e+00" hdg="7.8539820582166275e-01" length="2.0000000848565204e+01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="broken" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="none" level= "0">
                        <link>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="6.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="5.4149546296284882e+02" id="508" junction="-1">
        <link>
            <predecessor elementType="road" elementId="516" contactPoint="end" />
            <successor elementType="road" elementId="501" contactPoint="end" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="9.8994949365538041e+00" y="-9.8994949366695266e+00" hdg="5.4977871437713279e+00" length="6.9922442370947792e+01">
                <line/>
            </geometry>
            <geometry s="6.9922442370947792e+01" x="5.9342128093887638e+01" y="-5.9342128094581220e+01" hdg="5.4977871437700871e+00" length="1.1250000000000000e+01">
                <spiral curvStart="0.0000000000000000e+00" curvEnd="1.2500000000000001e-02"/>
            </geometry>
            <geometry s="8.1172442370947792e+01" x="6.7479525817491606e+01" y="-6.7106769134798839e+01" hdg="5.5680996437700871e+00" length="1.7724555921585508e+02">
                <arc curvature="1.2500000000000001e-02"/>
            </geometry>
            <geometry s="2.5841800158680286e+02" x="1.9973642122205743e+02" y="-1.2324169342090054e+01" hdg="7.7836691339682753e+00" length="1.1250000000000000e+01">
                 <spiral curvStart="1.2500000000000001e-02" curvEnd="0.0000000000000000e+00"/>
            </geometry>
            <geometry s="2.6966800158680286e+02" x="2.0000000000000000e+02" y="-1.0797298970134648e+00" hdg="7.8539816339682753e+00" length="1.0797298970134364e+00">
                <line/>
            </geometry>
            <geometry s="2.7074773148381632e+02" x="2.0000000000000000e+02" y="0.0000000000000000e+00" hdg="7.8539816339695170e+00" length="1.0797298943320186e+00">
                <line/>
            </geometry>
            <geometry s="2.7182746137814831e+02" x="2.0000000000000000e+02" y="1.0797298943319902e+00" hdg="7.8539816339695170e+00" length="1.1250000000000000e+01">
                <spiral curvStart="0.0000000000000000e+00" curvEnd="1.2500000000000001e-02"/>
            </geometry>
            <geometry s="2.8307746137814831e+02" x="1.9973642122132335e+02" y="1.2324169338918759e+01" hdg="7.9242941339682753e+00" length="1.7724555921460842e+02">
                <arc curvature="1.2500000000000001e-02"/>
            </geometry>
            <geometry s="4.6032302059275673e+02" x="6.7479525817970895e+01" y="6.7106769133101793e+01" hdg="1.0139863624150880e+01" length="1.1250000000000000e+01">
                 <spiral curvStart="1.2500000000000001e-02" curvEnd="0.0000000000000000e+00"/>
            </geometry>
            <geometry s="4.7157302059275673e+02" x="5.9342128094207382e+01" y="5.9342128093051386e+01" hdg="1.0210176124147157e+01" length="6.9922442370092128e+01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <left>
                    <lane id="4" type="none" level= "0">
                        <link>
                            <predecessor id="4"/>
                            <successor id="-4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000002e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="3" type="sidewalk" level= "0">
                        <link>
                            <predecessor id="3"/>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="2" type="border" level= "0">
                        <link>
                            <predecessor id="2"/>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </left>
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="broken" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="-1"/>
                            <successor id="1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <predecessor id="-2"/>
                            <successor id="2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <predecessor id="-3"/>
                            <successor id="3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                            <predecessor id="-4"/>
                            <successor id="4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000046e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="5.4149546296402627e+02" id="509" junction="-1">
        <link>
            <predecessor elementType="road" elementId="514" contactPoint="end" />
            <successor elementType="road" elementId="502" contactPoint="end" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="-9.8994949366309530e+00" y="-9.8994949365923777e+00" hdg="3.9269908169803278e+00" length="6.9922442369977105e+01">
                <line/>
            </geometry>
            <geometry s="6.9922442369977105e+01" x="-5.9342128093663625e+01" y="-5.9342128093432471e+01" hdg="3.9269908169815704e+00" length="1.1250000000000000e+01">
                <spiral curvStart="-0.0000000000000000e+00" curvEnd="-1.2500000000000001e-02"/>
            </geometry>
            <geometry s="8.1172442369977105e+01" x="-6.7479525817405204e+01" y="-6.7106769133505864e+01" hdg="3.8566783169815704e+00" length="1.7724555921483457e+02">
                <arc curvature="-1.2500000000000001e-02"/>
            </geometry>
            <geometry s="2.5841800158481169e+02" x="-1.9973642122133731e+02" y="-1.2324169339518491e+01" hdg="1.6411088267961376e+00" length="1.1250000000000000e+01">
                 <spiral curvStart="-1.2500000000000001e-02" curvEnd="-0.0000000000000000e+00"/>
            </geometry>
            <geometry s="2.6966800158481169e+02" x="-2.0000000000000000e+02" y="-1.0797298951299297e+00" hdg="1.5707963267948966e+00" length="1.0797298951299297e+00">
                <line/>
            </geometry>
            <geometry s="2.7074773147994165e+02" x="-2.0000000000000000e+02" y="0.0000000000000000e+00" hdg="1.5707963267948966e+00" length="1.0797298972923954e+00">
                <line/>
            </geometry>
            <geometry s="2.7182746137723404e+02" x="-2.0000000000000000e+02" y="1.0797298972923954e+00" hdg="1.5707963267948966e+00" length="1.1250000000000000e+01">
                <spiral curvStart="-0.0000000000000000e+00" curvEnd="-1.2500000000000001e-02"/>
            </geometry>
            <geometry s="2.8307746137723404e+02" x="-1.9973642122132333e+02" y="1.2324169341879138e+01" hdg="1.5004838267961376e+00" length="1.7724555921647848e+02">
                <arc curvature="-1.2500000000000001e-02"/>
            </geometry>
            <geometry s="4.6032302059371250e+02" x="-6.7479525816558876e+01" y="6.7106769134835943e+01" hdg="-7.1508566340984281e-01" length="1.1250000000000000e+01">
                 <spiral curvStart="-1.2500000000000001e-02" curvEnd="-0.0000000000000000e+00"/>
            </geometry>
            <geometry s="4.7157302059371250e+02" x="-5.9342128092976814e+01" y="5.9342128094595331e+01" hdg="-7.8539816341108537e-01" length="6.9922442370313732e+01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
            <elevation s="0.0000000000000000e+00" a="0.0000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <left>
                    <lane id="4" type="none" level= "0">
                        <link>
                            <predecessor id="4"/>
                            <successor id="-4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000002e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="3" type="sidewalk" level= "0">
                        <link>
                            <predecessor id="3"/>
                            <successor id="-3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="2" type="border" level= "0">
                        <link>
                            <predecessor id="2"/>
                            <successor id="-2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </left>
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="broken" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="-1"/>
                            <successor id="1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="solid" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-2" type="border" level= "0">
                        <link>
                            <predecessor id="-2"/>
                            <successor id="2"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.4999999999999998e-01" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                    <lane id="-3" type="sidewalk" level= "0">
                        <link>
                            <predecessor id="-3"/>
                            <successor id="3"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="1.5000000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <height sOffset="0.0000000000000000e+00" heightInner="1.2000000000000000e-01" heightOuter="1.2000000000000000e-01"/>
                    </lane>
                    <lane id="-4" type="none" level= "0">
                        <link>
                            <predecessor id="-4"/>
                            <successor id="4"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="4.7000000000000046e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="1.6120276756872112e+01" id="510" junction="2">
        <link>
            <predecessor elementType="road" elementId="502" contactPoint="start" />
            <successor elementType="road" elementId="501" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="-7.0710684118079783e+00" y="7.0710678119491694e+00" hdg="5.4977871437557786e+00" length="3.1099935230342107e-01">
                <line/>
            </geometry>
            <geometry s="3.1099935230342107e-01" x="-6.8511586608543098e+00" y="6.8511580609860916e+00" hdg="5.4977871437644321e+00" length="1.3611111111111112e+00">
                <spiral curvStart="0.0000000000000000e+00" curvEnd="1.1111111111111110e-01"/>
            </geometry>
            <geometry s="1.6721104634145323e+00" x="-5.8650085442074698e+00" y="5.9135067467741473e+00" hdg="5.5734044277150492e+00" length="1.2776055830042958e+01">
                <arc curvature="1.1111111111111110e-01"/>
            </geometry>
            <geometry s="1.4448166293457490e+01" x="5.8650079444265275e+00" y="5.9135067465811675e+00" hdg="6.9929661866087116e+00" length="1.3611111111111109e+00">
                 <spiral curvStart="1.1111111111111110e-01" curvEnd="0.0000000000000000e+00"/>
            </geometry>
            <geometry s="1.5809277404568601e+01" x="6.8511580610872924e+00" y="6.8511580607460774e+00" hdg="7.0685834705593287e+00" length="3.1099935230351150e-01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="1.6120276756872112e+01" id="511" junction="2">
        <link>
            <predecessor elementType="road" elementId="514" contactPoint="start" />
            <successor elementType="road" elementId="502" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="-7.0710678118665120e+00" y="-7.0710684118906357e+00" hdg="7.8539816338774304e-01" length="3.1099935230342107e-01">
                <line/>
            </geometry>
            <geometry s="3.1099935230342107e-01" x="-6.8511580609060045e+00" y="-6.8511586609343968e+00" hdg="7.8539816339143154e-01" length="1.3611111111111112e+00">
                <spiral curvStart="0.0000000000000000e+00" curvEnd="1.1111111111111110e-01"/>
            </geometry>
            <geometry s="1.6721104634145323e+00" x="-5.9135067467055853e+00" y="-5.8650085442765967e+00" hdg="8.6101544734204882e-01" length="1.2776055830042958e+01">
                <arc curvature="1.1111111111111110e-01"/>
            </geometry>
            <geometry s="1.4448166293457490e+01" x="-5.9135067466497269e+00" y="5.8650079443574024e+00" hdg="2.2805772062357108e+00" length="1.3611111111111109e+00">
                 <spiral curvStart="1.1111111111111110e-01" curvEnd="0.0000000000000000e+00"/>
            </geometry>
            <geometry s="1.5809277404568601e+01" x="-6.8511580608261635e+00" y="6.8511580610072063e+00" hdg="2.3561944901863283e+00" length="3.1099935230351089e-01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="1.6120276756872123e+01" id="512" junction="2">
        <link>
            <predecessor elementType="road" elementId="516" contactPoint="start" />
            <successor elementType="road" elementId="514" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="7.0710684118630835e+00" y="-7.0710678118940642e+00" hdg="2.3561944901787442e+00" length="3.1099935230343301e-01">
                <line/>
            </geometry>
            <geometry s="3.1099935230343301e-01" x="6.8511586609076929e+00" y="-6.8511580609326916e+00" hdg="2.3561944901824319e+00" length="1.3611111111111112e+00">
                <spiral curvStart="0.0000000000000000e+00" curvEnd="1.1111111111111110e-01"/>
            </geometry>
            <geometry s="1.6721104634145441e+00" x="5.8650085442535458e+00" y="-5.9135067467284310e+00" hdg="2.4318117741330489e+00" length="1.2776055830042958e+01">
                <arc curvature="1.1111111111111110e-01"/>
            </geometry>
            <geometry s="1.4448166293457502e+01" x="-5.8650079443804461e+00" y="-5.9135067466268758e+00" hdg="3.8513735330267109e+00" length="1.3611111111111109e+00">
                 <spiral curvStart="1.1111111111111110e-01" curvEnd="0.0000000000000000e+00"/>
            </geometry>
            <geometry s="1.5809277404568613e+01" x="-6.8511580610339040e+00" y="-6.8511580607994702e+00" hdg="3.9269908169764292e+00" length="3.1099935230350839e-01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <road name="" length="1.6120276756872119e+01" id="513" junction="2">
        <link>
            <predecessor elementType="road" elementId="501" contactPoint="start" />
            <successor elementType="road" elementId="516" contactPoint="start" />
        </link>
        <type s="0.0000000000000000e+00" type="town"/>
        <planView>
            <geometry s="0.0000000000000000e+00" x="7.0710678119216164e+00" y="7.0710684118355314e+00" hdg="3.9269908169647794e+00" length="3.1099935230343362e-01">
                <line/>
            </geometry>
            <geometry s="3.1099935230343362e-01" x="6.8511580609593867e+00" y="6.8511586608809969e+00" hdg="3.9269908169734320e+00" length="1.3611111111111112e+00">
                <spiral curvStart="0.0000000000000000e+00" curvEnd="1.1111111111111110e-01"/>
            </geometry>
            <geometry s="1.6721104634145447e+00" x="5.9135067467512821e+00" y="5.8650085442305047e+00" hdg="4.0026081009240491e+00" length="1.2776055830042958e+01">
                <arc curvature="1.1111111111111110e-01"/>
            </geometry>
            <geometry s="1.4448166293457502e+01" x="5.9135067466040230e+00" y="-5.8650079444034890e+00" hdg="5.4221698598177115e+00" length="1.3611111111111109e+00">
                 <spiral curvStart="1.1111111111111110e-01" curvEnd="0.0000000000000000e+00"/>
            </geometry>
            <geometry s="1.5809277404568613e+01" x="6.8511580607727751e+00" y="-6.8511580610606000e+00" hdg="5.4977871437683286e+00" length="3.1099935230350773e-01">
                <line/>
            </geometry>
        </planView>
        <elevationProfile>
        </elevationProfile>
        <lateralProfile>
        </lateralProfile>
        <lanes>
            <laneSection s="0.0000000000000000e+00">
                <center>
                    <lane id="0" type="driving" level= "0">
                        <link>
                        </link>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </center>
                <right>
                    <lane id="-1" type="driving" level= "0">
                        <link>
                            <predecessor id="1"/>
                            <successor id="-1"/>
                        </link>
                        <width sOffset="0.0000000000000000e+00" a="3.7500000000000000e+00" b="0.0000000000000000e+00" c="0.0000000000000000e+00" d="0.0000000000000000e+00"/>
                        <roadMark sOffset="0.0000000000000000e+00" type="none" weight="standard" color="standard" width="1.3000000000000000e-01"/>
                    </lane>
                </right>
            </laneSection>
        </lanes>
        <objects>
        </objects>
        <signals>
        </signals>
    </road>
    <controller name="ctrl001" id="1">
        <control signalId="10" type="0" />
        <control signalId="12" type="0" />
        <control signalId="20" type="0" />
        <control signalId="22" type="0" />
    </controller>
    <controller name="ctrl003" id="3">
        <control signalId="11" type="0" />
        <control signalId="13" type="0" />
        <control signalId="21" type="0" />
        <control signalId="23" type="0" />
    </controller>
    <controller name="ctrl004" id="4">
        <control signalId="40" type="0" />
        <control signalId="42" type="0" />
        <control signalId="30" type="0" />
        <control signalId="32" type="0" />
    </controller>
    <controller name="ctrl005" id="5">
        <control signalId="41" type="0" />
        <control signalId="43" type="0" />
        <control signalId="31" type="0" />
        <control signalId="33" type="0" />
    </controller>
    <junction name="" id="2">
        <connection id="0" incomingRoad="502" connectingRoad="500" contactPoint="start">
            <laneLink from="1" to="-1"/>
            <laneLink from="2" to="-2"/>
            <laneLink from="3" to="-3"/>
        </connection>
        <connection id="1" incomingRoad="502" connectingRoad="510" contactPoint="start">
            <laneLink from="1" to="-1"/>
        </connection>
        <connection id="2" incomingRoad="502" connectingRoad="506" contactPoint="start">
            <laneLink from="1" to="-1"/>
        </connection>
        <connection id="3" incomingRoad="514" connectingRoad="511" contactPoint="start">
            <laneLink from="1" to="-1"/>
        </connection>
        <connection id="4" incomingRoad="514" connectingRoad="515" contactPoint="start">
            <laneLink from="1" to="-1"/>
            <laneLink from="2" to="-2"/>
            <laneLink from="3" to="-3"/>
        </connection>
        <connection id="5" incomingRoad="514" connectingRoad="507" contactPoint="start">
            <laneLink from="1" to="-1"/>
        </connection>
        <connection id="6" incomingRoad="516" connectingRoad="512" contactPoint="start">
            <laneLink from="1" to="-1"/>
        </connection>
        <connection id="7" incomingRoad="516" connectingRoad="517" contactPoint="start">
            <laneLink from="1" to="-1"/>
            <laneLink from="2" to="-2"/>
            <laneLink from="3" to="-3"/>
        </connection>
        <connection id="8" incomingRoad="516" connectingRoad="505" contactPoint="start">
            <laneLink from="1" to="-1"/>
        </connection>
        <connection id="9" incomingRoad="501" connectingRoad="513" contactPoint="start">
            <laneLink from="1" to="-1"/>
        </connection>
        <connection id="10" incomingRoad="501" connectingRoad="503" contactPoint="start">
            <laneLink from="1" to="-1"/>
            <laneLink from="2" to="-2"/>
            <laneLink from="3" to="-3"/>
        </connection>
        <connection id="11" incomingRoad="501" connectingRoad="504" contactPoint="start">
            <laneLink from="1" to="-1"/>
        </connection>
        <controller id="1" type="0"/>
        <controller id="3" type="0"/>
        <controller id="4" type="0"/>
        <controller id="5" type="0"/>
    </junction>
</OpenDRIVE>
`;