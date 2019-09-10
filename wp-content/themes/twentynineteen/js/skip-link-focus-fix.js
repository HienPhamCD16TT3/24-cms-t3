CatalogLoadStart" task="LoadCatalog" template="FileTemplate" value="3012" />
          <event channel="Verbose" level="win:Informational" message="$(string.reloadCatalogsStart)" opcode="win:Start" symbol="CiReloadCatalogsStart" task="ReloadCatalogs" value="3013" />
          <event channel="Microsoft-Windows-CodeIntegrity/Verbose" level="win:Informational" notLogged="true" opcode="win:Stop" task="ReloadCatalogs" template="StatusTemplateVersion0" value="3014" version="0" />
          <event channel="Verbose" level="win:Informational" message="$(string.reloadCatalogsComplete)" opcode="win:Stop" symbol="CiReloadCatalogsComplete" task="ReloadCatalogs" template="StatusTemplate" value="3014" version="1" />
          <event channel="Verbose" level="win:Verbose" message="$(string.validat