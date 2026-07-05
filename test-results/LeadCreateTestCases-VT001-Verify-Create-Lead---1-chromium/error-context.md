# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LeadCreateTestCases.spec.ts >> VT001_Verify_Create_Lead - 1
- Location: tests\LeadCreateTestCases.spec.ts:15:8

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//a[text()=\'Leads\']') resolved to 2 elements:
    1) <a href="index.php?module=Leads&action=index">Leads</a> aka getByRole('link', { name: 'Leads' }).first()
    2) <a href="index.php?action=ListView&module=Leads&viewname=2">Leads</a> aka locator('#stuffcont_5').getByRole('link', { name: 'Leads', exact: true })

Call log:
  - waiting for locator('//a[text()=\'Leads\']')

```

```
TimeoutError: locator.fill: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//input[@name=\'user_name\']')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - table [ref=e2]:
    - rowgroup [ref=e3]:
      - row "vtiger-crm-logo.gif Search... Find Administrator" [ref=e4]:
        - cell "vtiger-crm-logo.gif" [ref=e5]:
          - img "vtiger-crm-logo.gif" [ref=e6]
        - cell "Search... Find" [ref=e7]:
          - table [ref=e9]:
            - rowgroup [ref=e10]:
              - row "Search... Find" [ref=e11]:
                - cell "Search..." [ref=e12]:
                  - textbox [ref=e13]: Search...
                - cell [ref=e14]:
                  - link:
                    - /url: javascript:void(0);
                    - img [ref=e15] [cursor=pointer]
                - cell "Find" [ref=e16]:
                  - button "Find" [ref=e17] [cursor=pointer]
        - cell "Administrator" [ref=e18]:
          - table [ref=e19]:
            - rowgroup [ref=e20]:
              - row "Administrator" [ref=e21]:
                - cell "Administrator" [ref=e22]
                - cell [ref=e23]:
                  - img [ref=e24]
                - cell [ref=e25]:
                  - img [ref=e27]
                - cell [ref=e28]:
                  - img [ref=e29]
  - table [ref=e30]:
    - rowgroup [ref=e31]:
      - row "Calendar Leads Organizations Contacts Opportunities Products Documents Email Trouble Tickets Dashboard More Quick Create..." [ref=e32]:
        - cell [ref=e33]:
          - link [ref=e34] [cursor=pointer]:
            - /url: index.php?module=Home&action=index
            - img [ref=e35]
        - cell "Calendar Leads Organizations Contacts Opportunities Products Documents Email Trouble Tickets Dashboard More Quick Create..." [ref=e36]:
          - table [ref=e37]:
            - rowgroup [ref=e38]:
              - row "Calendar Leads Organizations Contacts Opportunities Products Documents Email Trouble Tickets Dashboard More Quick Create..." [ref=e39]:
                - cell [ref=e40]:
                  - img [ref=e41]
                - cell "Calendar" [ref=e42]:
                  - link "Calendar" [ref=e43] [cursor=pointer]:
                    - /url: index.php?module=Calendar&action=index
                - cell [ref=e44]:
                  - img [ref=e45]
                - cell "Leads" [ref=e46]:
                  - link "Leads" [ref=e47] [cursor=pointer]:
                    - /url: index.php?module=Leads&action=index
                - cell [ref=e48]:
                  - img [ref=e49]
                - cell "Organizations" [ref=e50]:
                  - link "Organizations" [ref=e51] [cursor=pointer]:
                    - /url: index.php?module=Accounts&action=index
                - cell [ref=e52]:
                  - img [ref=e53]
                - cell "Contacts" [ref=e54]:
                  - link "Contacts" [ref=e55] [cursor=pointer]:
                    - /url: index.php?module=Contacts&action=index
                - cell [ref=e56]:
                  - img [ref=e57]
                - cell "Opportunities" [ref=e58]:
                  - link "Opportunities" [ref=e59] [cursor=pointer]:
                    - /url: index.php?module=Potentials&action=index
                - cell [ref=e60]:
                  - img [ref=e61]
                - cell "Products" [ref=e62]:
                  - link "Products" [ref=e63] [cursor=pointer]:
                    - /url: index.php?module=Products&action=index
                - cell [ref=e64]:
                  - img [ref=e65]
                - cell "Documents" [ref=e66]:
                  - link "Documents" [ref=e67] [cursor=pointer]:
                    - /url: index.php?module=Documents&action=index
                - cell [ref=e68]:
                  - img [ref=e69]
                - cell "Email" [ref=e70]:
                  - link "Email" [ref=e71] [cursor=pointer]:
                    - /url: index.php?module=Emails&action=index
                - cell [ref=e72]:
                  - img [ref=e73]
                - cell "Trouble Tickets" [ref=e74]:
                  - link "Trouble Tickets" [ref=e75] [cursor=pointer]:
                    - /url: index.php?module=HelpDesk&action=index
                - cell [ref=e76]:
                  - img [ref=e77]
                - cell "Dashboard" [ref=e78]:
                  - link "Dashboard" [ref=e79] [cursor=pointer]:
                    - /url: index.php?module=Dashboard&action=index
                - cell [ref=e80]:
                  - img [ref=e81]
                - cell "More" [ref=e82]:
                  - link "More" [ref=e83] [cursor=pointer]:
                    - /url: javascript:;
                    - text: More
                    - img [ref=e84]
                - cell [ref=e85]:
                  - img [ref=e86]
                - cell "Quick Create..." [ref=e87]:
                  - combobox [ref=e88]:
                    - option "Quick Create..." [selected]
                    - option "New Organization"
                    - option "New Asset"
                    - option "New To Do"
                    - option "New Campaign"
                    - option "New Comment"
                    - option "New Contact"
                    - option "New Document"
                    - option "New Event"
                    - option "New Ticket"
                    - option "New Lead"
                    - option "New Opportunity"
                    - option "New PriceBook"
                    - option "New Product"
                    - option "New Project"
                    - option "New Project Milestone"
                    - option "New Project Task"
                    - option "New Service Contract"
                    - option "New Service"
                    - option "New Vendor"
        - cell [ref=e89]
  - table [ref=e91]:
    - rowgroup [ref=e92]:
      - row "Home Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Change layout" [ref=e93] [cursor=pointer]:
        - cell "Home" [ref=e94]:
          - link "Home" [ref=e95]:
            - /url: index.php?action=index&module=Home
        - cell [ref=e96]
        - cell [ref=e97]:
          - img [ref=e98]
        - cell "Open Calendar..." [ref=e99]:
          - img "Open Calendar..." [ref=e100]
        - cell "Show World Clock..." [ref=e101]:
          - img "Show World Clock..." [ref=e102]
        - cell "Open Calculator..." [ref=e103]:
          - img "Open Calculator..." [ref=e104]
        - cell "Chat..." [ref=e105]:
          - img "Chat..." [ref=e106]
        - cell "Last Viewed" [ref=e107]:
          - img "Last Viewed" [ref=e108]
        - cell "Change layout" [ref=e109]:
          - img "Change layout" [ref=e110]
        - cell [ref=e111]
  - table [ref=e112]:
    - rowgroup [ref=e113]:
      - row [ref=e114]:
        - cell [ref=e115]:
          - generic [ref=e116]:
            - generic [ref=e117]:
              - table [ref=e118]:
                - rowgroup [ref=e119]:
                  - row "My Recent FAQs Edit Refresh Hide Close" [ref=e120]:
                    - cell "My Recent FAQs" [ref=e121]
                    - cell [ref=e122]
                    - cell "Edit Refresh Hide Close" [ref=e123]:
                      - img "Edit" [ref=e125] [cursor=pointer]
                      - img "Refresh" [ref=e127] [cursor=pointer]
                      - img "Hide" [ref=e129] [cursor=pointer]
                      - img "Close" [ref=e130]
              - table [ref=e131]:
                - rowgroup [ref=e132]:
                  - row "No Data Found Question Product Name" [ref=e133]:
                    - cell "No Data Found Question Product Name" [ref=e134]:
                      - generic [ref=e135]:
                        - generic [ref=e136]: No Data Found
                        - table [ref=e137]:
                          - rowgroup [ref=e138]:
                            - row "Question Product Name" [ref=e139]:
                              - cell [ref=e140]
                              - cell "Question" [ref=e141]
                              - cell "Product Name" [ref=e142]
              - table [ref=e143]:
                - rowgroup [ref=e144]:
                  - row "Scroll More" [ref=e145]:
                    - cell "Scroll" [ref=e146]:
                      - link "Scroll" [ref=e147] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e148]:
                      - link "More" [ref=e149] [cursor=pointer]:
                        - /url: "index.php?module=Faq&action=index&query=true&advft_criteria=[{\"groupid\":1,\"columnname\":\"vtiger_faq:status:faqstatus:Faq_Status:V\",\"comparator\":\"n\",\"value\":\"Obsolete\",\"columncondition\":null}]&advft_criteria_groups={\"1\":{\"groupcondition\":null}}&searchtype=advance"
            - generic [ref=e150]:
              - table [ref=e151]:
                - rowgroup [ref=e152]:
                  - row "Pending Activities Edit Refresh Hide Close" [ref=e153]:
                    - cell "Pending Activities" [ref=e154]
                    - cell [ref=e155]
                    - cell "Edit Refresh Hide Close" [ref=e156]:
                      - img "Edit" [ref=e158] [cursor=pointer]
                      - img "Refresh" [ref=e160] [cursor=pointer]
                      - img "Hide" [ref=e162] [cursor=pointer]
                      - img "Close" [ref=e163]
              - table [ref=e164]:
                - rowgroup [ref=e165]:
                  - row "More Information No Data Found" [ref=e166]:
                    - cell "More Information No Data Found" [ref=e167]:
                      - table [ref=e169]:
                        - rowgroup [ref=e170]:
                          - row [ref=e171]:
                            - cell [ref=e172]
                          - row "More Information No Data Found" [ref=e173]:
                            - cell "More Information" [ref=e174]:
                              - img "More Information" [ref=e175]
                            - cell "No Data Found" [ref=e176]:
                              - generic [ref=e177]: No Data Found
              - table [ref=e178]:
                - rowgroup [ref=e179]:
                  - row "Scroll More" [ref=e180]:
                    - cell "Scroll" [ref=e181]:
                      - link "Scroll" [ref=e182] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e183]:
                      - link "More" [ref=e184] [cursor=pointer]:
                        - /url: index.php?module=Calendar&action=index&action=ListView&from_homepage=pending_activities
            - generic [ref=e185]:
              - table [ref=e186]:
                - rowgroup [ref=e187]:
                  - row "Top Purchase Orders Edit Refresh Hide Close" [ref=e188]:
                    - cell "Top Purchase Orders" [ref=e189]
                    - cell [ref=e190]
                    - cell "Edit Refresh Hide Close" [ref=e191]:
                      - img "Edit" [ref=e193] [cursor=pointer]
                      - img "Refresh" [ref=e195] [cursor=pointer]
                      - img "Hide" [ref=e197] [cursor=pointer]
                      - img "Close" [ref=e198]
              - table [ref=e199]:
                - rowgroup [ref=e200]:
                  - row "No Data Found Subject Vendor Name" [ref=e201]:
                    - cell "No Data Found Subject Vendor Name" [ref=e202]:
                      - generic [ref=e203]:
                        - generic [ref=e204]: No Data Found
                        - table [ref=e205]:
                          - rowgroup [ref=e206]:
                            - row "Subject Vendor Name" [ref=e207]:
                              - cell [ref=e208]
                              - cell "Subject" [ref=e209]
                              - cell "Vendor Name" [ref=e210]
              - table [ref=e211]:
                - rowgroup [ref=e212]:
                  - row "Scroll More" [ref=e213]:
                    - cell "Scroll" [ref=e214]:
                      - link "Scroll" [ref=e215] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e216]:
                      - link "More" [ref=e217] [cursor=pointer]:
                        - /url: "index.php?module=PurchaseOrder&action=index&query=true&advft_criteria=[{\"groupid\":1,\"columnname\":\"vtiger_purchaseorder:duedate:duedate:PurchaseOrder_Due_Date:D\",\"comparator\":\"h\",\"value\":\"2026-07-05\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_crmentity:smownerid:assigned_user_id:PurchaseOrder_Assigned_To:V\",\"comparator\":\"e\",\"value\":\" Administrator\",\"columncondition\":null}]&advft_criteria_groups={\"1\":{\"groupcondition\":null}}&searchtype=advance"
            - generic [ref=e218]:
              - table [ref=e219]:
                - rowgroup [ref=e220]:
                  - row "My New Leads Edit Refresh Hide Close" [ref=e221]:
                    - cell "My New Leads" [ref=e222]
                    - cell [ref=e223]
                    - cell "Edit Refresh Hide Close" [ref=e224]:
                      - img "Edit" [ref=e226] [cursor=pointer]
                      - img "Refresh" [ref=e228] [cursor=pointer]
                      - img "Hide" [ref=e230] [cursor=pointer]
                      - img "Close" [ref=e231]
              - table [ref=e232]:
                - rowgroup [ref=e233]:
                  - row "Lead Name Company More Information Rahul Yadav svam More Information Rahul Yadav svam More Information Rahul Yadav svam More Information Rahul Yadav svam More Information Rahul Yadav svam" [ref=e234]:
                    - cell "Lead Name Company More Information Rahul Yadav svam More Information Rahul Yadav svam More Information Rahul Yadav svam More Information Rahul Yadav svam More Information Rahul Yadav svam" [ref=e235]:
                      - table [ref=e237]:
                        - rowgroup [ref=e238]:
                          - row "Lead Name Company" [ref=e239]:
                            - cell [ref=e240]
                            - cell "Lead Name" [ref=e241]
                            - cell "Company" [ref=e242]
                          - row "More Information Rahul Yadav svam" [ref=e243]:
                            - cell "More Information" [ref=e244]:
                              - img "More Information" [ref=e245]
                            - cell "Rahul Yadav" [ref=e246]:
                              - link "Rahul Yadav" [ref=e247] [cursor=pointer]:
                                - /url: index.php?action=DetailView&module=Leads&record=71
                            - cell "svam" [ref=e248]
                          - row "More Information Rahul Yadav svam" [ref=e249]:
                            - cell "More Information" [ref=e250]:
                              - img "More Information" [ref=e251]
                            - cell "Rahul Yadav" [ref=e252]:
                              - link "Rahul Yadav" [ref=e253] [cursor=pointer]:
                                - /url: index.php?action=DetailView&module=Leads&record=72
                            - cell "svam" [ref=e254]
                          - row "More Information Rahul Yadav svam" [ref=e255]:
                            - cell "More Information" [ref=e256]:
                              - img "More Information" [ref=e257]
                            - cell "Rahul Yadav" [ref=e258]:
                              - link "Rahul Yadav" [ref=e259] [cursor=pointer]:
                                - /url: index.php?action=DetailView&module=Leads&record=73
                            - cell "svam" [ref=e260]
                          - row "More Information Rahul Yadav svam" [ref=e261]:
                            - cell "More Information" [ref=e262]:
                              - img "More Information" [ref=e263]
                            - cell "Rahul Yadav" [ref=e264]:
                              - link "Rahul Yadav" [ref=e265] [cursor=pointer]:
                                - /url: index.php?action=DetailView&module=Leads&record=74
                            - cell "svam" [ref=e266]
                          - row "More Information Rahul Yadav svam" [ref=e267]:
                            - cell "More Information" [ref=e268]:
                              - img "More Information" [ref=e269]
                            - cell "Rahul Yadav" [ref=e270]:
                              - link "Rahul Yadav" [ref=e271] [cursor=pointer]:
                                - /url: index.php?action=DetailView&module=Leads&record=75
                            - cell "svam" [ref=e272]
              - table [ref=e273]:
                - rowgroup [ref=e274]:
                  - row "Scroll More" [ref=e275]:
                    - cell "Scroll" [ref=e276]:
                      - link "Scroll" [ref=e277] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e278]:
                      - link "More" [ref=e279] [cursor=pointer]:
                        - /url: "index.php?module=Leads&action=index&advft_criteria=[{\"groupid\":1,\"columnname\":\"vtiger_leaddetails:leadstatus:leadstatus:Leads_Lead_Status:V\",\"comparator\":\"n\",\"value\":\"Lost Lead\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_leaddetails:leadstatus:leadstatus:Leads_Lead_Status:V\",\"comparator\":\"n\",\"value\":\"Junk Lead\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_crmentity:smownerid:assigned_user_id:Leads_Assigned_To:V\",\"comparator\":\"e\",\"value\":\" Administrator\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_crmentity:createdtime:createdtime:Leads_Created_Time:DT\",\"comparator\":\"h\",\"value\":\"2026-07-05 00:00:00\",\"columncondition\":null}]&advft_criteria_groups={\"1\":{\"groupcondition\":null}}&searchtype=advance&query=true"
            - generic [ref=e280]:
              - table [ref=e281]:
                - rowgroup [ref=e282]:
                  - row "Top Invoices Edit Refresh Hide Close" [ref=e283]:
                    - cell "Top Invoices" [ref=e284]
                    - cell [ref=e285]
                    - cell "Edit Refresh Hide Close" [ref=e286]:
                      - img "Edit" [ref=e288] [cursor=pointer]
                      - img "Refresh" [ref=e290] [cursor=pointer]
                      - img "Hide" [ref=e292] [cursor=pointer]
                      - img "Close" [ref=e293]
              - table [ref=e294]:
                - rowgroup [ref=e295]:
                  - row "No Data Found Subject Sales Order" [ref=e296]:
                    - cell "No Data Found Subject Sales Order" [ref=e297]:
                      - generic [ref=e298]:
                        - generic [ref=e299]: No Data Found
                        - table [ref=e300]:
                          - rowgroup [ref=e301]:
                            - row "Subject Sales Order" [ref=e302]:
                              - cell [ref=e303]
                              - cell "Subject" [ref=e304]
                              - cell "Sales Order" [ref=e305]
              - table [ref=e306]:
                - rowgroup [ref=e307]:
                  - row "Scroll More" [ref=e308]:
                    - cell "Scroll" [ref=e309]:
                      - link "Scroll" [ref=e310] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e311]:
                      - link "More" [ref=e312] [cursor=pointer]:
                        - /url: "index.php?module=Invoice&action=index&query=true&advft_criteria=[{\"groupid\":1,\"columnname\":\"vtiger_invoice:invoicestatus:invoicestatus:Invoice_Status:V\",\"comparator\":\"n\",\"value\":\"Paid\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_crmentity:smownerid:assigned_user_id:Invoice_Assigned_To:V\",\"comparator\":\"e\",\"value\":\" Administrator\",\"columncondition\":null}]&advft_criteria_groups={\"1\":{\"groupcondition\":null}}&searchtype=advance"
            - generic [ref=e313]:
              - table [ref=e314]:
                - rowgroup [ref=e315]:
                  - row "Top Sales Orders Edit Refresh Hide Close" [ref=e316]:
                    - cell "Top Sales Orders" [ref=e317]
                    - cell [ref=e318]
                    - cell "Edit Refresh Hide Close" [ref=e319]:
                      - img "Edit" [ref=e321] [cursor=pointer]
                      - img "Refresh" [ref=e323] [cursor=pointer]
                      - img "Hide" [ref=e325] [cursor=pointer]
                      - img "Close" [ref=e326]
              - table [ref=e327]:
                - rowgroup [ref=e328]:
                  - row "No Data Found" [ref=e329]:
                    - cell "No Data Found" [ref=e330]:
                      - generic [ref=e331]:
                        - generic [ref=e332]: No Data Found
                        - table [ref=e333]:
                          - rowgroup [ref=e334]:
                            - row [ref=e335]:
                              - cell [ref=e336]
              - table [ref=e337]:
                - rowgroup [ref=e338]:
                  - row "Scroll" [ref=e339]:
                    - cell "Scroll" [ref=e340]:
                      - link "Scroll" [ref=e341] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e342]:
              - table [ref=e343]:
                - rowgroup [ref=e344]:
                  - row "My Group Allocation Edit Refresh Hide Close" [ref=e345]:
                    - cell "My Group Allocation" [ref=e346]
                    - cell [ref=e347]
                    - cell "Edit Refresh Hide Close" [ref=e348]:
                      - img "Edit" [ref=e350] [cursor=pointer]
                      - img "Refresh" [ref=e352] [cursor=pointer]
                      - img "Hide" [ref=e354] [cursor=pointer]
                      - img "Close" [ref=e355]
              - table [ref=e356]:
                - rowgroup [ref=e357]:
                  - row "No Data Found" [ref=e358]:
                    - cell "No Data Found" [ref=e359]:
                      - generic [ref=e360]:
                        - generic [ref=e361]: No Data Found
                        - table [ref=e362]:
                          - rowgroup [ref=e363]:
                            - row [ref=e364]:
                              - cell [ref=e365]
              - table [ref=e366]:
                - rowgroup [ref=e367]:
                  - row "Scroll" [ref=e368]:
                    - cell "Scroll" [ref=e369]:
                      - link "Scroll" [ref=e370] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e371]:
              - table [ref=e372]:
                - rowgroup [ref=e373]:
                  - row "Upcoming Activities Edit Refresh Hide Close" [ref=e374]:
                    - cell "Upcoming Activities" [ref=e375]
                    - cell [ref=e376]
                    - cell "Edit Refresh Hide Close" [ref=e377]:
                      - img "Edit" [ref=e379] [cursor=pointer]
                      - img "Refresh" [ref=e381] [cursor=pointer]
                      - img "Hide" [ref=e383] [cursor=pointer]
                      - img "Close" [ref=e384]
              - table [ref=e385]:
                - rowgroup [ref=e386]:
                  - row "More Information No Data Found" [ref=e387]:
                    - cell "More Information No Data Found" [ref=e388]:
                      - table [ref=e390]:
                        - rowgroup [ref=e391]:
                          - row [ref=e392]:
                            - cell [ref=e393]
                          - row "More Information No Data Found" [ref=e394]:
                            - cell "More Information" [ref=e395]:
                              - img "More Information" [ref=e396]
                            - cell "No Data Found" [ref=e397]:
                              - generic [ref=e398]: No Data Found
              - table [ref=e399]:
                - rowgroup [ref=e400]:
                  - row "Scroll More" [ref=e401]:
                    - cell "Scroll" [ref=e402]:
                      - link "Scroll" [ref=e403] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e404]:
                      - link "More" [ref=e405] [cursor=pointer]:
                        - /url: index.php?module=Calendar&action=index&action=ListView&from_homepage=upcoming_activities
            - generic [ref=e406]:
              - table [ref=e407]:
                - rowgroup [ref=e408]:
                  - row "Top Trouble Tickets Edit Refresh Hide Close" [ref=e409]:
                    - cell "Top Trouble Tickets" [ref=e410]
                    - cell [ref=e411]
                    - cell "Edit Refresh Hide Close" [ref=e412]:
                      - img "Edit" [ref=e414] [cursor=pointer]
                      - img "Refresh" [ref=e416] [cursor=pointer]
                      - img "Hide" [ref=e418] [cursor=pointer]
                      - img "Close" [ref=e419]
              - table [ref=e420]:
                - rowgroup [ref=e421]:
                  - row "No Data Found" [ref=e422]:
                    - cell "No Data Found" [ref=e423]:
                      - generic [ref=e424]:
                        - generic [ref=e425]: No Data Found
                        - table [ref=e426]:
                          - rowgroup [ref=e427]:
                            - row [ref=e428]:
                              - cell [ref=e429]
              - table [ref=e430]:
                - rowgroup [ref=e431]:
                  - row "Scroll" [ref=e432]:
                    - cell "Scroll" [ref=e433]:
                      - link "Scroll" [ref=e434] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e435]:
              - table [ref=e436]:
                - rowgroup [ref=e437]:
                  - row "Key Metrics Edit Refresh Hide Close" [ref=e438]:
                    - cell "Key Metrics" [ref=e439]
                    - cell [ref=e440]
                    - cell "Edit Refresh Hide Close" [ref=e441]:
                      - img "Edit" [ref=e442]
                      - img "Refresh" [ref=e444] [cursor=pointer]
                      - img "Hide" [ref=e446] [cursor=pointer]
                      - img "Close" [ref=e447]
              - table [ref=e448]:
                - rowgroup [ref=e449]:
                  - row "Metrics Module Count More Information Prospect Accounts ( Administrator) Organizations 0 More Information Open Tickets ( Administrator) Trouble Tickets 0 More Information Hot Leads ( Administrator) Leads 1 More Information Potentials Won ( Administrator) Opportunities 0 More Information Open Quotes ( Administrator) Quotes 0" [ref=e450]:
                    - cell "Metrics Module Count More Information Prospect Accounts ( Administrator) Organizations 0 More Information Open Tickets ( Administrator) Trouble Tickets 0 More Information Hot Leads ( Administrator) Leads 1 More Information Potentials Won ( Administrator) Opportunities 0 More Information Open Quotes ( Administrator) Quotes 0" [ref=e451]:
                      - table [ref=e453]:
                        - rowgroup [ref=e454]:
                          - row "Metrics Module Count" [ref=e455]:
                            - cell [ref=e456]
                            - cell "Metrics" [ref=e457]
                            - cell "Module" [ref=e458]
                            - cell "Count" [ref=e459]
                          - row "More Information Prospect Accounts ( Administrator) Organizations 0" [ref=e460]:
                            - cell "More Information" [ref=e461]:
                              - img "More Information" [ref=e462]
                            - cell "Prospect Accounts ( Administrator)" [ref=e463]:
                              - link "Prospect Accounts" [ref=e464] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Accounts&viewname=5
                              - text: ( Administrator)
                            - cell "Organizations" [ref=e465]:
                              - link "Organizations" [ref=e466] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Accounts&viewname=5
                            - cell "0" [ref=e467]:
                              - link "0" [ref=e468] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Accounts&viewname=5
                          - row "More Information Open Tickets ( Administrator) Trouble Tickets 0" [ref=e469]:
                            - cell "More Information" [ref=e470]:
                              - img "More Information" [ref=e471]
                            - cell "Open Tickets ( Administrator)" [ref=e472]:
                              - link "Open Tickets" [ref=e473] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=HelpDesk&viewname=14
                              - text: ( Administrator)
                            - cell "Trouble Tickets" [ref=e474]:
                              - link "Trouble Tickets" [ref=e475] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=HelpDesk&viewname=14
                            - cell "0" [ref=e476]:
                              - link "0" [ref=e477] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=HelpDesk&viewname=14
                          - row "More Information Hot Leads ( Administrator) Leads 1" [ref=e478]:
                            - cell "More Information" [ref=e479]:
                              - img "More Information" [ref=e480]
                            - cell "Hot Leads ( Administrator)" [ref=e481]:
                              - link "Hot Leads" [ref=e482] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Leads&viewname=2
                              - text: ( Administrator)
                            - cell "Leads" [ref=e483]:
                              - link "Leads" [ref=e484] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Leads&viewname=2
                            - cell "1" [ref=e485]:
                              - link "1" [ref=e486] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Leads&viewname=2
                          - row "More Information Potentials Won ( Administrator) Opportunities 0" [ref=e487]:
                            - cell "More Information" [ref=e488]:
                              - img "More Information" [ref=e489]
                            - cell "Potentials Won ( Administrator)" [ref=e490]:
                              - link "Potentials Won" [ref=e491] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Potentials&viewname=11
                              - text: ( Administrator)
                            - cell "Opportunities" [ref=e492]:
                              - link "Opportunities" [ref=e493] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Potentials&viewname=11
                            - cell "0" [ref=e494]:
                              - link "0" [ref=e495] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Potentials&viewname=11
                          - row "More Information Open Quotes ( Administrator) Quotes 0" [ref=e496]:
                            - cell "More Information" [ref=e497]:
                              - img "More Information" [ref=e498]
                            - cell "Open Quotes ( Administrator)" [ref=e499]:
                              - link "Open Quotes" [ref=e500] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Quotes&viewname=17
                              - text: ( Administrator)
                            - cell "Quotes" [ref=e501]:
                              - link "Quotes" [ref=e502] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Quotes&viewname=17
                            - cell "0" [ref=e503]:
                              - link "0" [ref=e504] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Quotes&viewname=17
              - table [ref=e505]:
                - rowgroup [ref=e506]:
                  - row "Scroll" [ref=e507]:
                    - cell "Scroll" [ref=e508]:
                      - link "Scroll" [ref=e509] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e510]:
              - table [ref=e511]:
                - rowgroup [ref=e512]:
                  - row "Top Quotes Edit Refresh Hide Close" [ref=e513]:
                    - cell "Top Quotes" [ref=e514]
                    - cell [ref=e515]
                    - cell "Edit Refresh Hide Close" [ref=e516]:
                      - img "Edit" [ref=e518] [cursor=pointer]
                      - img "Refresh" [ref=e520] [cursor=pointer]
                      - img "Hide" [ref=e522] [cursor=pointer]
                      - img "Close" [ref=e523]
              - table [ref=e524]:
                - rowgroup [ref=e525]:
                  - row "No Data Found Subject Opportunity Name" [ref=e526]:
                    - cell "No Data Found Subject Opportunity Name" [ref=e527]:
                      - generic [ref=e528]:
                        - generic [ref=e529]: No Data Found
                        - table [ref=e530]:
                          - rowgroup [ref=e531]:
                            - row "Subject Opportunity Name" [ref=e532]:
                              - cell [ref=e533]
                              - cell "Subject" [ref=e534]
                              - cell "Opportunity Name" [ref=e535]
              - table [ref=e536]:
                - rowgroup [ref=e537]:
                  - row "Scroll More" [ref=e538]:
                    - cell "Scroll" [ref=e539]:
                      - link "Scroll" [ref=e540] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e541]:
                      - link "More" [ref=e542] [cursor=pointer]:
                        - /url: "index.php?module=Quotes&action=index&query=true&advft_criteria=[{\"groupid\":1,\"columnname\":\"vtiger_quotes:quotestage:quotestage:Quotes_Quote_Stage:V\",\"comparator\":\"n\",\"value\":\"Accepted\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_quotes:quotestage:quotestage:Quotes_Quote_Stage:V\",\"comparator\":\"n\",\"value\":\"Rejected\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_quotes:quotestage:quotestage:Quotes_Quote_Stage:V\",\"comparator\":\"n\",\"value\":\"Accepted\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_quotes:quotestage:quotestage:Quotes_Quote_Stage:V\",\"comparator\":\"n\",\"value\":\"Rejected\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_quotes:validtill:validtill:Quotes_Valid_Till:D\",\"comparator\":\"h\",\"value\":\"2026-07-05\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_crmentity:smownerid:assigned_user_id:Quotes_Assigned_To:V\",\"comparator\":\"e\",\"value\":\" Administrator\",\"columncondition\":null}]&advft_criteria_groups={\"1\":{\"groupcondition\":null}}&searchtype=advance"
            - generic [ref=e543]:
              - table [ref=e544]:
                - rowgroup [ref=e545]:
                  - row "Top Opportunities Edit Refresh Hide Close" [ref=e546]:
                    - cell "Top Opportunities" [ref=e547]
                    - cell [ref=e548]
                    - cell "Edit Refresh Hide Close" [ref=e549]:
                      - img "Edit" [ref=e551] [cursor=pointer]
                      - img "Refresh" [ref=e553] [cursor=pointer]
                      - img "Hide" [ref=e555] [cursor=pointer]
                      - img "Close" [ref=e556]
              - table [ref=e557]:
                - rowgroup [ref=e558]:
                  - row "No Data Found Opportunity Amount($)" [ref=e559]:
                    - cell "No Data Found Opportunity Amount($)" [ref=e560]:
                      - generic [ref=e561]:
                        - generic [ref=e562]: No Data Found
                        - table [ref=e563]:
                          - rowgroup [ref=e564]:
                            - row "Opportunity Amount($)" [ref=e565]:
                              - cell [ref=e566]
                              - cell "Opportunity" [ref=e567]
                              - cell "Amount($)" [ref=e568]
              - table [ref=e569]:
                - rowgroup [ref=e570]:
                  - row "Scroll More" [ref=e571]:
                    - cell "Scroll" [ref=e572]:
                      - link "Scroll" [ref=e573] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e574]:
                      - link "More" [ref=e575] [cursor=pointer]:
                        - /url: "index.php?module=Potentials&action=index&advft_criteria=[{\"groupid\":1,\"columnname\":\"vtiger_potential:sales_stage:sales_stage:Potentials_Sales_Stage:V\",\"comparator\":\"k\",\"value\":\"closed\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_potential:amount:amount:Potentials_Amount:N\",\"comparator\":\"g\",\"value\":\"0\",\"columncondition\":\"and\"},{\"groupid\":1,\"columnname\":\"vtiger_crmentity:smownerid:assigned_user_id:Leads_Assigned_To:V\",\"comparator\":\"e\",\"value\":\" Administrator\",\"columncondition\":null}]&advft_criteria_groups={\"1\":{\"groupcondition\":null}}&searchtype=advance&query=true"
            - generic [ref=e576]:
              - table [ref=e577]:
                - rowgroup [ref=e578]:
                  - row "Home Page Dashboard Edit Refresh Hide Close" [ref=e579]:
                    - cell "Home Page Dashboard" [ref=e580]
                    - cell [ref=e581]
                    - cell "Edit Refresh Hide Close" [ref=e582]:
                      - img "Edit" [ref=e583]
                      - img "Refresh" [ref=e585] [cursor=pointer]
                      - img "Hide" [ref=e587] [cursor=pointer]
                      - img "Close" [ref=e588]
              - table [ref=e589]:
                - rowgroup [ref=e590]:
                  - row "Organizations=%d Contacts=%d Leads=%d" [ref=e591]:
                    - cell "Organizations=%d Contacts=%d Leads=%d" [ref=e592]:
                      - generic [ref=e593]:
                        - img [ref=e594]
                        - generic:
                          - link "Organizations=%d":
                            - /url: index.php?module=Accounts&action=ListView&from_homepagedb=true&type=dbrd&query=true&owner= Administrator&viewname=4
                          - link "Contacts=%d":
                            - /url: index.php?module=Contacts&action=ListView&from_homepagedb=true&type=dbrd&query=true&owner= Administrator&viewname=7
                          - link "Leads=%d":
                            - /url: index.php?module=Leads&action=ListView&from_homepagedb=true&type=dbrd&query=true&owner= Administrator&viewname=1
              - table [ref=e595]:
                - rowgroup [ref=e596]:
                  - row "Scroll" [ref=e597]:
                    - cell "Scroll" [ref=e598]:
                      - link "Scroll" [ref=e599] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e600]:
              - table [ref=e601]:
                - rowgroup [ref=e602]:
                  - row "Top Organizations Edit Refresh Hide Close" [ref=e603]:
                    - cell "Top Organizations" [ref=e604]
                    - cell [ref=e605]
                    - cell "Edit Refresh Hide Close" [ref=e606]:
                      - img "Edit" [ref=e608] [cursor=pointer]
                      - img "Refresh" [ref=e610] [cursor=pointer]
                      - img "Hide" [ref=e612] [cursor=pointer]
                      - img "Close" [ref=e613]
              - table [ref=e614]:
                - rowgroup [ref=e615]:
                  - row "No Data Found" [ref=e616]:
                    - cell "No Data Found" [ref=e617]:
                      - generic [ref=e618]:
                        - generic [ref=e619]: No Data Found
                        - table [ref=e620]:
                          - rowgroup [ref=e621]:
                            - row [ref=e622]:
                              - cell [ref=e623]
              - table [ref=e624]:
                - rowgroup [ref=e625]:
                  - row "Scroll" [ref=e626]:
                    - cell "Scroll" [ref=e627]:
                      - link "Scroll" [ref=e628] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
  - table [ref=e629]:
    - rowgroup [ref=e630]:
      - row "Powered by vtiger CRM 5.4.0 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e631]:
        - cell "Powered by vtiger CRM 5.4.0" [ref=e632]:
          - generic [ref=e633]: Powered by vtiger CRM 5.4.0
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e634]:
          - generic [ref=e635]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e636] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e637] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e638] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
  1   | import { type FrameLocator, type Locator, type Page } from "@playwright/test";
  2   | 
  3   | export class BasePage {
  4   | 
  5   |     
  6   |     page: Page;  /// page -  instance variable
  7   | 
  8   |     constructor(page: Page) {
  9   |         this.page = page;
  10  |     }
  11  | 
  12  |     /**
  13  |      * It is used to open the url
  14  |      * @param url 
  15  |      */
  16  |     async hitUrl(url: string): Promise<void> {
  17  |         await this.page.goto(url);
  18  |     }
  19  | 
  20  |     /**
  21  |      * It is used to get current page url
  22  |      * @returns url
  23  |      */
  24  |     async getCurrentUrl(): Promise<string> {
  25  |         return this.page.url();
  26  |     }
  27  | 
  28  |     /**
  29  |      * It is used to get current page title
  30  |      * @returns title
  31  |      */
  32  |     async getCurrentTitle(): Promise<string> {
  33  |         return await this.page.title();
  34  |     }
  35  | 
  36  |     /**
  37  |      * It is used to go back from the current page
  38  |      */
  39  |     async goBackPage(): Promise<void> {
  40  |         await this.page.goBack();
  41  |     }
  42  | 
  43  |     /**
  44  |      * It is used to refresh the current page
  45  |      */
  46  |     async refreshPage(): Promise<void> {
  47  |         await this.page.reload();
  48  |     }
  49  | 
  50  |     /**
  51  |      * It is used to close the current page
  52  |      */
  53  |     async closePage(): Promise<void> {
  54  |         await this.page.close();
  55  |     }
  56  | 
  57  |     /**
  58  |      * It is used to click on specific element
  59  |      * @param element 
  60  |      */
  61  |     async click(element: Locator): Promise<void> {
  62  |         await element.click();
  63  |     }
  64  | 
  65  |     /**
  66  |      * It is used to click on element forcefully
  67  |      * @param element 
  68  |      */
  69  |     async clickForcely(element: Locator): Promise<void> {
  70  |         await element.click({ force: true });
  71  |     }
  72  | 
  73  |     /**
  74  |      * It is used to enter text in input field
  75  |      * @param element 
  76  |      * @param value 
  77  |      */
  78  |     async enterText(element: Locator, value: string): Promise<void> {
> 79  |         await element.fill(value);
      |                       ^ TimeoutError: locator.fill: Timeout 30000ms exceeded.
  80  |     }
  81  | 
  82  |     /**
  83  |      * It is used to forcefully type text in input field
  84  |      * @param locator 
  85  |      * @param text 
  86  |      */
  87  |     async type(locator: Locator, text: string): Promise<void> {
  88  |         await locator.type(text);
  89  |     }
  90  | 
  91  |     /**
  92  |      * It is used to enter text in input field by sequentially
  93  |      * @param element 
  94  |      * @param value 
  95  |      */
  96  |     async typeSequentially(element: Locator, value: string): Promise<void> {
  97  |         await element.pressSequentially(value);
  98  |     }
  99  | 
  100 |     /**
  101 |      * It is used to clear current text in input field
  102 |      * @param element 
  103 |      */
  104 |     async clearText(element: Locator): Promise<void> {
  105 |         await element.clear();
  106 |     }
  107 | 
  108 |     /**
  109 |      * It is used to get current value from input field
  110 |      * @param element 
  111 |      * @returns value 
  112 |      */
  113 |     async inputValue(element: Locator): Promise<string> {
  114 |         return await element.inputValue();
  115 |     }
  116 | 
  117 |     /**
  118 |      * It is used to get value attribute of an element
  119 |      * @param element 
  120 |      * @returns value
  121 |      */
  122 |     async getAttribute(element: Locator): Promise<string | null> {
  123 |         return await element.getAttribute("value");
  124 |     }
  125 | 
  126 |     /**
  127 |      * It is used to get input value of an element by JS property
  128 |      * @param element 
  129 |      * @returns 
  130 |      */
  131 | 
  132 |     async getInputValueJS(element: Locator): Promise<string | null> {
  133 |         return await element.evaluate((el: any) => el.value);
  134 |     }
  135 | 
  136 |     /**
  137 |      * It is used to get visible text on the UI
  138 |      * @param element 
  139 |      * @returns visibleText
  140 |      */
  141 |     async getVisibleText(element: Locator): Promise<string> {
  142 |         return await element.innerText();
  143 |     }
  144 | 
  145 |     /**
  146 |      * It is used to get all element texts
  147 |      * @param element 
  148 |      * @returns text array
  149 |      */
  150 |     async getAllTexts(element: Locator): Promise<string[]> {
  151 |         return await element.allTextContents();
  152 |     }
  153 | 
  154 |     /**
  155 |      * It is used to check the checkbox
  156 |      * @param element 
  157 |      */
  158 |     async check(element: Locator): Promise<void> {
  159 |         await element.check();
  160 |     }
  161 | 
  162 |     /**
  163 |      * It is used to uncheck the checkbox
  164 |      * @param element 
  165 |      */
  166 |     async unCheck(element: Locator): Promise<void> {
  167 |         await element.uncheck();
  168 |     }
  169 | 
  170 |     /**
  171 |      * It is used to hover on the element
  172 |      * @param element 
  173 |      */
  174 |     async hover(element: Locator): Promise<void> {
  175 |         await element.hover();
  176 |     }
  177 | 
  178 |     /**
  179 |      * It is used to drag and drop element from source to target
```