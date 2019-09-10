     <task name="PageHashFoundInCatalog" value="6" />
          <task name="PageHashFoundInImageCertificate" value="7" />
          <task name="FileHashFoundInCatalog" value="8" />
          <task name="FileHashFoundInImageCertificate" value="9" />
          <task name="LoadCatalogCache" value="10" />
          <task name="SaveCatalogCache" value="11" />
        </tasks>
        <templates>
          <template tid="FileTemplate">
            <data inType="win:UInt16" name="FileNameLength" />
            <data inType="win:UnicodeString" length="FileNameLength" name="FileNameBuffer" />
          </template>
          <template tid="FileAndCatalogTemplate">
            <data inType="win:UInt16" name="FileNameLength" />
            <data inType="win:UnicodeString" length="FileNameLength" name="FileNameBuffer" />
            <data inType="win:UInt16" name="CatalogNameLength" />
            <data inType="win:UnicodeString" length="CatalogNameLength" name="CatalogNameBuffer" />
          </template>
          <template tid="StatusTemplate">
            <data inType="win:HexInt32" name="Status" />
          </template>
          <template tid="StatusTemplateVersion0">
            <data inType="win:UInt32" name="Status" outType="xs:unsignedInt" />
          </template>
        </templates>
        <events>
          <event channel="Operational" level="win:Warning" message="$(string.unsignedDriverLoaded)" opcode="UnsignedDriverLoaded" symbol="CiUnsignedDriverLoaded" task="CreateSection" template="FileTemplate" value="3001" />
          <event channel="Operational" level="win:Error" message="$(string.imagePageHashNotFound)" 