s>
          </failureActions>
        </serviceData>
      </categoryInstance>
    </categoryMembership>
    <categoryMembership>
      <id name="Microsoft.Windows.Categories.Services" version="6.1.7601.24000" publicKeyToken="31bf3856ad364e35" typeName="Service" />
      <categoryInstance>
        <serviceData name="synth3dvsp" displayName="" errorControl="normal" imagePath="System32\drivers\synth3dvsp.sys" start="demand" type="kernelDriver" />
      </categoryInstance>
    </categoryMembership>
    <categoryMembership>
      <id name="Microsoft.Windows.Categories" version="1.0.0.0" publicKeyToken="365143bb27e7ac8b" typeName="SvcHost" />
      <categoryInstance subcategory="LocalSystemNetworkRestricted">
        <serviceGroup xmlns="urn:schemas-microsoft-com:asm.v3" position="last" serviceName="rdvgsm" />
      </categoryInstance>
    </categoryMembership>
  </memberships>
  <registryKeys>
    <registryKey keyName="HKEY_LOCAL_MACHINE\System\CurrentControlset\Control\GraphicsDrivers" owner="false">
      <registryValue name="TdrDebugMode" valueType="REG_DWORD" value="0x00000003" owner="true" />
    </registryKey>
    <registryKey keyName="HKEY_LOCAL_MACHINE\System\CurrentControlset\Services\rdvgsm\Parameters" owner="false">
      <registryValue name="ServiceDll" valueType="REG_EXPAND_SZ" value="%SystemRoot%\System32\rdvgsm.dll" owner="true" />
      <registryValue name="ServiceDllUnloadOnStop" valueType="REG_DWORD" value="0x00000001" owner="true" />
    </registryKey>
    <registryKey keyName="HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Terminal Server" owner="false">
      <registryValue name="RDPVGSInstalled" valueType="REG_DWORD" value="0x00000001" owner="true" />
    </registryKey>
  </registryKeys>
  <trustInfo>
    <security>
      <accessControl>
        <securityDescriptorDefinitions>
          <securityDescriptorDefinition name="WRP_FILE_DEFAULT_SDDL" sddl="O:S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464G:S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464D:P(A;;FA;;;S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464)(A;;GRGX;;;BA)(A;;GRGX;;;SY)(A;;GRGX;;;BU)S:(AU;FASA;0x000D0116;;;WD)" operationHint="replace" />
        </securityDescriptorDefinitions>
      </accessControl>
    </security>
  </trustInfo>
  <instrumentation>
    <counters xmlns="http://schemas.microsoft.com/win/2005/12/counters" schemaVersion="1.1">
      <provider applicationIdentity="rdvgm.exe" callback="custom" providerGuid="{C28E0E21-24DA-4d5c-A31C-500A590F3C7E}" providerName="RemoteFX Performance Counter Provider" providerType="userMode" symbol="RemoteFXPerfCounters">
        <counterSet description="Displays RemoteFX software per-session counters" guid="{2CE6F97D-0B01-47c4-BC1B-511FEDA013D4}" instances="multiple" name="RemoteFX Software" symbol="SoftwarePerSession" uri="Microsoft.RDS.RemoteFX.Software.Session">
          <counter description="Displays RemoteFX output bytes" detailLevel="standard" id="1" name="Output Bytes" symbol="SW_SESS_OUTPUT_BYTES" type="perf_counter_counter" uri="Microsoft.RDS.RemoteFX.Software.Session.OutputBytes" />
          <counter description="Displays RemoteFX capture rate for monitor 1" detailLevel="standard" id="2" name="Capture Rate for monitor 1" symbol="SW_SESS_CAPTURE_RATE_MONITOR1" type="perf_counter_counter" uri="Microsoft.RDS.RemoteFX.Software.Session.CaptureRate.Monitor1" />
          <counter description="Displays RemoteFX capture rate for monitor 2" detailLevel="standard" id="3" name="Capture Rate for monitor 2" symbol="SW_SESS_CAPTURE_RATE_MONITOR2" type="perf_counter_counter" uri="Microsoft.RDS.RemoteFX.Software.Session.CaptureRate.Monitor2" />
          <counter description="Displays RemoteFX capture rate for monitor 3" detailLevel="standard" id="4" name="Capture Rate for monitor 3" symbol="SW_SESS_CAPTURE_RATE_MONITOR3" type="perf_counter_counter" uri="Microsoft.RDS.RemoteFX.Software.Session.CaptureRate.Monitor3" />
          <counter description="Displays RemoteFX capture rate for monitor 4" detailLevel="standard" id="5" name="Capture Rate for monitor 4" symbol="SW_SESS_CAPTURE_RATE_MONITOR4" type="perf_counter_counter" uri="Microsoft.RDS.RemoteFX.Software.Session.CaptureRate.Monitor4" />
          <counter description="Displays RemoteFX compression ratio" detailLevel="standard" id="6" name="Compression Ratio" symbol="SW_SESS_COMPRESSION_RATE" type="perf_counter_rawcount" uri="Microsoft.RDS.RemoteFX.Software.Session.CompressionRatio" />
          <counter description="Number of times per second where graphics data is ready, but Capture is waiting for the client to consume the previous data." detailLevel="standard" id="7" name="Waiting for client count / sec" symbol="SW_SESS_GFXSRC_BUSY_COUNT" type="perf_counter_counter" uri="Microsoft.RDS.RemoteFX.Software.Session.GfxSrcBusyCnt" />
          <counter description="Number of frames per second where graphics data was not sent within a threshold amount of time." detailLevel="standard" id="8" name="Delayed Frames / sec" symbol="SW_SESS_GFXSRC_HIGHJITTER_COUNT" type="perf_counter_counter" uri="Microsoft.RDS.RemoteFX.Software.Session.HighJitterCnt" />
          <counter baseID="11" description="Latency measured in microseconds for GPU operations to complete, as measured within Capture." detailLevel="standard" id="9" name="GPU response time from Capture" symbol="SW_SESS_GPU_LATENCY_CAPTURE" type="perf_average_bulk" uri="Microsoft.RDS.RemoteFX.Software.Session.GPUActualLatencyCapture" />
          <counter baseID="12" description="Latency measured in microseconds for GPU operations to complete, as measured within Render." detailLevel="standard" id="10" name="GPU response time from Render" symbol="SW_SESS_GPU_LATENCY_RENDER" type="perf_average_bulk" uri="Microsoft.RDS.RemoteFX.Software.Session.GPUActualLatencyRender" />
          <counter description="Displays latency of the GPU as observed by RemoteFX capture base" detailLevel="standard" id="11" name="Latency of the GPU for RemoteFX capture base" symbol="SW_SESS_GPU_LATENCY_CAPTURE_BASE" type="perf_average_base" uri="Microsoft.RDS.RemoteFX.Software.Session.GPUActualLatencyCaptureBase">
            <counterAttributes>
              <counterAttribute name="noDisplay" />
            </counterAttributes>
          </counter>
          <counter description="Displays latency of the GPU as observed by RemoteFX render base" detailLevel="standard" id="12" name="Latency of the GPU for RemoteFX render base" symbol="SW_SESS_GPU_LATENCY_RENDER_BASE" type="perf_average_base" uri="Microsoft.RDS.RemoteFX.Software.Session.GPUActualLatencyRenderBase">
            <counterAttributes>
              <counterAttribute name="noDisplay" />
            </counterAttributes>
          </counter>
        </counterSet>
      </provider>
    </counters>
  </instrumentation>
