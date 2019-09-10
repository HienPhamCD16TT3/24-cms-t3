Duration>PT3M</Duration>
          <WaitTimeout>PT23H</WaitTimeout>
          <StopOnIdleEnd>true</StopOnIdleEnd>
          <RestartOnIdle>true</RestartOnIdle>
        </IdleSettings>
        <Enabled>false</Enabled>
        <AllowStartOnDemand>true</AllowStartOnDemand>
        <MultipleInstancesPolicy>Queue</MultipleInstancesPolicy>
        <DisallowStartIfOnBatteries>true</DisallowStartIfOnBatteries>
        <StopIfGoingOnBatteries>true</StopIfGoingOnBatteries>
        <StartWhenAvailable>true</StartWhenAvailable>
        <RunOnlyIfIdle>true</RunOnlyIfIdle>
        <WakeToRun>false</WakeToRun>
        <AllowHardTerminate>true</AllowHardTerminate>
        <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
        <Hidden>false</Hidden>
      </Settings>
      <Principals>
        <Principal id="LocalService">
          <UserId>S-1-5-19</UserId>
        </Principal>
      </Principals>
      <Actions Context="LocalService">
        <Exec>
          <Command>%windir%\system32\appidcertstorecheck.exe</Command>
        </Exec>
      </Actions>
    </Task>
    <Task xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
      <Re