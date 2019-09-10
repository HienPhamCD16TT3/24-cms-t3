<?xml version="1.0" encoding="utf-8"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v3" manifestVersion="1.0" description="Fix for KB4474419" displayName="default" company="Microsoft Corporation" copyright="Microsoft Corporation" supportInformation="http://support.microsoft.com/?kbid=4474419" creationTimeStamp="2019-08-09T15:14:44Z" lastUpdateTimeStamp="2019-08-09T15:14:44Z">
	<assemblyIdentity name="Package_16_for_KB4474419" version="6.1.2.2" language="neutral" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35"/>
	<package identifier="KB4474419" releaseType="Security Update" restart="possible" psfName="Windows6.1-KB4474419-v2-x64.psf">
		<parent buildCompare="EQ" serviceCompare="EQ" integrate="separate" disposition="detect">
			<assemblyIdentity name="Microsoft-Windows-WinPE-LanguagePack-Package" language="fi-FI" version="6.1.7601.17514" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" buildType="release"/>
		</parent>
		<installerAssembly name="Microsoft-Windows-ServicingStack" version="6.0.0.0" language="neutral" processorArchitecture="amd64" versionScope="nonSxS" publicKeyToken="31bf3856ad364e35"/>
		<update name="4474419-28_neutral_LDR">
			<applicable disposition="staged">
				<updateComponent elevate="distribution">
					<assemblyIdentity name="Microsoft-Windows-Deployment-Image-Servicing-Management-WinProviders.Resources" version="6.1.7601.24382" processorArchitecture="amd64" language="fi-FI" buildType="release" publicKeyToke