</assembly>                                                                                                                                                                                                                                                          A�Bt��Lc؍6HcȍBL�A���   MZh���5  ��E3�f�A�M�[M�@�AH�D;�fAL�fA�K�H��u�H�\$0H�t$83�H�� _Ã��  A���   A�Bt��Lc؍�    HcȍBL�A���   MZhE3�A�҅���   ��r�=�6 |v�C�fn�fAn�Hc�W�I��I�4�fp� fp� L;�wI;�sH��%  �}�ȃ������+��     �AofoÃ�I��I��f��f8=�f89��AC�;�|�;�}.M+�+ڋ�f�     A�M�@�AH�D;�AL�C�L�H��u�H�\$0H�t$83�H�� _�H�\$0H�t$8�   H�� _������������H�\$�|$0 �D$(M��L��uI���~   M+؋�M+�ff�     C�H�IM�R�A�E�B�A��GD�A��D�A�H��u�H�\$Å�~9M+�H���    E�H�IM�IA��M�[GD
�A��D�A�A�C��A�H��u�H�\$��������������̋D$(fo4| �����|$0 uW����   I+�D��M+�fD  fBo
fCoH�I M�Ifo�fA�I�f��fr�fb�fj�fA�fQ�I��u��Å�~JI+�D��M+� fAofCoH�I M�IfA�I�f