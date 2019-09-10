G_W_PERF_COUNTER_INIT_ERROR" value="Performance counters for the Online Responder Service cannot be initialized." />
      </stringTable>
    </resources>
  </localization>
  <instrumentation>
    <events xmlns="http://schemas.microsoft.com/win/2004/08/events">
      <provider guid="{21B2E773-EBED-4CE1-834A-1444F9E20D6E}" messageFileName="%systemroot%\system32\OCSPSvc.exe" name="Microsoft-Windows-OnlineResponder" resourceFileName="%systemroot%\system32\OCSPSvc.exe" symbol="S_OCSPSvc">
        <templates>
          <template name="MSG_I_SERVER_STARTED" tid="T_MSG_I_SERVER_STARTED" />
          <template name="MSG_I_SERVER_STOPPED" tid="T_MSG_I_SERVER_STOPPED" />
          <template name="MSG_E_GENERIC_STARTUP_FAILURE" tid="T_MSG_E_GENERIC_STARTUP_FAILURE">
            <data inType="win:UnicodeString" name="E