/*
Stimulsoft.Reports.JS
Version: 2018.1.2
Build date: 2017.12.05
License: https://www.stimulsoft.com/en/licensing/reports
*/
function hex_md5(A) {
    return rstr2hex(rstr_md5(str2rstr_utf8(A)))
}

function hex_hmac_md5(A, t) {
    return rstr2hex(rstr_hmac_md5(str2rstr_utf8(A), str2rstr_utf8(t)))
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase()
}

function rstr_md5(A) {
    return binl2rstr(binl_md5(rstr2binl(A), 8 * A.length))
}

function rstr_hmac_md5(A, t) {
    var e = rstr2binl(A);
    e.length > 16 && (e = binl_md5(e, 8 * A.length));
    for (var o = Array(16), i = Array(16), s = 0; s < 16; s++) o[s] = 909522486 ^ e[s], i[s] = 1549556828 ^ e[s];
    var n = binl_md5(o.concat(rstr2binl(t)), 512 + 8 * t.length);
    return binl2rstr(binl_md5(i.concat(n), 512 + 128))
}

function rstr2hex(A) {
    for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", e = "", o, i = 0; i < A.length; i++) o = A.charCodeAt(i), e += t.charAt(o >>> 4 & 15) + t.charAt(15 & o);
    return e
}

function str2rstr_utf8(A) {
    var t = "",
        e = -1,
        o, i;
    while (++e < A.length) o = A.charCodeAt(e), i = e + 1 < A.length ? A.charCodeAt(e + 1) : 0, 55296 <= o && o <= 56319 && 56320 <= i && i <= 57343 && (o = 65536 + ((1023 & o) << 10) + (1023 & i), e++), o <= 127 ? t += String.fromCharCode(o) : o <= 2047 ? t += String.fromCharCode(192 | o >>> 6 & 31, 128 | 63 & o) : o <= 65535 ? t += String.fromCharCode(224 | o >>> 12 & 15, 128 | o >>> 6 & 63, 128 | 63 & o) : o <= 2097151 && (t += String.fromCharCode(240 | o >>> 18 & 7, 128 | o >>> 12 & 63, 128 | o >>> 6 & 63, 128 | 63 & o));
    return t
}

function rstr2binl(A) {
    for (var t = Array(A.length >> 2), e = 0; e < t.length; e++) t[e] = 0;
    for (var e = 0; e < 8 * A.length; e += 8) t[e >> 5] |= (255 & A.charCodeAt(e / 8)) << e % 32;
    return t
}

function binl2rstr(A) {
    for (var t = "", e = 0; e < 32 * A.length; e += 8) t += String.fromCharCode(A[e >> 5] >>> e % 32 & 255);
    return t
}

function binl_md5(A, t) {
    A[t >> 5] |= 128 << t % 32, A[(t + 64 >>> 9 << 4) + 14] = t;
    for (var e = 1732584193, o = -271733879, i = -1732584194, s = 271733878, n = 0; n < A.length; n += 16) {
        var a = e,
            r = o,
            l = i,
            h = s;
        e = md5_ff(e, o, i, s, A[n + 0], 7, -680876936), s = md5_ff(s, e, o, i, A[n + 1], 12, -389564586), i = md5_ff(i, s, e, o, A[n + 2], 17, 606105819), o = md5_ff(o, i, s, e, A[n + 3], 22, -1044525330), e = md5_ff(e, o, i, s, A[n + 4], 7, -176418897), s = md5_ff(s, e, o, i, A[n + 5], 12, 1200080426), i = md5_ff(i, s, e, o, A[n + 6], 17, -1473231341), o = md5_ff(o, i, s, e, A[n + 7], 22, -45705983), e = md5_ff(e, o, i, s, A[n + 8], 7, 1770035416), s = md5_ff(s, e, o, i, A[n + 9], 12, -1958414417), i = md5_ff(i, s, e, o, A[n + 10], 17, -42063), o = md5_ff(o, i, s, e, A[n + 11], 22, -1990404162), e = md5_ff(e, o, i, s, A[n + 12], 7, 1804603682), s = md5_ff(s, e, o, i, A[n + 13], 12, -40341101), i = md5_ff(i, s, e, o, A[n + 14], 17, -1502002290), o = md5_ff(o, i, s, e, A[n + 15], 22, 1236535329), e = md5_gg(e, o, i, s, A[n + 1], 5, -165796510), s = md5_gg(s, e, o, i, A[n + 6], 9, -1069501632), i = md5_gg(i, s, e, o, A[n + 11], 14, 643717713), o = md5_gg(o, i, s, e, A[n + 0], 20, -373897302), e = md5_gg(e, o, i, s, A[n + 5], 5, -701558691), s = md5_gg(s, e, o, i, A[n + 10], 9, 38016083), i = md5_gg(i, s, e, o, A[n + 15], 14, -660478335), o = md5_gg(o, i, s, e, A[n + 4], 20, -405537848), e = md5_gg(e, o, i, s, A[n + 9], 5, 568446438), s = md5_gg(s, e, o, i, A[n + 14], 9, -1019803690), i = md5_gg(i, s, e, o, A[n + 3], 14, -187363961), o = md5_gg(o, i, s, e, A[n + 8], 20, 1163531501), e = md5_gg(e, o, i, s, A[n + 13], 5, -1444681467), s = md5_gg(s, e, o, i, A[n + 2], 9, -51403784), i = md5_gg(i, s, e, o, A[n + 7], 14, 1735328473), o = md5_gg(o, i, s, e, A[n + 12], 20, -1926607734), e = md5_hh(e, o, i, s, A[n + 5], 4, -378558), s = md5_hh(s, e, o, i, A[n + 8], 11, -2022574463), i = md5_hh(i, s, e, o, A[n + 11], 16, 1839030562), o = md5_hh(o, i, s, e, A[n + 14], 23, -35309556), e = md5_hh(e, o, i, s, A[n + 1], 4, -1530992060), s = md5_hh(s, e, o, i, A[n + 4], 11, 1272893353), i = md5_hh(i, s, e, o, A[n + 7], 16, -155497632), o = md5_hh(o, i, s, e, A[n + 10], 23, -1094730640), e = md5_hh(e, o, i, s, A[n + 13], 4, 681279174), s = md5_hh(s, e, o, i, A[n + 0], 11, -358537222), i = md5_hh(i, s, e, o, A[n + 3], 16, -722521979), o = md5_hh(o, i, s, e, A[n + 6], 23, 76029189), e = md5_hh(e, o, i, s, A[n + 9], 4, -640364487), s = md5_hh(s, e, o, i, A[n + 12], 11, -421815835), i = md5_hh(i, s, e, o, A[n + 15], 16, 530742520), o = md5_hh(o, i, s, e, A[n + 2], 23, -995338651), e = md5_ii(e, o, i, s, A[n + 0], 6, -198630844), s = md5_ii(s, e, o, i, A[n + 7], 10, 1126891415), i = md5_ii(i, s, e, o, A[n + 14], 15, -1416354905), o = md5_ii(o, i, s, e, A[n + 5], 21, -57434055), e = md5_ii(e, o, i, s, A[n + 12], 6, 1700485571), s = md5_ii(s, e, o, i, A[n + 3], 10, -1894986606), i = md5_ii(i, s, e, o, A[n + 10], 15, -1051523), o = md5_ii(o, i, s, e, A[n + 1], 21, -2054922799), e = md5_ii(e, o, i, s, A[n + 8], 6, 1873313359), s = md5_ii(s, e, o, i, A[n + 15], 10, -30611744), i = md5_ii(i, s, e, o, A[n + 6], 15, -1560198380), o = md5_ii(o, i, s, e, A[n + 13], 21, 1309151649), e = md5_ii(e, o, i, s, A[n + 4], 6, -145523070), s = md5_ii(s, e, o, i, A[n + 11], 10, -1120210379), i = md5_ii(i, s, e, o, A[n + 2], 15, 718787259), o = md5_ii(o, i, s, e, A[n + 9], 21, -343485551), e = safe_add(e, a), o = safe_add(o, r), i = safe_add(i, l), s = safe_add(s, h)
    }
    return Array(e, o, i, s)
}

function md5_cmn(A, t, e, o, i, s) {
    return safe_add(bit_rol(safe_add(safe_add(t, A), safe_add(o, s)), i), e)
}

function md5_ff(A, t, e, o, i, s, n) {
    return md5_cmn(t & e | ~t & o, A, t, i, s, n)
}

function md5_gg(A, t, e, o, i, s, n) {
    return md5_cmn(t & o | e & ~o, A, t, i, s, n)
}

function md5_hh(A, t, e, o, i, s, n) {
    return md5_cmn(t ^ e ^ o, A, t, i, s, n)
}

function md5_ii(A, t, e, o, i, s, n) {
    return md5_cmn(e ^ (t | ~o), A, t, i, s, n)
}

function safe_add(A, t) {
    var e = (65535 & A) + (65535 & t);
    return (A >> 16) + (t >> 16) + (e >> 16) << 16 | 65535 & e
}

function bit_rol(A, t) {
    return A << t | A >>> 32 - t
}

function stiTreeNode(A, t, e, o, i) {
    this.id = A, this.pid = t, this.name = e, this.url = o ? o.replace(/'/g, "\\'") : o, this.title = i, this.page, i && (this.page = parseInt(i.substr(5)) - 1), this.target = null, this.icon = null, this.iconOpen = null, this._io = !1, this._is = !1, this._ls = !1, this._hc = !1, this._ai = 0, this._p
}

function stiTree(A, t, e, o) {
    this.config = {
        target: null,
        folderLinks: !0,
        useSelection: !0,
        useCookies: !1,
        useLines: !0,
        useIcons: !0,
        useStatusText: !1,
        closeSameLevel: !1,
        inOrder: !1
    }, this.icon = {
        nlPlus: "img/nolines_plus.gif",
        nlMinus: "img/nolines_minus.gif"
    };
    for (var i in o) this.icon[i] = o[i];
    this.obj = A, this.mobileViewerId = t, this.currentPageNumber = e, this.aNodes = [], this.aIndent = [], this.root = new stiTreeNode(-1), this.selectedNode = null, this.selectedFound = !1, this.completed = !1
}

function StiJsViewer(A) {
    if (this.defaultParameters = {
            options: {
                viewerHeightType: "Percentage",
                toolbar: {
                    menuAnimation: !0,
                    showSendEmailButton: !1,
                    showPrintButton: !0,
                    printDestination: "Default",
                    showLastPageButton: !0,
                    borderColor: "",
                    showParametersButton: !0,
                    showEditorButton: !0,
                    showButtonCaptions: !0,
                    showDesignButton: !1,
                    showFindButton: !0,
                    showViewModeButton: !0,
                    showSaveButton: !0,
                    fontFamily: "Arial",
                    showFirstPageButton: !0,
                    zoom: 100,
                    showBookmarksButton: !0,
                    showPreviousPageButton: !0,
                    viewMode: "SinglePage",
                    fontColor: "",
                    autoHide: !1,
                    backgroundColor: "",
                    displayMode: "Simple",
                    showOpenButton: !1,
                    showMenuMode: "Click",
                    showFullScreenButton: !0,
                    showPinToolbarButton: !0,
                    visible: !0,
                    showNextPageButton: !0,
                    showZoomButton: !0,
                    showAboutButton: !0,
                    alignment: "Default",
                    showCurrentPageControl: !0
                },
                localization: "en",
                cultureName: "en",
                email: {
                    defaultEmailSubject: "",
                    showExportDialog: !0,
                    showEmailDialog: !0,
                    defaultEmailMessage: "",
                    defaultEmailAddress: ""
                },
                requestStylesUrl: "/Default.aspx",
                shortProductVersion: "2017.2.4",
                requestAbsoluteUrl: "http://localhost:4446/Default.aspx",
                viewerId: "StiWebViewer1",
                server: {
                    useCompression: !1,
                    showServerErrorPage: !0,
                    passFormValues: !1,
                    useRelativeUrls: !0,
                    cacheMode: "ObjectCache",
                    passQueryParametersToReport: !1,
                    allowAutoUpdateCache: !0,
                    useCacheForResources: !0,
                    requestTimeout: 30,
                    cacheItemPriority: "Default",
                    cacheTimeout: 10,
                    passQueryParametersForResources: !0
                },
                productVersion: "2017.2.4 from 15 November 2017",
                reportDesignerMode: !1,
                exports: {
                    showExportToHtml: !0,
                    showExportToImageMetafile: !0,
                    showExportToWord2007: !0,
                    showExportToXps: !0,
                    showExportToDocument: !0,
                    showExportToDbf: !0,
                    showExportToImageGif: !0,
                    showExportToCsv: !0,
                    showExportToExcelXml: !0,
                    showExportToImagePng: !0,
                    showExportToImageBmp: !0,
                    showExportToPowerPoint: !0,
                    showExportToOpenDocumentWriter: !0,
                    showExportToText: !0,
                    showExportDialog: !0,
                    showExportToPdf: !0,
                    showExportToSylk: !0,
                    showExportToMht: !0,
                    showExportToOpenDocumentCalc: !0,
                    showExportToImageSvgz: !0,
                    showExportToImagePcx: !0,
                    showExportToImageJpeg: !0,
                    showExportToImageSvg: !0,
                    showExportToImageTiff: !0,
                    showExportToDif: !0,
                    showExportToExcel2007: !0,
                    showExportToExcel: !0,
                    showExportToXml: !0,
                    showExportToHtml5: !0,
                    storeExportSettings: !0,
                    showExportToRtf: !0
                },
                requestUrl: "/Default.aspx",
                cloudMode: !1,
                actions: {
                    viewerEvent: "ViewerEvent"
                },
                appearance: {
                    pageBorderColor: "Gray",
                    rightToLeft: !1,
                    openExportedReportWindow: "_blank",
                    scrollbarsMode: !1,
                    pageAlignment: "Center",
                    allowTouchZoom: !0,
                    interfaceType: "Auto",
                    parametersPanelMaxHeight: 300,
                    showTooltipsHelp: !0,
                    parametersPanelDateFormat: "",
                    datePickerFirstDayOfWeek: "Monday",
                    parametersPanelColumnsCount: 2,
                    bookmarksTreeWidth: 180,
                    storeExportSettings: !0,
                    designWindow: "_self",
                    openLinksWindow: "_blank",
                    parametersPanelPosition: "Top",
                    customStylesUrl: "",
                    fullScreenMode: !1,
                    showPageShadow: !0,
                    bookmarksPrint: !1,
                    backgroundColor: "White",
                    showTooltips: !0,
                    chartRenderType: "AnimatedVector",
                    reportDisplayMode: "Table"
                },
                formValues: {},
                clientGuid: "87f9ee37b5ca43579fba456e42f74467",
                theme: "Office2013WhiteBlue"
            },
            defaultExportSettings: {
                StiExcelExportSettings: {
                    ExportPageBreaks: !1,
                    PageRange: "All",
                    RestrictEditing: "No",
                    ExportEachPageToSheet: !1,
                    ImageResolution: 100,
                    ExportObjectFormatting: !0,
                    ExportDataOnly: !1,
                    ImageQuality: .75,
                    ExcelType: "ExcelBinary",
                    UseOnePageHeaderAndFooter: !1
                },
                StiImageExportSettings: {
                    PageRange: "All",
                    MultipleFiles: !1,
                    ImageResolution: 100,
                    CutEdges: !1,
                    ImageType: "Jpeg",
                    ImageZoom: 1,
                    DitheringType: "FloydSteinberg",
                    TiffCompressionScheme: "Default",
                    ImageFormat: "Color"
                },
                StiXpsExportSettings: {
                    ImageQuality: .75,
                    PageRange: "All",
                    ImageResolution: 100,
                    ExportRtfTextAsImage: !1
                },
                StiDataExportSettings: {
                    CodePage: "Default",
                    UseDefaultSystemEncoding: !0,
                    SkipColumnHeaders: !1,
                    Separator: ";",
                    DataType: "Csv",
                    ExportDataOnly: !1,
                    PageRange: "All",
                    Encoding: "65001",
                    DataExportMode: "Data"
                },
                StiWord2007ExportSettings: {
                    ImageResolution: 100,
                    PageRange: "All",
                    ImageQuality: .75,
                    RestrictEditing: "No",
                    RemoveEmptySpaceAtBottom: !0,
                    UsePageHeadersAndFooters: !1
                },
                StiRtfExportSettings: {
                    ExportMode: "Table",
                    CodePage: 0,
                    ImageResolution: 100,
                    PageRange: "All",
                    StoreImagesAsPng: !1,
                    ImageQuality: .75,
                    RemoveEmptySpaceAtBottom: !0,
                    UsePageHeadersAndFooters: !1
                },
                StiOdtExportSettings: {
                    ImageQuality: .75,
                    PageRange: "All",
                    ImageResolution: 100,
                    RemoveEmptySpaceAtBottom: !0,
                    UsePageHeadersAndFooters: !1
                },
                StiOdsExportSettings: {
                    ImageQuality: .75,
                    PageRange: "All",
                    ImageResolution: 100
                },
                StiPdfExportSettings: {
                    ImageCompressionMethod: "Jpeg",
                    UseDigitalSignature: !1,
                    KeyLength: "Bit40",
                    DigitalSignatureContactInfo: null,
                    ImageFormat: "Color",
                    UserAccessPrivileges: "All",
                    AllowEditable: "No",
                    ImageQuality: .75,
                    StandardPdfFonts: !1,
                    EmbeddedFonts: !0,
                    AutoPrintMode: "None",
                    PageRange: "All",
                    EmbeddedFiles: [],
                    ImageResolutionMode: "Exactly",
                    CertificatePassword: null,
                    GetCertificateFromCryptoUI: !0,
                    UseLocalMachineCertificates: !1,
                    ExportRtfTextAsImage: !1,
                    ImageResolution: 100,
                    Compressed: !0,
                    DitheringType: "FloydSteinberg",
                    SubjectNameString: "",
                    DigitalSignatureLocation: null,
                    PdfACompliance: !1,
                    PasswordInputOwner: "",
                    ZUGFeRDCompliance: !1,
                    CreatorString: "",
                    CertificateData: null,
                    DigitalSignatureReason: null,
                    DigitalSignatureSignedBy: null,
                    KeywordsString: "",
                    PasswordInputUser: "",
                    UseUnicode: !0,
                    PdfComplianceMode: "None"
                },
                StiHtmlExportSettings: {
                    CompressToArchive: !1,
                    ExportMode: "Table",
                    ChartType: "AnimatedVector",
                    HtmlType: "Html",
                    PageRange: "All",
                    UseWatermarkMargins: !1,
                    OpenLinksTarget: null,
                    UseEmbeddedImages: !1,
                    ImageResolution: 100,
                    AddPageBreaks: !0,
                    PageHorAlignment: "Left",
                    UseStylesTable: !0,
                    BookmarksTreeWidth: 150,
                    ContinuousPages: !0,
                    Zoom: 1,
                    RemoveEmptySpaceAtBottom: !0,
                    Encoding: "65001",
                    ImageQuality: .75,
                    ExportBookmarksMode: "All",
                    ImageFormat: "Png",
                    ExportQuality: "High"
                },
                StiTxtExportSettings: {
                    KillSpaceLines: !0,
                    PutFeedPageCode: !0,
                    EscapeCodesCollectionName: null,
                    BorderType: "UnicodeSingle",
                    CutLongLines: !0,
                    PageRange: "All",
                    ZoomY: 1,
                    ZoomX: 1,
                    Encoding: "65001",
                    KillSpaceGraphLines: !0,
                    DrawBorder: !0,
                    UseEscapeCodes: !1
                },
                StiPpt2007ExportSettings: {
                    ImageQuality: .75,
                    PageRange: "All",
                    ImageResolution: 100
                }
            },
            scriptsUrl: null
        }, this.mergeOptions(A, this.defaultParameters), A = this.defaultParameters, this.options = A.options, void 0 === this.options.appearance.openLinksWindow && (this.options.appearance.openLinksWindow = this.options.appearance.openLinksTarget), void 0 === this.options.appearance.openExportedReportWindow && (this.options.appearance.openExportedReportWindow = this.options.appearance.openExportedReportTarget), void 0 === this.options.appearance.designWindow && (this.options.appearance.designWindow = this.options.appearance.designTarget), "OnePage" == this.options.toolbar.viewMode && (this.options.toolbar.viewMode = "SinglePage"), "WholeReport" == this.options.toolbar.viewMode && (this.options.toolbar.viewMode = "MultiplePages"), this.options.isTouchDevice = "Auto" == this.options.appearance.interfaceType ? this.IsTouchDevice() : "Touch" == this.options.appearance.interfaceType, this.options.isMobileDevice = "Auto" == this.options.appearance.interfaceType && 0 == this.options.reportDesignerMode ? this.IsMobileDevice() : "Mobile" == this.options.appearance.interfaceType, this.options.menuAnimDuration = 150, this.options.formAnimDuration = 200, this.options.scrollDuration = 350, this.options.menuHideDelay = 250, this.options.server.timeoutAutoUpdateCache = 18e4, this.options.toolbar.backgroundColor = this.getHTMLColor(this.options.toolbar.backgroundColor), this.options.toolbar.borderColor = this.getHTMLColor(this.options.toolbar.borderColor), this.options.toolbar.fontColor = this.getHTMLColor(this.options.toolbar.fontColor), this.options.appearance.pageBorderColor = this.getHTMLColor(this.options.appearance.pageBorderColor), this.options.exports.defaultSettings = A.defaultExportSettings, this.options.parametersValues = {}, this.options.parameterRowHeight = this.options.isTouchDevice ? 35 : 30, this.collections = {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            loc: {
                CompressToArchiveTooltip: "Pack all files and folders in the zip archive.",
                DayThursday: "Thursday",
                AllowEditable: "Allow Editable:",
                ZoomToolTip: "Zoom",
                MonthJuly: "July",
                ButtonCancel: "Cancel",
                BorderTypeSingle: "Unicode-Single",
                ImageQuality: "Image Quality:",
                Subject: "Subject:",
                UsePageHeadersFootersTooltip: "Define the bands Page Header and Footer as the header and footer of the document in Microsoft Word.",
                ImageQualityTooltip: "Allows you to choose the ratio of the image quality/size of the file. The higher the quality is, the larger is the size of the finished file.",
                PutFeedPageCodeTooltip: "Feed pages in the final document with a special character.",
                AllowCopyTextAndGraphicsTooltip: "Limited access to copying information.",
                SinglePage: "Single Page",
                CutLongLinesTooltip: "Trim the long lines (text lines) by the borders of components.",
                MatchCase: "Match &Case",
                Email: "Email:",
                ImageFormatTooltip: "The color scheme of the image: color - image after exporting will fully match the image in the viewer; gray – an image after exporting will be of the gray shade; monochrome - the images will be strictly black and white. At the same time, it should be considered that the monochrome has three modes None, Ordered, FloydSt.",
                ZoomOnePage: "Page Height",
                SaveRtf: "Rich Text File...",
                DaySunday: "Sunday",
                DaySaturday: "Saturday",
                AllowModifyContentsTooltip: "Limited access to the text editing.",
                Reset: "Reset",
                FormViewerTitle: "Viewer",
                ZoomXY: "Zoom:",
                EditorToolTip: "Editor",
                CutLongLines: "Cut Long Lines",
                PagesRangePagesTooltip: 'The page numbers to be processed. You can specify a single page, a list of pages (using a comma as the separator), as well as specify the range by setting the start page of the range separated by "-" and the end page of the range. For example: 1,3,5-12.',
                DayTuesday: "Tuesday",
                UsePageHeadersFooters: "Use Page Headers and Footers",
                BorderTypeSimple: "Simple",
                QuarterToDate: "Quarter To Date",
                Today: "Today",
                Open: "Open",
                UseUnicode: "Use Unicode",
                ExportFormTitle: "Export Settings",
                FirstQuarter: "First Quarter",
                ExportRtfTextAsImageTooltip: "Convert the RTF text into the image. If the option is enabled, then, when exporting, RichText decomposes into simpler primitives supported by the PDF format. RichText with complex formatting (embedded images, tables) cannot always be converted correctly. In this case it is recommended to enable this option.",
                ThirdQuarter: "Third Quarter",
                MonthOctober: "October",
                PreviousMonth: "Previous Month",
                SaveReportMdx: "Encrypted Document File (.mdx)",
                PrintPdf: "Print to PDF",
                PagesRangeAll: "All",
                QuotaMaximumDataRowsCountExceeded: "Maximum data rows count in one data source exceeded.",
                ExportEachPageToSheet: "Export Each Page to Sheet",
                Page: "Page",
                EncodingDbfFileTooltip: "Encoding data file.",
                MultipleFiles: "Multiple Files",
                Separator: "Separator:",
                ImageFormatGrayscale: "Grayscale",
                ExportDataOnlyTooltip: "Export only Data bands (the Table component, Hierachical band).",
                FourthQuarter: "Fourth Quarter",
                RangeFrom: "From",
                GetCertificateFromCryptoUITooltip: "Using the interface of the system cryptography library.",
                UseDigitalSignature: "Use Digital Signature",
                OpenToolTip: "Open the previously saved report in the window of preview.",
                KillSpaceLinesTooltip: "Remove blank lines (rows) in the document.",
                MonthJune: "June",
                Tomorrow: "Tomorrow",
                MonthMay: "May",
                NextQuarter: "Next Quarter",
                ParametersToolTip: "Showing parameters panel which is used when report rendering.",
                ImageFormatMonochrome: "Monochrome",
                ExportObjectFormatting: "Export Object Formatting",
                EncryptionKeyLength: "Encryption Key Length:",
                PrintWithPreview: "Print with Preview",
                NextYear: "Next Year",
                SaveText: "Text File...",
                BorderTypeTooltip: "The border type of components: simple - drawing borders of components with characters +, -, |; Unicode single - drawing the borders with single box-drawing characters, Unicode double - drawing the borders with double box-drawing characters.",
                Type: "Type:",
                TellMeMore: "Tell me more",
                SaveXps: "Microsoft XPS File...",
                ExportModeRtfTooltip: "Presentation of the report data after export. The Table - the report will look like a table, where each report component is a table cell. Frame - each component will look like a single frame, but without any relationship between them.",
                NextWeek: "Next Week",
                Save: "Save",
                ExportModeRtf: "Export Mode:",
                Compressed: "Compressed",
                SendEmailToolTip: "Send a report via Email.",
                PasswordEnter: "Enter the password to open the file",
                PutFeedPageCode: "Put Feed Page Code",
                ButtonOk: "OK",
                ExportPageBreaks: "Export Page Breaks",
                Message: "Message:",
                BandsFilterDataAndHeadersFooters: "Data and Headers/Footers",
                TiffCompressionScheme: "TIFF Compression Scheme:",
                MonthJanuary: "January",
                AllowPrintDocument: "Allow Print Document",
                EmailSuccessfullySent: "The Email has been successfully sent.",
                PagesRangeAllTooltip: "Processing of all report pages.",
                PageOf: "of",
                EmbeddedImageData: "Embedded Image Data",
                EncodingDifFileTooltip: "Encoding data file.",
                MonochromeDitheringType: "Monochrome Dithering Type:",
                MatchWholeWord: "Match &Whole Word",
                UserPasswordTooltip: "The password required to open the document.",
                FindPrevious: "Find Previous",
                ImageResolution: "Image Resolution:",
                ZoomPageWidth: "Page Width",
                MonthSeptember: "September",
                DigitalSignatureButton: "Digital Signature",
                PagesRangeCurrentPage: "Current Page",
                ImageCompressionMethod: "Image Compression Method:",
                SaveHtml: "HTML File...",
                SavePpt2007: "Microsoft PowerPoint File...",
                SaveExcel: "Microsoft Excel File...",
                Continuous: "Continuous",
                AllowAddOrModifyTextAnnotations: "Allow Add or Modify Text Annotations",
                DayFriday: "Friday",
                MonthFebruary: "February",
                AllowEditableTooltip: "Allows changing components with the Editable property enabled.",
                NewItem: "New Item",
                OwnerPasswordTooltip: "The password to access operations with files.",
                FirstPageToolTip: "Go to the first report page.",
                ImageFormat: "Image Type",
                MonthToDate: "Month To Date",
                SavePdf: "Adobe PDF File...",
                UseDefaultSystemEncoding: "Use Default System Encoding",
                PreviousWeek: "Previous Week",
                EncryptionKeyLengthTooltip: "The length of the encryption key. The longer the length is, the more difficult it is to decrypt the document, and, accordingly, the document security is on higher priority.",
                Error: "Error!",
                WeekToDate: "Week To Date",
                AllowAddOrModifyTextAnnotationsTooltip: "Limited access to work with annotations in the document.",
                DocumentSecurityButton: "Document Security",
                ImageFormatColor: "Color",
                SaveReportMdc: "Document File (.mdc)",
                PdfAComplianceTooltip: "Support for the standard of the long-term archiving and storing of electronic documents.",
                PreviousYear: "Previous Year",
                KillSpaceLines: "Kill Space Lines",
                SaveToolTip: "Save a report for further using.",
                SettingsGroup: "Settings",
                MonochromeDitheringTypeTooltip: "Dithering type: None - no dithering, Ordered, FloydSt. - with dithering.",
                FindNext: "Find Next",
                ImageCompressionMethodTooltip: "The compression method: JPEG - this may cause loss of quality, Flate – no quality loss, Simple, Ordered, FloydSt. - images are output in monochrome.",
                TypeTooltip: "The file the report will be converted into.",
                UserPassword: "User Password:",
                MonthNovember: "November",
                FindToolTip: "Find a text in the report.",
                NameYes: "Yes",
                UseDefaultSystemEncodingTooltip: "Use system coding by default or specify the encoding by standard.",
                AllowModifyContents: "Allow Modify Contents",
                NextMonth: "Next Month",
                SaveReportMdz: "Compressed Document File (.mdz)",
                ExportMode: "Export Mode:",
                SeparatorTooltip: "Separator between the data in the CSV file.",
                Parameters: "Parameters",
                CutEdgesTooltip: "Trim the borders of report pages.",
                MonthApril: "April",
                MonthDecember: "December",
                ExportObjectFormattingTooltip: "Apply formatting to export data from Data bands (Table component, Hierachical band).",
                ExportDataOnly: "Export Data Only",
                CurrentWeek: "Current Week",
                EncodingData: "Encoding:",
                SecondQuarter: "Second Quarter",
                FindWhat: "Find What:",
                ExportPageBreaksTooltip: "Show the borders of the report pages on the Excel sheet.",
                PrevPageToolTip: "Go to the previous report page.",
                CurrentYear: "Current Year",
                BandsFilterDataOnly: "Data only",
                DrawBorderTooltip: "Drawing the borders of components with graphic characters.",
                ImageFormatForHtml: "Image Format:",
                SubjectNameString: "Subject Name String:",
                SavingReport: "Saving Report",
                BorderTypeDouble: "Unicode-Double",
                SaveData: "Data File...",
                LastPageToolTip: "Go to the last report page.",
                PasswordSaveReportTooltip: "The password required to open the document.",
                NextPageToolTip: "Go to the next report page.",
                ExportModeRtfFrame: "Frame",
                ExportModeRtfTable: "Table",
                SkipColumnHeadersTooltip: "Enable/disable the column headers.",
                MonthMarch: "March",
                AddPageBreaksTooltip: "Visual separator of report pages.",
                Bookmarks: "Bookmarks",
                SelectAll: "Select All",
                OwnerPassword: "Owner Password:",
                EncodingDifFile: "Encoding:",
                StandardPDFFonts: "Standard PDF Fonts",
                PasswordSaveReport: "Password:",
                PagesRangeCurrentPageTooltip: "Processing the current page. If this option is selected, then a selected report page will be processed.",
                ZoomHtmlTooltip: "The size (scale) of report pages and items after the export.",
                Design: "Design",
                SendEmail: "Send Email",
                ExportRtfTextAsImage: "Export Rich Text as Image",
                GetCertificateFromCryptoUI: "Get Certificate from Crypto UI",
                Print: "Print",
                EmbeddedFonts: "Embedded Fonts",
                ImageFormatForHtmlTooltip: "The image format in the finished file.",
                SaveDocument: "Document File...",
                EmbeddedFontsTooltip: "Embed the font files into a PDF file.",
                EmbeddedImageDataTooltip: "Embed images directly into the HTML file.",
                BookmarksToolTip: "Show the bookmark panel that is used for quick navigation to jump directly to a bookmarked location.",
                ZoomXYTooltip: "The report size (scale): X - change the horizontal scale, Y - to change the vertical scale.",
                DayMonday: "Monday",
                RemoveEmptySpace: "Remove Empty Space at Bottom of Page",
                ImageResolutionTooltip: "The number of pixels per inch. The higher the number of pixels is, the better is the quality of the image. The size of the finished file is much larger.",
                DayWednesday: "Wednesday",
                SkipColumnHeaders: "Skip Column Headers",
                EmailOptions: "Email Options",
                SaveWord2007: "Microsoft Word File...",
                Edit: "Edit",
                BandsFilter: "Bands Filter:",
                PagesRange: "Page Range",
                YearToDate: "Year To Date",
                DrawBorder: "Draw Border",
                ExportModeTooltip: "Apply a filter condition when exporting. Data Only - only data bands (Table component, Hierarchical Band) will be exported. Data and Headers/Footers - data bands (Table component, Hierarchical Band) and their headers/footers will be exported. All Bands - All the report bands will be exported.",
                Time: "Time",
                PrintWithoutPreview: "Print without Preview",
                AllowPrintDocumentTooltip: "Limited access to the print operation.",
                Version: "Version",
                BandsFilterTooltip: "Apply a filter condition when exporting. Data Only - only data bands (Table component, Hierarchical Band) will be exported. Data and Headers/Footers - data bands (Table component, Hierarchical Band) and their headers/footers will be exported. All Bands - All the report bands will be exported.",
                EncodingDataTooltip: "Encoding data file.",
                QuotaMaximumReportPagesCountExceeded: "Maximum report pages count exceeded.",
                ExportEachPageToSheetTooltip: "Export each report page in a separate Excel sheet.",
                AllowCopyTextAndGraphics: "Allow Copy Text and Graphics",
                ContinuousPages: "Continuous Pages",
                PrintToolTip: "Print a report.",
                RemoveAll: "Remove All",
                SaveImage: "Image File...",
                NameNo: "No",
                AddPageBreaks: "Add Page Breaks",
                PreviousQuarter: "Previous Quarter",
                PagesRangePages: "Pages:",
                FullScreenToolTip: "Full screen reading.",
                EncodingDbfFile: "Encoding:",
                SubjectNameStringTooltip: "Certificate identifier. The identifier is the name of the certificate owner (full line) or a part of the name (substring).",
                ContinuousPagesTooltip: "The mode of placing report pages as a vertical strip.",
                BorderType: "Border Type",
                ViewModeToolTip: "View Mode",
                TiffCompressionSchemeTooltip: "Compression scheme for TIFF files.",
                MultiplePages: "Multiple Pages",
                CompressedTooltip: "Compression of the ready document. It is recommended to always include file compression.",
                Submit: "Submit",
                PdfACompliance: "PDF/A Compliance",
                ZoomHtml: "Scale:",
                CompressToArchive: "Compress to Archive",
                Loading: "Loading",
                MultipleFilesTooltip: "Each report page can be a separate file.",
                CurrentMonth: "Current Month",
                New: "New",
                Yesterday: "Yesterday",
                RangeTo: "To",
                RemoveEmptySpaceTooltip: "Minimize the empty space at the bottom of the page.",
                Close: "Close",
                UseUnicodeTooltip: "Extended support for encoding characters. It affects on the internal character encoding within the PDF file, and improves the copying of the text from the PDF file.",
                OpenAfterExportTooltip: "Automatic opening of the created document (after export) by the program set for these file types.",
                UseOnePageHeaderFooter: "Use One Page Header and Footer",
                BandsFilterAllBands: "All bands",
                OpenAfterExport: "Open After Export",
                StandardPDFFontsTooltip: "14 standard Adobe fonts. If this option is enabled, then only standard 14 fonts will be used in the PDF file. All report fonts are converted into them.",
                Attachment: "Attachment:",
                UseDigitalSignatureTooltip: "The digital signature of the file.",
                Maximum: "Maximum",
                SaveOds: "OpenDocument Calc File...",
                SaveOdt: "OpenDocument Writer File...",
                MonthAugust: "August",
                CutEdges: "Cut Edges",
                UseOnePageHeaderFooterTooltip: "Define the page bands Header and Footer as the header and footer of the Microsoft Word document.",
                CurrentQuarter: "Current Quarter"
            },
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            dateRanges: ["CurrentMonth", "CurrentQuarter", "CurrentWeek", "CurrentYear", "NextMonth", "NextQuarter", "NextWeek", "NextYear", "PreviousMonth", "PreviousQuarter", "PreviousWeek", "PreviousYear", "FirstQuarter", "SecondQuarter", "ThirdQuarter", "FourthQuarter", "MonthToDate", "QuarterToDate", "WeekToDate", "YearToDate", "Today", "Tomorrow", "Yesterday"],
            encodingData: [{
                key: "1251",
                value: "Cyrillic (Windows)"
            }, {
                key: "20127",
                value: "US-ASCII"
            }, {
                key: "1201",
                value: "Unicode (Big-Endian)"
            }, {
                key: "1200",
                value: "Unicode"
            }, {
                key: "65000",
                value: "Unicode (UTF-7)"
            }, {
                key: "65001",
                value: "Unicode (UTF-8)"
            }, {
                key: "1250",
                value: "Central European (Windows)"
            }, {
                key: "1251",
                value: "Cyrillic (Windows)"
            }, {
                key: "1252",
                value: "Western European (Windows)"
            }, {
                key: "1253",
                value: "Greek (Windows)"
            }, {
                key: "1254",
                value: "Turkish (Windows)"
            }, {
                key: "1255",
                value: "Hebrew (Windows)"
            }, {
                key: "1256",
                value: "Arabic (Windows)"
            }],
            images: {
                "Office2010Blue.PagePrevious20.png": "data:image/png;base64,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",
                "NextPage.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABhSURBVHjaYvz//z8DJYCRUgMYQAagY5/G7f+xiWPDTLgM9m3aQZTTmPBJEmMIEyEFhAxhIsaZ+AxhIjawcRlCtAGb6zwYyTYAl2aiDMCnmaABhDRTJSUyDnhmotgAgAADAB9+gDvqx6+SAAAAAElFTkSuQmCC",
                "PrintWithoutPreview.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC2SURBVHjaYiwqKmJAA/8Z8ANGZA4LNhW9vb1YdRYXF2OIMTFQCCg2gBEYBvZAuguIzUBO92veiVfDplp3mFdOAXEZKAxWALEEsgIigRlIL8gF/6keBiCv4IoJogOxfMUMogxhwRfvMEOwxT9yLDxhMVWVxmdLZ0QGroT0FOSFFELOBLkEC3gB0gsyYAchA2AugHqXEZofJEF6WaAKGNEzE8xWZM1ExQKyP7FpRg8HRkqzM0CAAQBaqzs4D+6nowAAAABJRU5ErkJggg==",
                "FirstPageDiabled.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACISURBVHjatNbBDsAQEARQK/1tp/1w0mOlmJldjg3zBF2s915utufvo7t/1NaaIWHvuLlvzZrpPKlUYBWeAuzCw8ApPAQg4TKAhksAE04DbDgFKOEwoIbDAFoqQkukItQmKwh9TFlE+tEYRC4VKBIqdggSLtcnJOXC2SFpV+YKsduviloutyHAADHHNisEgmXKAAAAAElFTkSuQmCC",
                "SaveRtf.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADjSURBVHjaYgybdX0vAwODEwN5YB8LTPPKVA2wyJpzbxhWn30D54NA+OwbGHwocGJCNg4kEWIkgqIISTHYcGQ+CKAYALIFpAgXMJLjwRDD6QJsoHL9AwwxRmAg/megBGzbtu0/uQCklwVm0MuXr0myWFxcFEyzoAuQCgi6ANngH71tDH9vXmfgnrUY0wBCLvj37CkQP2H4/+UTeS740dvKwBaVwPBz5mSwYUxS0sS74M/ZU3AMAn9vXcc0AJ8LQLbzLNsI1vRz2UKwC0gKA5BmGGCPiscIgx3bt2/3IDMd7gAIMABd0qBRIGJjOgAAAABJRU5ErkJggg==",
                "Office2010Silver.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAB6SURBVHjazJLNDcAgCIWBdFM3wDkYwVlpPNggEWvroX2JByF5H3+oqrCjw35yzpebiOBdvIq8Y0ppSIri2FqwFEuL4sMKIsosT5ZeSoFoJpFolW4B1piers2DkJlfH0IdJkXl12R7syoINvUTA7//1XV2p/xZC6cAAwCC4Dm3f4iZSAAAAABJRU5ErkJggg==",
                "FirstPage.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABdSURBVHjaYvz//z8DJYCJgUKAYoBv047/MIxNMTZxol2Ay1AmSjQTZQA+zQQNIKQZrwHEaMZrwOY6D0aK0wExhhAMREKGEBWN+AwhOiHhMoSkvIDNEMYBz40AAQYAaKwlq7Pf/SYAAAAASUVORK5CYII=",
                "Parameters20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAP5JREFUeNpi/P//PwM1ARMDlQELIQXd3d0VQKodyq0E4o7S0lKKXNgOMgBqSDshxYzoYYjmIkKgEmhRB4oIyEBk3NXV9Z9YAFWLoh9vGH758Zth6tZrDEevvQDz3Y1kGOKd1Rh4OFjJi5S6JWfAdHmwPtDwPwwL994C87O9tUk38M7zT2Dcl2LJoCLJBxbj4WBh6Fx7Ea+BOGMZZAiyYZAg+IPXuwSTDbJhF++/BXsZFIYU5xRQpNQCwxNkGChiKDZw4b5bRBlGtIHiAlwM+orC1CscQqwVGSQEOalnICj87gKTEFVKGxDYVOtOUfFVCSwgiC4cCJY2g67EBggwABxnlmtVY6LaAAAAAElFTkSuQmCC",
                "Windows7.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "SavePdf.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFfSURBVHjaYvxob7yXgYHBiYE8sI8FppnvwBmwyM8Fs8AYxP976zrD783rGX5tXgeXB4FPDiYwphMTsnEgCfaENDj/a1osA0dxFZwPMhhJMxigGACyBaQIF2CxssUUQ3cBMuCetZjhR28biovQASMwEP8zUAK2bdv2n1ywY9PG/3AvvHz5mqBl4uKiCM6/fwzqG1chwgBFkgjwY2IXg9CdGwxkueDnwtkMvzauQY0FYlzw/80rhu9dLQx/Th1DRKPK9g0M/zTVGV5z8uK09f+H9wy/d20D2/z/6xcGFgsbBlY3L4b9n74iovG/mATDPy1dhn/iUsAUxQ+J46ePGDjevWH4c+IIhC8ixsBZUgU2AAS2b9+O8ALjqxcMzCCM5oI/MKeaWTFwNnYwMHJy4U6JuABbYBgDR24JMOEzYSblZ6bWt6ROH1XDGmiMTAz3XbwYnqvpMjDs3IlNyQ6AAAMA+4a3P3zhm5cAAAAASUVORK5CYII=",
                "BookmarksfolderOpen.png": "data:image/png;base64,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////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ALLDDRIAAABlSURBVHjaXI85DsAgDAQHRMsXkpb/PyhSzg9EkcIlUrgI2N2O1/baXIxllcZxA74HLbD2jifAvKUK4nQATNJdEHC+RUDOciWXf4W3sEeVo3bSYzmiSppV9JaGCWzTv3gFjH7/GwAJKxnAgmMegQAAAABJRU5ErkJggg==",
                "Bookmarks20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGFJREFUeNpi/P//PwM1ARMDlQELjNHd3U2RU0tLSxlRDIQKkmUY0DGYLkQGyw/eYYi0VwHT2ABIjqCXsWnAp5EkAylxKV4DyXHpEHXhaCwPs1imXfGFXmqQCxgHfYkNEGAAS007sP5CoY0AAAAASUVORK5CYII=",
                "Office2010Blue.PageLast20.png": "data:image/png;base64,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",
                "Office2007Silver.PageFirst20.png": "data:image/png;base64,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",
                "SimpleGray.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "Office2003.PageFirst20.png": "data:image/png;base64,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",
                "Pin20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYwRUUzNjdFQjQwOTExRTdBQURGRTRENDg2RDgxQjBGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYwRUUzNjdGQjQwOTExRTdBQURGRTRENDg2RDgxQjBGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjBFRTM2N0NCNDA5MTFFN0FBREZFNEQ0ODZEODFCMEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjBFRTM2N0RCNDA5MTFFN0FBREZFNEQ0ODZEODFCMEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xYiY8AAAF0klEQVR42oxW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",
                "Office2010Silver.PageNext20.png": "data:image/png;base64,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",
                "Loading.gif": "data:image/gif;base64,R0lGODlhEAAQAOZ/ALLC2nOQvOPo8svV5rvJ3s7Y6PDz+Nbe6/j6/OTp8s3X5/r7/dzj7vf4+8bS5O7y99Pc6qm71u3x99Ha6b/M4PH0+JSqzEVrpitXmo2lyf39/v7+//7+/tvj7vP1+a6/2U5yq/X3+nqWwIKcxDVfn9nh7cPP4pKpy6q81+Lo8ejt9Oru9efs9MLP4rzK35muz6/A2T9npFh7sPv8/YGbw5itzt3l71Z5r0Fppd3k7/L1+ZGoy+Dn8JaszTdhoEtxqk90rNri7TJdnsPQ43uXwHiUv9vi7qu91/b3+kdtp+nt9Njg7MjT5cTQ47fG3bjH3YujyHWSvcDO4ZKpzI6myd/l726Nuujs9C1Zm1p9sfj5++vv9ae51fT2+urv9bnI3nuWwOzv9ai61fP2+fz9/unt9V+Bs9ff7GmIuNjg7XuWwc/Z6Jyx0K2+2OHn8f3+/vj5/O7x99/l8PL0+enu9fX3+4egxl1/stHb6XGPu87Y56a51cDN4drh7f///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgB/ACwAAAAAEAAQAAAHn4B+goMAJD4ug4l+Gn0sGj4YGDiKghoBF0kUJJExlH4MF6FWXzE4Dp5hIKFQnooKaj0NrYIKRSIQrRVGHWNEAQEjrQx9fTYivzStHcQ5eDQjJa0eOTYhgml7TwiJM0sFK4NxVBkZiIN9fHxSdYIC5BkfVREoCRDpfAaCHBEZOzxHe/bAeNCCzxoOgzio8LABRcAPfhDo2NAqxQcYLCgFAgAh+QQFCgB/ACwAAAAAEAAQAAAHpIB+goMEIEBNg4l+HAkSGkAXFzJ+CQcagxw9AVEKIJE3TlgYZpeUAadTLTcyClkYr2eCBiKnYolgryRKgyVsMAiJIXZoDoIHOycdist+FhkZL8yKJ8810oklNS8814puX0wLiRpXKTqDc1x7ewOJdH19QcB+Zet7fCotJlsJ8H0Ngja42BOBxRA+fByEMNInxYZBGyQg2WACYbEZWq55ceDgwbJAACH5BAUKAH8ALAAAAAAQABAAAAehgH6CgwoiRBCDiX4cKgYcRAEBI34sfRqDHBEZVGcikTR8SRcBl34rGah7eDQjJVYXsAyCHieoT4lQsCBhgzwfFAuJDT0iCoJVESgJioMAQiQuR3t7MMx+Gj4YGDgo0x/WGiTaMSkfMCzWfl8xOA6CKwVLM+mDdVJ8fH30ggb4fBAVjHQYY23DGj4tHjDo08dGug06EPjpwDDHvlk5bIRgFggAIfkEBQoAfwAsAAAAABAAEAAAB6iAfoKDBycWHYOJfhsSXRwWGRkvfhIJHIMbLntcPCeRNWtRAT2Xfg97qF8lNS88UwGwCYJIKKhMiWKwIgaDLHwKM4kIMC8lgiotJluKgwQ/IE1DfHwOzH4aQBcXMibT1cwaINo3Xg4OD9Z+LTcyCoI6KVcaiR5gWU6DCEF9fXSJIxgwYJEjqAG/PrIGoQmIYcCgBH2MhEjERAiGOwsSaQmmSMmBeelCBgIAIfkEBQoAfwAsAAAAABAAEAAAB6KAfoKDVShHCYOJfhs6DRtHe3swfgYqHIMba3xSZSiRH2lUGRGXfh58qAUpHzAsexmwK4IIJqhLiU+wJx6DDxAdZIkLFG08ghVGHWOKgwpFIhAMfX02zH4cRAEBIx3TOdYcIto0Hjk2IdZ+eDQjJemCXVBWfO+DOxcXSQLWAEIkLmrwXZjATIMPDBhwrPlxIc+CgiQQxvATpo+GdF9i4HDALBAAIfkEBQoAfwAsAAAAABAAEAAAB6iAfoKDKiZDW4OJgloLG0N8fA5+XRIbiQl9QRUmkA5uXHsuln5wfaYpXg4OD197rg+CMx2mV4lMrihIgyEJK2+JMwoULIrFgwc7Jx3GiRwWGRkvzIMcJ9A104MlNS88gk5ZYB6JDWJTa4NyWBgYI4ltAQFRK4ID7BhoBD8gTWzxAQwEaTCDQYgDIBcuyOhQJICFGYM0HFCiAUTCG34MJODArMUNGQqKBQIAIfkEBQoAfwAsAAAAABAAEAAAB5+AfoKDFR0MY4OJigx9fTZ+DTobioMdjTkrUnxrk5QeOTYhBXykHpSKS6QmCKeJZB14D4IAQiQurVURKAk+GBg4pxtHe3swJL4xwSjEH18xOA6tKR8wLIJ8VlBdiQhPe2mDAkkXFzuJLhkZVHGCE+QXagpFIhAf6RkCghoBFz96RAECjEixI4MYMoM09AnDQURAGn48qODQCg+NESUoBQIAIfkEBQoAfwAsAAAAABAAEAAAB6aAfoKDhIWDGgcJhgtahBpmGFhOhDpBfYqCZxibWYQpfaBwgkokm2CEV6AdM4MOaHYhhG8rCbF+BD8gTYaCKi0mW0AXFzK8G0N8fA4gwzfGJskOLTcyCrx+Xg4OD4JrU2INhAtMX26DK1EBAW2EA3t7XHOCDOoBbAc7Jx1873tlghx6BCgSxEKGDC9URNhDQMMgDgkMcDhxsIYfJBI2XCtR4wUPQ4EAADs=",
                "Office2003.ZoomPageWidth20.png": "data:image/png;base64,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",
                "Office2007Black.SelectedItem.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWJJREFUeNqslb1OwzAQgC/RDR4YbmDI0KESGyzpG1SCgfeAR2JF4hEYGUDqiFiaBQZUJAaGDB08dLghUjjbSePUCSlNT3F8558v5/PFjsqyhK/lfQlHkLPZTRSt3u5KShKgyfUomP55Ap3ngLxhB9ssvG4lhf9hgzDmkK8eBFhIR12s8M4kU+se25PCVVgr7a/v6n01tJxgZvGQ2TVwLuVbxk4PC+IJO6D10MD0Y/Wx7EBgalyEuIndfoLnz7aEImFAJcDWRgzDbPw/rjp63cbG+3ryN6yRXg/riT54COaAWKcAeTUFgBBG4ZKFhY1BLjmxGlzpxeetvLRrt23k2dTYLqvlQX+jkuaP6dIRQtuukLZh85YM0EqhLh0ptP1x2yXjazN4MHeo2zYMCUmsDJLT8YdhIQylzGljYpK5uIwRzKq9naSg1wrodDHugF3PgaYMkbkC3pcvR7kCLmaX0a8AAwDOipVbk6mXKwAAAABJRU5ErkJggg==",
                "Office2010Silver.PagePrevious20.png": "data:image/png;base64,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",
                "DesignToolbarRightHalf.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAIAAACUOVFTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGdJREFUeNpiPHbsGAMNAOP///+pbujx48eZGGgDRs0dNZce5rIQVFFRUYHM7ejooIJ70QzFKkJ+OHSAATXDgVTjSI43uPepE77kGUrDdEar8pdlNBxG66FRc0fNxVWuA/MGLcwFCDAACfEoeMDn9hAAAAAASUVORK5CYII=",
                "SaveHtml.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFCSURBVHjaYgzc/XQvAwODEwN5YB8D0ID/IAwC6DQMwPg7n3wFs0E0TJwJ2bh1LlJwdtCeZyg0CLhJc6HQIIBiALJibAAkD7IEWR0TA4WAEeQPikzYtm3bf3IBSC8LLoPvfPrJcOj5F4an334zSHGxMliLczNoCHBgqMMaBvc+/WLovbya4cjLpQz/gR5c+yCNoepMIcPp17eIM2DP088MNz7OYOBhVQTz+djUGO5/WcbQejEJQy1WLxx61cfACITC7IZgvhZ/PsPPv28Y7n1ezvDr3x8GNiYW/AZIckowPPryDej8/wyMjBAxPcFqBjbmDyiacXohWS2FQYBNi+HGp6lwMWZGDoYqvUXEhYGGACdDo+E0Bm6WD2C+ABszg6csH4O+MCdxYQAChiK8DHNtZxBMRyADdmzfvt2DzHS4AyDAABrkzDYw+OwxAAAAAElFTkSuQmCC",
                "ButtonArrowUpWhite.png": "data:image/png;base64,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",
                "Windows7.SelectedItem.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAV5JREFUeNqslMFOwkAQhv9Z14YoIkpjYtAD0Yvx4hv47LyBB416wBiEGEGCgkbpth131hZMKR5aJtnubrv79Z9/pyVmxl13xL2XMcrEoV/Hecsnun4YslZAq7lfGKYUofM0Qhjb8fPwDSfHDZBShZtN0jGEpSM7U0QIIi6VsmdVCktDOGkrEwlDO2G0BiIBwtJigHgQx+WAzCQX6Di5keXxihfUtjddP/0Kl54Jyyn8D5AHm3ya/PVOIbse2UPeqy42Z2ES2fXONudhchxZD2WjQFLQXxhy1qczPZsZGFvig0mwlMFt7wNnR9X5uD+erbSj4ikIS8/lrvDwpjvNVZRj36/CRQox1hGJQkZUug45BZKtH8Z3YArDxI6It9znMvfQRLyelLXegAlC+DWvuEIRZBnC0n59B53+GKf2f2aiYmlXPA/3j68QFomZ7as+D0bvpVI9aOzi8qJJPwIMALe9x88ZfvvHAAAAAElFTkSuQmCC",
                "Windows7.PageFirst20.png": "data:image/png;base64,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",
                "CloseFindPanel.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGhJREFUeNrUU0EKwDAIq/20PsFfO7w5SYTR7TChUEyaNoZKRKyT2uuw3hcwM+oJYRsREJFhNwF3F3Rb3VdOlqAUmI1+mA4REVHvuxinIT6KMZ/NBjvG2D2PIplCXaoavTdh8v/PdAkwACKzahvWdxXGAAAAAElFTkSuQmCC",
                "Bookmarksminus.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAEZ0FNQQAAsY58+1GTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABzSURBVHjazFNBDoAgDCuGB/BUfsAIH+Cp/KBeRWWKEoWk2WFJ13UFJNGCiFDrb2FIYsRbtGaM8faUYYpsr4IQgrkkAgDvfZMk5/zMo2FmvyZyzh1w5mVV9wEspTShBXQ+j2zPiT9JtrpaSolzKfrl968DAHepl53qzrYjAAAAAElFTkSuQmCC",
                "Bookmarksnode.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAB5SURBVHjaYvz//z8DJYAFxiguLiZkUmNvb28DhijIBSBcVFT0HxcAyTU0NIDoBph6GGYi1qn19fUMfHx89UCXNmD1Agxs2bIFhe/j4wPzItwsIG4gyQvo3kH2AkEXYHMNXi9gU0RUNI66YLC4ACm1EQ0YKc3OAAEGACk8j7f3gD1uAAAAAElFTkSuQmCC",
                "Office2003.PageNext20.png": "data:image/png;base64,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",
                "Office2007Silver.ZoomOnePage20.png": "data:image/png;base64,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",
                "SimpleGray.ZoomOnePage20.png": "data:image/png;base64,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",
                "ArrowLeft.png": "data:image/png;base64,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",
                "SelectedItem.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAADAFBMVEWjvePV4fJ8enxTAoN3H6gAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAE4ACABgAAp3H6gY9jAAAABEAAAAOgBXAFwAbwBrAHIAXABvAEYAcgBWACAAaQB3AGUAZQBcAHIAMQAzADIAXABlAFMAbABjAGUAdABkAGUASQBlAHQAbQBwAC4AbgAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAAAAAACYAAAAGPUfqwH1kHcBABgAAACTEeQAAHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgALUAupkAAAD1sAAKABgDyAAABPcSKAAAdpN2jyobACB/6AABALoAAAC6mdj11AAjABh3HuAe36UAAHcAAAAAAAAAAAD2WABGABh2kMYY9ljGoAAAdpAAAACD//9jjAKMAn4CfmMAABgAAAAwAAAAGPYAAEAAAAAcAAAAGPYAAAAAAAAAAAAAAAAAAAAADAACAAAAAAAAAQH2lAAAABgAAAC1AACJGAAAA10dOTGKAAAAAWJLR0T/pQfyxQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAC1JREFUeNpjYMAKGDHAAAkyMWEKQsXggiA+TAyhkokJLoakHSHGOJi8iRDEAgAXYAFTLVxyPgAAAABJRU5ErkJggg==",
                "Office2010Black.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "SavePpt2007.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEXSURBVHjaYnzgJ72XgYHBiYE8sI8BaMB/EIaBD8t78fJBAKYHhJmQjXvoL8PAH1GElQ9iI9MwgGKA/MYnDB9X9OHkYwMs6C7Ax8cGGEH+YKAEbNu27T+5AKSXBZuh///8ZviwqJ3h27GtDP///WXgMnNjEEyqY2Bk48BQy4TNgPcLWsAaxZpXMvB6xILF3s2owuoDrAZ8O7SBgT80D2gjO8PPG2cZmAVEGb4e3gR2GVEGwMC/T+8ZuJ1CGPiCs4Ccv8S7gMsugOHj6kkMzHxCDBzalgwfFncycNsHMjCysBJngGBCDZh+XurD8LzQjeHfj68MQhlthBMSPHEAbRJKaQRjQoCJgUIAcsGO7du3e5CpfwdAgAEA6lXBi/2RZTAAAAAASUVORK5CYII=",
                "Designer.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK0SURBVHjaYmxoaGAAgglAXMBABqivr4ez/Zp3qgOpRUAcuqnW/RFIjAkqlw+1hGTw69cvMAYargXkHgBiMyA+DOTLIVsAs2QyOZZ8+PprjbeJzHEgUwIqBDJ8NYjBgqY2B0rnEmt4SOd+LSEedtsCPy0+FUk+hunbbzD8+vPvBVAqDt0HyJZMI8bws0wWoGDZ++7LT7GG5RcY3n3+yZDorPoNKOYAjIOb2HwAA5lQOouQ4bBg+ff/P8PiA3efApnOa8odb8LUMeFxIMiSmXgMP4AU5iCAYTguC5CDJw3dEiTDRdENBwULGxsbAwjjsyAbLTWBLJlDwHB4mKMDXHGQh5aakr8w8AkAaTscht/BFc5MeHJoHizzOXmHMDzl1A3GYrgtPsPxWgDKnZWVlYWfGPmXTN/3nOHLz78M6IYb/ztxn1BSZsEnWTTvlMkjRk13BiTDWRl+Maj8u3mci+HrI2LyCjYf/AfhBw8e/E90Uj5triYKDxY2hp8MpT7KDMmRfiFA7nwgZibHAjD4/OMvw9RtNxkibRUZjJWFwYaX+KgwCHGzMCxfvhykJBZkSWNjIzNZFlx49JXhDTDrN626yGCnJcZQ5K2MbDgMgCxZhM8ScByk8x1jZGBgZPn/5ycrKIQYmVgYMs6brbPWlNS6fONehubelgP//0HiIZ2HmeH/399A1WwM///8YmBkZmX4/+8P2/OegwyMjIxAuT8MkmUHv7/odwerZ/wPLEOgnP/INrPLmzAw8Qgx/Hp4juHvlzckFd8ShTsZYRYwgCx43ucGwv9hgApshue9rmBzwXEA8haaC0hii+duwvQGKEiBGGwBM58YAyWAkYUdS1r/zyAQ0ASJg39f3jK8mh31n4FKABQHP++eYGBXtoBYAASLgRgUTl+pZAeoVlwJT0W0BAABBgBNYEtP4534wwAAAABJRU5ErkJggg==",
                "Bookmarksplus.png": "data:image/png;base64,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",
                "SaveData.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEuSURBVHjaYry/1HAvAwODEwN5YB8LTLNC1DmGX++uM3y+sxaI1zEI6mcz8Gsng1U9WGYElocBEB8KnJiQjXu2I5pB2KwGzOaUtAIrBBmKrAlJMxiw4HIbm5Amiq24AIoLpDyWMrw91YLNqTgBIzAQ/zNQArZt2/afXADSizUMvj7YzvDxxhKGP1+eMTD8+83AwifPwKPozcCnHoWhFsOAf7+/MPz+/JCBkYmVgYmVk+H/H0gw/f3xDqsPsLrg59vrDEJGRQzsInpg/q/3Nxk+3VhKvAHfnx0GY5ArgATD/78/ga7hId4AGPgP9D9J6QAcr8zswFRoiWIjiM0uqk+cC0DO5pJxAAbmV4Y/315AFHFJMHBK2RDvBV7VUDAmBoAM2LF9+3YPMtPhDoAAAwDU/JvSfn23cwAAAABJRU5ErkJggg==",
                "ZoomPageWidth20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHNJREFUeNrUlEsOwCAIBXnI/Y9c7NIFlE9Jk76tYQIjClVlIrpoJgs3kCbDNJzPgBkPmgVWpGoE7NyQesDzAAkQrFpxOut2Cm4Wu1BOjpcN5PBRdWh650hyBWatTWd8RIuNLuzp6aED+/dv8woog7y1BRgAzzgYLkH6kFIAAAAASUVORK5CYII=",
                "BookmarksminusBottom.png": "data:image/png;base64,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",
                "Office2010Black.PageFirst20.png": "data:image/png;base64,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",
                "ViewMode.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFaSURBVHjalFMxa4NAGH2murhkzFCiP6A4BoLQsTgEusYx0J8Q8iOMZA+lnVw6dQiIhW6aNSZQFAyECqZkzipJ2u+kDqH1bD94vLvv3ffu07sTxuPxJzgxGo0Eng5mUBVM+9ZRhQZqgjqAbduVXdYaUHHJv5qIdbvXRaXB6XRCEAQIwxC73Q7tdhtpmt5NJpPH2k84Ho+YTqeYzWbYbrfFnIqZ9DAcDp9qDXzfx2azQavVwmAwgGVZME0TsiwzuU8mfa7BcrksuNfrQdM0iKKITqcDwzDKJXyD/X5fsKqqZ3lFUcrhJdeg2WwWnCTJWX69XpfDD66BrusFu66L1WqFw+GA+XwOz/PKJffcY+x2u4jjGFEUwXGcH4dEyMuJUPWY2CViuy4WC2RZBkmSkOf5K0k37DcRrulOvAnsQfw16PguiJ4Jt4SYDK4a+EdQAWvfJLwQ3lnuS4ABAMfktPVY3F2lAAAAAElFTkSuQmCC",
                "WindowsXP.PageLast20.png": "data:image/png;base64,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",
                "Office2007Black.Loading.gif": "data:image/gif;base64,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",
                "CollapsingMinus.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAADAFBMVEXJycHFw7u/wbm7u7W1ta2vraenp5+foZmZmZPv7+7u7u3u7ezt7ezu7uyRkYvFxb3s7Ovr6+rq6+nq6unp6uiJi4PBwbno6ejn5+bm5uXo6Ofp6eiBgXu9u7N5eXO3ta/q6upvb2uxr6ns6+rk5OPi4uHj4+Ll5eRnZ2Opq6Ph4eBfX1mjo53l5uXg4N9VVVGdm5WVk42LjYeFg397e3VzcW1paWNfX1tNTUkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAAAAAACYAAAAGPUJqwH1kHcBABgAAABUEeQAAHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOgDhCQAAAD1sAAMABgFIQAAAUcSKAAAdlR2UCobACAfmAABA4QAAACEI/j11AMjABh3COAI36UAAHcAAAAAAAAAAAD2WABGABh2UcYY9ljGoAAAdlEAAAB1//84iAaIBnIGcjgAABgAAAAwAAAAGPYAAEAAAAAcAAAAGPYAAAAAAAAAAAAAAAAAAAAADAACAAAAAAAAAQH2lAAAABgAAADoAAD6eAAAA40cBS2ZAAAAAWJLR0T/pQfyxQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAGpJREFUeNolxlcSgjAABcAnIF1MFDBFwJJEDSh2vf/JmIH9WgAzx/XmfhACUZykaRIvMiwJXa1zSkmBcsMY50LmW1QyGIkazW4q3+NwlFxpo05nXIhkympjWnRUXM3NWt3j/ni+3p/vr/8Pb64JoOz29nAAAAAASUVORK5CYII=",
                "Office2003.PageLast20.png": "data:image/png;base64,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",
                "CollapsingPlus.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAADAFBMVEXJycHFw7u/wbm7u7W1ta2vraenp5+foZmZmZPv7+7u7u3u7ezt7ezu7uyRkYvFxb3s7Ovr6+rq6+mJi4PBwbno6ejn5+bo6Ofp6ejp6uiBgXu9u7N5eXO3ta/q6urm5uVvb2uxr6ns6+rj4+Lk5OPl5eRnZ2Opq6Pi4uFfX1mjo53l5uXg4N/h4eBVVVGdm5WVk42LjYeFg397e3VzcW1paWNfX1tNTUkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAAAAAACYAAAAGPUJqwH1kHcBABgAAABUEeQAAHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAOgDhEgAAAD1sAALABgAjAAAA5YSKAAAdlR2UCobACAfmAABA4QAAACESKD11AMjABh3COAI36UAAHcAAAAAAAAAAAD2WABGABh2UcYY9ljGoAAAdlEAAAAE//+rtAG0BnUGdasAABgAAAAwAAAAGPYAAEAAAAAcAAAAGPYAAAAAAAAAAAAAAAAAAAAADAACAAAAAAAAAQH2lAAAABgAAADoAABbUAAAB0nTNs/UAAAAAWJLR0T/pQfyxQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAGpJREFUeNolytsaQkAYRuFP6Lc3I5lpYzuKiPa5/zvjqXX0HiwA2ko3zDVZgO24nuc6foCQ8YiIc7ZBvE0SIiF3exwk/RJHpNmfeYGykjmRqk9nNEwub6vUBR0XvboOQzvidn88X+/Pd5xmRQgIsvQGdUsAAAAASUVORK5CYII=",
                "CheckBox.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC7SURBVHjaYvz//z8DqYBxcGnq7u4uAlK9QDy3tLQ0hYkIDfZAqguILwBxLkiMmZubm/PYsWNHgXg2EP+3trY+iKRBGkjtBeK/QOwKtOUV3HlASVEg+xgQqwBxPVCyCSjGBmQfBmIzIA4Fiq3B8BNQkQpUI8iAeiCWA+JkIJ4I1FCAMyCAGkGmHgBiTqjQcSB2AGr6hTf0gBoDgdQ6IH4NxCZADY8wQgekCR13dXVVALEHNjkQpl+KAAgwAKCmeGnxQrElAAAAAElFTkSuQmCC",
                "BookmarksjoinBottom.png": "data:image/png;base64,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",
                "RemoveItemButton.png": "data:image/png;base64,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//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AgwWs3gAAAE5JREFUeNqkjsEJwDAMA8+hO9YjVrtkgUJ2UR8pOPm29zBYoLPjZqfxLbBrNoCQwYqqpGwlAPGe7SM3qcc0wDF3JddZDish5dXx+/WVZwBwlxrSVfhUbAAAAABJRU5ErkJggg==",
                "DateTimeButton.png": "data:image/png;base64,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////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AEo/IKkAAACNSURBVHjaZI7BCoQwDESn1bhru4LQ//9EhYpC2mqyB6vgbm7zeBPGbHheCxxyJ9ugBWRcgQyZhUIDi/8K8MG0IFsagNNYZy1FRy2XkWMxCOrYn2CSIgHRCVVjKSYoHHuuP7KMcd/Fp64CG9QxE3epVmx04pFe/bsaQ8/KTKxKgNkgx7WSrmE/0+0DfgcAPbo9DqZGpIwAAAAASUVORK5CYII=",
                "SimpleGray.Loading.gif": "data:image/gif;base64,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",
                "SendEmail.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAD7SURBVHjaYvz//z8DLtDd3c0JpCYDMRsQZ5WWln5BV8OIywCgZhUgtdrExMSAiYmJ4dSpU3eA/AigIWcJGgDUHAKk5js6OvIADQCLXb58mWHHjh2/gMwaoCHdWA0AagQ5tV1dXb3IwMCAQU5ODsXgjx8/glzCcOHChR1AbhzQoNdwA4CaQapXGBsbW9rZ2TGwsLDgDJujR48yHDt27AXIEMauri7coQgFLs7OWMX37N3LALYG6BR8McFgaGSE3wAQWH7wDoaCSHsVDLEPeV5gWmDSNjDNgk8xMYBkF8BsxjCAbi7AaQBNXQCKSopcAEwnjHgNwGcDIQAQYABQWmVYCvm5cQAAAABJRU5ErkJggg==",
                "ZoomOnePage.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAADAFBMVEX///+Kioq49hj///9NgrimwNsY81hiEAACdNkAAAAAAADzlACUABh02dAAAAAACAAAAAAAAAAAAEwACABgAAp3H6gY9jDzZABEABgAOgBXAFwAbwBrAHIAXABvAEYAcgBWACAAaQB3AGUAZQBcAHIAMQAzADIAXABvAFoAbwBPAG0AbgBQAGUAYQBlAGcALgBuAHAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAAAAAACYAAAAGPUfqwH1kHcBABgAAACTEeQAAHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAK4As6wAAAD1sAAWABgB5QAABJ4SKAAAdpN2jyobACCf6AABALMAAACzrOj11AAjABh3HuAe36UAAHcAAAAAAAAAAAD2WABGABh2kMYY9ljGoAAAdpAAAADo///TAAUAAjcCN9MAABgAAAAwAAAAGPYAAEAAAAAcAAAAGPYAAAAAAAAAAAAAAAAAAAAADAACAAAAAAAAAQH2lAAAABgAAACuAAAv6AAnMJIqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA0SURBVHjaY2BEBQwMjMxgwAKh4AIsLCwoAiwsUBGEFmZkLawwQFMV2NyB7lIUv6D7Fh0AAGjKAnyhnaeFAAAAAElFTkSuQmCC",
                "Bookmarksempty.png": "data:image/png;base64,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",
                "SinglePage.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAB9SURBVHjaYixbPt2egYGhC4jNGIgHp4C4DIgPsgCJFUAswUAaMIPqk2SBaeZgZWNoDE4iqLN8xQwYE6yPiYFCwIJNcPnBOxhikfYqxBuAS/GoCwarC6iSkJ4CsfSP37+Qkykx4CnMBSlA/IJEi19A9YFdsAOUq8j1AkCAAQDiLiK1dsl6lQAAAABJRU5ErkJggg==",
                "Office2010Blue.PageNext20.png": "data:image/png;base64,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",
                "SimpleGray.ZoomPageWidth20.png": "data:image/png;base64,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",
                "WindowsXP.Loading.gif": "data:image/gif;base64,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",
                "ZoomOnePage20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUeNrsk8EKwDAIQzX1/794zK23Magad1wDpYfIa1Gj7m4ickguv48mNQABe94rnSBgUoGChKVQNGChj0LxexAaQW0BzKap3R7S2sA/AK2x2KGPwuI68xg6aYh8NCP2KXrK/HwCBwHN2jAuAQYAzJkVLcPbxCsAAAAASUVORK5CYII=",
                "Office2010Blue.ZoomOnePage20.png": "data:image/png;base64,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",
                "SaveText.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACVSURBVHjaYuzq6trLwMDgxEAe2McANOA/CCMDGB+dRpaHYSaYUd3d3Sj0sWPHGEpLS8E0NnkYYMLlNisrK7BmEI0PMOGTPHr0KMFAYAT5g4ESsG3btv/o4Mf6Jf+JASC9LCBDHjx4iGKoJBYxXABsgIKCPIrgzwtHMMSwgevXrzGMumAwuIARmBi2A9keZKbDHQABBgABE7tHj/RgRQAAAABJRU5ErkJggg==",
                "PrevPage.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABaSURBVHjaYvz//z8DJYCRUgMYQAYQg30at//HJs5EjCW+TTtwOpOJEs0EDSCkGa8BxGjGaQCxmnEasLnOg5EiA0gxBG8gEmMIwWgkaAilKZFxwDMTxQYABBgAlEaAOxX1tRYAAAAASUVORK5CYII=",
                "Office2003.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "Office2007Blue.PageFirst20.png": "data:image/png;base64,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",
                "Office2007Black.ZoomPageWidth20.png": "data:image/png;base64,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",
                "Office2007Blue.ZoomOnePage20.png": "data:image/png;base64,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",
                "ArrowDownBlue.png": "data:image/png;base64,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",
                "WindowsXP.SelectedItem.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNpiNMo+ykAuYGKgAIxqpoXms1OsgIgczRBtxjnHiNKMbA8enUDAiDWFITsSl06czoZrwKMTCFhwSeDXNprChphmgAADAHiYFoh8fAnfAAAAAElFTkSuQmCC",
                "AboutInfo.png": "data:image/png;base64,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",
                "PrintWithPreview.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALJJREFUeNpi/P//PwMyKCoqQhXABIx9fX1wDgs2FcgK0AzHEGNioBBQbABjYWFhGpAGYWMQ/7aAG8EwUP2wC6TmLBDPYoFqNEZWsLnOA6du36YdMCZITxrIBf8p8sJ/9HgkMvTh0YjkJDiIsldhOP9sN0NKSQuD2tOneA1nsdBRYKjyV8WQiACGaxu7I0M1NaIRlLBwJK6zlKQDeDSSHPBUTYnkuIABIze2bbxNdjoACDAAnPk0mb+5vDsAAAAASUVORK5CYII=",
                "Office2010Silver.PageLast20.png": "data:image/png;base64,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",
                "Pin.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZFN0U3M0JGQjQwOTExRTc5MDNGOUMwNDQyQzAwOTA4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZFN0U3M0MwQjQwOTExRTc5MDNGOUMwNDQyQzAwOTA4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkU3RTczQkRCNDA5MTFFNzkwM0Y5QzA0NDJDMDA5MDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkU3RTczQkVCNDA5MTFFNzkwM0Y5QzA0NDJDMDA5MDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6cAssNAAADWklEQVR42lxTS28bVRg9984rccavuHbi2LhJnZAHIakEG8yjagGpoqi7IrFogfBYIBoEiFUW/AGkwgIhxCJFgFghFqEFsaAigEjTNKJqaao2jzZpYseJE8dmPOOZuXe4Y1e8rjR3dKV7zv2+c85Hvri2B5sDngfs2IBKgWNJF1EVMBmgibP4kdOX1c9GI3xlYth9b7FKGhhKABn/WjJpEs2UJKgSASEEMc3DlbL02PkN+eS5uwzJVm9lLMvO+iSO9z8CSXyuABXF0xo3oUgSQkTCQBv9eTSM1Zs1NTN+yZv07471srO3KuS/BF5jJwjJHMSyENUUWHWCbxZ2J9buunq8Kwsz2IY356xJUSxeEJXI/wAB3T9RD5QTpMIaNgye+Hh+96uLeetIXHWhbi5BiWehKi14fZZMlmzcR517AoYVD3kTg9crUi4geZjfMJ6YmN7+Y65gHcmEZAQDAWxVTdQ3l2ujYXZHF2rfrFBF9lUX4tGpdenMhQIZl2QJV0rq9Ws3KkMV00YmHAAXL5gOQ8WWcObJ0KlIjH87u80PPNXBF+jhDoZcnKFgIrtWo9DgYtnUhvSuXsR1DU7dariRFx6/dDD6+Vgu8TXx3HpM9RYMV3Qc0YQchPDne7xnX8zyT9edFmiEIaTrCKb6oCgKbherOJhpW/rg6Y5T3HRhMw9VlzS0ozWbwbBdJBQH7z/MXnsuaXyyamkwbQdqSwBuLIu+hL765TP7Hg+Jfo2agzbZawSpkZ26WUNIcB1Ot6OysRR9Of/doGHncJ4+gpRnw5VbMTLYv7NPt/OLu04jLZ0twEiEN0ikd95+C8FwO3a28rFfLvxwda+4Nnys054yEiNTv+5ouaTqYLFKO2sufiIUt6+WJRF5Ak26V4EeiqBcKrbP/HjucrlU6EqmBma1/UPH3+gSOqi29uECPZ0OcDwU46upViDohwzNOdhzRBLLpc3g3PT3l3a3C/s70z0z2YHhR/9kMkzLxiu9ZHx+W4oeT7OVE91suWQ2hfOtr4puftsSBDd+v/hRcf3OgXRP/3R3/4OHKOFwayYMJgQzKF7tYyePiuncE5H2QyccFblAc4L9SpjjsO77h9/N9D1wyO/Jtpq++yW64oboHRWnCfYBPli4+Hf8/xJgAJS6fJTAW61vAAAAAElFTkSuQmCC",
                "SaveOds.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGESURBVHjaYuxYr7eXgYHBiYE8sI/ZJUJ8IYhloBDCEO+wnOHrjzcMLz5cYygPuMigImHPwAiEIL6NRiZDpM1cMP/RmzMwAxSZYCx3g1qGzg36YBoGFh6IhPOtNTLA8kduTEdxAhMDhQBuwM4LzWBng2gYAHkJxj96YwZYHuQVZMAIDMT/FDlh27Zt/8kFIL0s2Ay9ef8ww/PXtxikxTQZVBWsiAsDZKAqb8UgLqzMsGRTIcPC9Tl4DcDqAiYmZgZNZQeGqoy9DJW9+gyVffoMwgKyDEoyJgyu1jkMvNwimAY8fX2R4fCFKQxPXp1jkBEzYvCyamLg45ZkiPbrZ2Bj5WAQFVRg+PjlJcPuo1MYgtwacAfip68v/8/ZGPi/db76/9uP9///8u0NaYHIyyXGEO2xgKFvmRnD/M2hYDFhfkUGJWlbBlezKgZuTmHCYcDBxsfgCfQCN4cIg7SoPlgM5LWD5yeCvUbQABAwVAtD4avLu4IxtljYsX37dg8y0+EOgAADACOF3MeMIgy6AAAAAElFTkSuQmCC",
                "Print.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACtSURBVHjaYiwqKmJAA/8Z8ANGZA4LNhW9vb1YdRYXF2OIMTFQCCg2AOQFeyDuAmIzkNP9mneCMVYg4Mawqdb9P9Qrp4C4DGTACiCWgKkBKiDWcjOQXhZkzdgCiQCQGPhApEosPAViaTIT0lOQASlAPB85MEHAt2kHisrNdR7oml+A9IIMAKmUhNkMtOU/Dg0w1zEiu4QFl9+IcAGmAcgm49KAHg4sxOY6XAAgwABqSjFfY2wW+AAAAABJRU5ErkJggg==",
                "ArrowDownGray.png": "data:image/png;base64,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",
                "Save.png": "data:image/png;base64,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",
                "SaveWord2007.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEZSURBVHjaYgybdX0vAwODEwN5YB+ztm/OQhBrZaoGg7E8DwMjkH3vzQ+GUGMRhnofOQZGoMC1598w+FCgyIRsXOX6BwypthJgdoiRCEP47BtgGpm/+uwbFCcwMVAIUAxoD1RgmH34BZi95twbsLdANDIf5BVkwAgMxP8UOWHbtm3/yQUgvSwwg16+fE2SxeLiomCaBV2AVEDQBSCDX37+zSDOywqmediYGLjZmcFsol2Qt+IuOAZatz5icNYUAIu9+vSbQYZYF4DAnhsf4LZuvPgOHOXnjhDpAl1pboZlp16D6ctPvzFYKvKCvcRAiguURDiABnCBDUqNUMYMRHwuAOUPUODBXAOzHZwSgYlhO5D2IDMd7gAIMADVqqMLRV88lAAAAABJRU5ErkJggg==",
                "PagePrevious20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGxJREFUeNq0lFsKgDAMBFvx3AqeuzAiKBRrFOu4kL90yGObDCRTQ5LVAywmsJgVYraMOUPMpWBuGdM22D6cu529fb0gJlqVPcJ3d8Ar6GfgGaoAa6gGPKAqsIaGOeNLUyxPCfmPi61e7VWAAQA2mY1xnkY8UwAAAABJRU5ErkJggg==",
                "PrintPdf.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARNJREFUeNpi/P//PwMyKCoqQhXABIx9fX1wDgs2FcgK0AzHEGNioBBQbABjYWFhGpAGYWMQ/7aAG8EwUP2wC6TmLBDPYoFqBGGG7E2bgOQmRnQdynfuwNm+TTtgTJCeNMaWtdfx2lgdpIE18FBiAaQIBP6+fs3wrqeHQbSzE8xvXXeD9ED89eAB+bHALCrKwMTNTb4Bv27eZGBkZ2f4tGIFRsLCkbjOohjwbf9+BpGqKobf9+8zfD91ioHt22d8lsOjEQ6+nznD8OflSwYmfn6GLzt2MKi9AZofY4qRDjBiART6n5YtY+D182PgAWIYuAKMBX8CYQA24G1HBwOHoSGKZnwAIzfOtk6F8HDEO76EBBBgALdIW6xGfnkkAAAAAElFTkSuQmCC",
                "SimpleGray.PageLast20.png": "data:image/png;base64,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",
                "WindowsXP.ZoomOnePage20.png": "data:image/png;base64,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",
                "WindowsXP.PageNext20.png": "data:image/png;base64,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",
                "Office2010Blue.ZoomPageWidth20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAGJJREFUeNpiYGBgYGagHmBhGAW0AcXFxf/JVcNEjmH41DKRaxguPYzYJHp7exlJNQymh5Fcl2EDvb29jIzUMgzFy1R1IU3CkBxDcallQncyOd6kaU4ZoYCaVQATAAAA//8DAOW+OIHGrpVgAAAAAElFTkSuQmCC",
                "Office2010Silver.ZoomPageWidth20.png": "data:image/png;base64,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",
                "LastPage.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABeSURBVHjaYvz//z8DJYCJgUKAYoBv0w6szgGJwzBBF+AyhCQvkGIIzjAg1hC8gUiMIQRjgZAhBA3YXOfBSLYBhDTjNYAYzTgNIFYzVgNI0YxhAKmaQYBxwHMjQIABANL8JauSyptCAAAAAElFTkSuQmCC",
                "Office2007Silver.ZoomPageWidth20.png": "data:image/png;base64,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",
                "MsgFormWarning.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHSSURBVHjaYnze58YwkICFAr18QJwJxJxAPB2IX9LTAcxA/BGJXw/EQkD8nlSDmMh0gCAWMQVyDCLHAaxA/BqL+Dkg5qeHA6TwyOnS2gEcQPwAj/xhIBahpQOIiWdjWjmAB4ivE6FuBxBL0MIBmiSotaG2A0Cp+xRKVhBXZRDLXMsgUbiTgUPNDl39aiCWpqYDjDBSo6odAxMHD5Rti02PG7UcACrh9qELMkItBxvCwYtN3zwgVqSGA6yxCf7/8YUYD/pR6gAxIN6ETeLfz89w9p+Pz3HpnwDEapQ4wJUYbxIIjZugGCPHAXJAvIQYS5FDg9QiGp8DfPGZiBzsRKSHi9AqnGgHKAPxFLzB/vMLMWkAGZgQ6wCQ2B1Cpv1D8jWyY/CAE0DMRowD1Ikx7S/Q1zD8++VtYkteS4zyBK1RCoqnPzRuh4Kq9J+4QkCXgfbAAVcUgBqo54lulyFVRmxyhqQ4AFRds2NzgD4ppnDqesErIx7TcFJDwR3dASDfnyHFhO+Xt8Fzwjcgm0SwEZYjWHClTkIAlPJfTQ+mJC2AEiITE7Rnc2iAemZ8IAcEDmDXMBLkgLgBdEAIC7RjCWtCMdLR8r0gu1mgKXLjQAUBQIABADuVakpgId2AAAAAAElFTkSuQmCC",
                "Design.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAADAFBMVEX///+AgIC49hhNgrj////AwMDnjkZiEAACdesAAAAAAADzlACUABh169AAAAAACAAAAAAAAAAAADoACABgAAp28KgY9jDzZABEABgAOgBXAFwAbwBrAHIAXABvAEYAcgBWACAAaQB3AGUAZQBcAHIARABzAGUAaQBuAGcALgBuAHAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAAAAAACYAAAAGPXwqwH1kHYBABgAAABwEeQAAHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQADAANToAAAD1sAAKABgDgwAABTYSKAAAdnB2bCobACAiQAABADUAAAA1Ogj11AAjABh27+Dv36UAAHYAAAAAAAAAAAD2WABGABh2bcYY9ljGoAAAdm0AAAAA//9DEAYQAm8Cb0MAABgAAAAwAAAAGPYAAEAAAAAcAAAAGPYAAAAAAAAAAAAAAAAAAAAADAACAAAAAAAAAQH2lAAAABgAAAAwAAB7SABTW8N7AAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAJcEhZcwAALiMAAC4jAXilP3YAAABQSURBVHjabc5LDgAhCANQmxbvf+SRTwiawbjgidWFNYpnYwhJhxbRBS2kaiLFj5UZIYz5CgWs+3zF1H1kWOVNoOwB6//suw7oWg6z9s+Vpz7MJAIcoKu7VQAAAABJRU5ErkJggg==",
                "SimpleGray.PageNext20.png": "data:image/png;base64,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",
                "Office2010Blue.PageFirst20.png": "data:image/png;base64,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",
                "Office2007Silver.Loading.gif": "data:image/gif;base64,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",
                "CloseForm.png": "data:image/png;base64,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",
                "Bookmarksfolder.png": "data:image/png;base64,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////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFYmD64AAABESURBVHjaYnzAgAqY0PgMLAw/GBgYOJAFWBgZ/iKr+MfIwMD8+99/KJ+DBWISE9xIDEPpI8DyC5XPwcKBpoIR3fuAAQAswAj/CTKo6wAAAABJRU5ErkJggg==",
                "Office2007Blue.ZoomPageWidth20.png": "data:image/png;base64,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",
                "Parameters.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAADAFBMVEX///+49hiKior////Q3uxZir1NgriUtNSsxd7n7vbb5vGIrNBxm8agvNkAAAAACAAAAAAAAAAAAEoACABgAAp28KgY9jDzZABEABgAOgBXAFwAbwBrAHIAXABvAEYAcgBWACAAaQB3AGUAZQBcAHIAMQAzADIAXABhAFAAcgBtAGEAZQBlAHQAcgAuAHMAcABnAG4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAAAAAACYAAAAGPXwqwH1kHYBABgAAABwEeQAAHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYACQAKIoAAAD1sAAXABgBWwAABPUSKAAAdnB2bCobACB9UAABACgAAAAoilD11AAjABh27+Dv36UAAHYAAAAAAAAAAAD2WABGABh2bcYY9ljGoAAAdm0AAAAU//841AbUBhMGEzgAABgAAAAwAAAAGPYAAEAAAAAcAAAAGPYAAAAAAAAAAAAAAAAAAAAADAACAAAAAAAAAQH2lAAAABgAAAAkAAA2OABkQTPwAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAALiMAAC4jAXilP3YAAABESURBVHjaY2CAACYmBhTABEZwSQSACDDDuMwwATjAI8DCysaOIsDBwsnKiaqFixvVDC4eNEN5OQjYwszBTkgFigCK5wD9yAIeIKOH+wAAAABJRU5ErkJggg==",
                "Bookmarks.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABmSURBVHjaYvz//z8DJYAFRBQXF5NsSm9vLyPcAKgA0ZqBFsLZTAwUAhZ0Ab/mnQw14UYMLSvPYSjeVOtO2ACYImyKiXIBIZegG4zTAGJdMghdQPdYoF5CQk6epABGSnMjxV4ACDAAoZcyOOj0dmgAAAAASUVORK5CYII=",
                "Windows7.ZoomOnePage20.png": "data:image/png;base64,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",
                "ZoomPageWidth.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAADAFBMVEX///+Kioq49hj///+mwNtNgrgY81hiEAACdNkAAAAAAADzlACUABh02dAAAAAACAAAAAAAAAAAAFAACABgAAp3H6gY9jDzZABEABgAOgBXAFwAbwBrAHIAXABvAEYAcgBWACAAaQB3AGUAZQBcAHIAMQAzADIAXABvAFoAbwBQAG0AYQBlAGcAVwBkAGkAdAAuAGgAcABnAG4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAAAAAACYAAAAGPUfqwH1kHcBABgAAACTEeQAAHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIALUAukMAAAD1sAAMABgC+QAABKsSKAAAdpN2jyobACAvyAABALoAAAC6Q0D11AAjABh3HuAe36UAAHcAAAAAAAAAAAD2WABGABh2kMYY9ljGoAAAdpAAAAA///9XCAIIBdwF3FcAABgAAAAwAAAAGPYAAEAAAAAcAAAAGPYAAAAAAAAAAAAAAAAAAAAADAACAAAAAAAAAQH2lAAAABgAAAC1AAD+wAD3WKoHAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA4SURBVHjaY2BEBQwMjMzIAJcACwTgVsEKVcEKFWBlhUoDGSABVla4ClZWrCowzSDHHWgC6L5FBwBoOQJ7wAJr3QAAAABJRU5ErkJggg==",
                "Edit.png": "data:image/png;base64,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",
                "WindowsXP.PagePrevious20.png": "data:image/png;base64,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",
                "GuidButton.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAEZ0FNQQAAsY58+1GTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMAUExURf//////zP//mf//Zv//M///AP/M///MzP/Mmf/MZv/MM//MAP+Z//+ZzP+Zmf+ZZv+ZM/+ZAP9m//9mzP9mmf9mZv9mM/9mAP8z//8zzP8zmf8zZv8zM/8zAP8A//8AzP8Amf8AZv8AM/8AAMz//8z/zMz/mcz/Zsz/M8z/AMzM/8zMzMzMmczMZszMM8zMAMyZ/8yZzMyZmcyZZsyZM8yZAMxm/8xmzMxmmcxmZsxmM8xmAMwz/8wzzMwzmcwzZswzM8wzAMwA/8wAzMwAmcwAZswAM8wAAJn//5n/zJn/mZn/Zpn/M5n/AJnM/5nMzJnMmZnMZpnMM5nMAJmZ/5mZzJmZmZmZZpmZM5mZAJlm/5lmzJlmmZlmZplmM5lmAJkz/5kzzJkzmZkzZpkzM5kzAJkA/5kAzJkAmZkAZpkAM5kAAGb//2b/zGb/mWb/Zmb/M2b/AGbM/2bMzGbMmWbMZmbMM2bMAGaZ/2aZzGaZmWaZZmaZM2aZAGZm/2ZmzGZmmWZmZmZmM2ZmAGYz/2YzzGYzmWYzZmYzM2YzAGYA/2YAzGYAmWYAZmYAM2YAADP//zP/zDP/mTP/ZjP/MzP/ADPM/zPMzDPMmTPMZjPMMzPMADOZ/zOZzDOZmTOZZjOZMzOZADNm/zNmzDNmmTNmZjNmMzNmADMz/zMzzDMzmTMzZjMzMzMzADMA/zMAzDMAmTMAZjMAMzMAAAD//wD/zAD/mQD/ZgD/MwD/AADM/wDMzADMmQDMZgDMMwDMAACZ/wCZzACZmQCZZgCZMwCZAABm/wBmzABmmQBmZgBmMwBmAAAz/wAzzAAzmQAzZgAzMwAzAAAA/wAAzAAAmQAAZgAAMwAAAHx6fP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEYfrPMAAADadFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AgwWs3gAAACFJREFUeNpivMmACpgYhrbAfySMXQUjEsZQAQAAAP//AwCocAP5dkyIIAAAAABJRU5ErkJggg==",
                "Windows7.PagePrevious20.png": "data:image/png;base64,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",
                "DesignToolbarLeftHalf.png": "data:image/png;base64,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",
                "Office2007Silver.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "Office2007Black.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "Office2010Blue.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "Office2003.Loading.gif": "data:image/gif;base64,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",
                "Office2010Black.ZoomOnePage20.png": "data:image/png;base64,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",
                "Office2007Blue.SelectedItem.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWJJREFUeNqslb1OwzAQgC/RDR4YbmDI0KESGyzpG1SCgfeAR2JF4hEYGUDqiFiaBQZUJAaGDB08dLghUjjbSePUCSlNT3F8558v5/PFjsqyhK/lfQlHkLPZTRSt3u5KShKgyfUomP55Ap3ngLxhB9ssvG4lhf9hgzDmkK8eBFhIR12s8M4kU+se25PCVVgr7a/v6n01tJxgZvGQ2TVwLuVbxk4PC+IJO6D10MD0Y/Wx7EBgalyEuIndfoLnz7aEImFAJcDWRgzDbPw/rjp63cbG+3ryN6yRXg/riT54COaAWKcAeTUFgBBG4ZKFhY1BLjmxGlzpxeetvLRrt23k2dTYLqvlQX+jkuaP6dIRQtuukLZh85YM0EqhLh0ptP1x2yXjazN4MHeo2zYMCUmsDJLT8YdhIQylzGljYpK5uIwRzKq9naSg1wrodDHugF3PgaYMkbkC3pcvR7kCLmaX0a8AAwDOipVbk6mXKwAAAABJRU5ErkJggg==",
                "ArrowUp.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAMAAACgjTZZAAADAFBMVEX///////+HiYmJiovw8fCAgYCLjIz09PTt7e3k5OR3d3eNjY729vbw8PHp6eng4ODY2Nlub26Ojo6Ki4uGhoeBgYF7fHx2dnZwcHFqa2tmZmYAbwBrAHIAXAByAEEAcgB3AG8AVQAuAHAAcABnAG4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAugCRAWAAAAMlAAAkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAugAAACABYAC0A5EAGPUJOL4BOHeaALp3CTi5jlcAAHcAAAAAugCRAWgAAAMAAAAAAAAbAAAAAACYAAAAGPUJqwFbCHdQA5YAugFUEeQAAHZQALoAugEAAAAAAABQAAAAugEAAAIAAAJSAABSAAAAAEUAAAAAAAAAAAAAAAMAAABFAAAAAAAAAFIAAADvAAC/AFAAAEUAAABwAAADl4gAAAAAAAAAAAAAAAC6AXwAAABQAAAAugEAAAAAAABoAAADkQGWWwgAAANFAAAAAAAAAAAAAAAAAQAAAAAAAij1sADUAQEAGPRUEeT3DHbVABh3DXGps7P//gCa//93CTgJNJIAAHdoAAADkQEI36UAAHcAAAAAAAAAAAD2WABGABh2UcYY9ljGoAAAdlEAAAB9///4DAIMBnwGfPgAABgAAAAwAAAAGPYAAEAAAAAcAAAAGPYAAAAAAAAAAAAAAAAAAAAADAACAAAAAAAAAQH2lAAAABgAAAC6AAA0iAACoQoxAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAsSURBVHjaY2AAAiYGKGBmYYUw2Ng5OLlADG4eXj5+AUEGBiFhEVExcQlJKQAPUAFfavqkCgAAAABJRU5ErkJggg==",
                "SaveOdt.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFtSURBVHjaYnTNrdvLwMDgxEAe2McE0+xlZcKwa1IjmAYBEHtqaToKHwvtxAQzqiDCl8Etrx5Mw0B290wUPjbARIp7QbaCLIG5AgRYYIwJKzaDJUA0DIC8AOMv3n6AQZifB8zeduwMw9uPX8BsRmAg/megBGzbtu0/uQCklwWboaev3mR48Owlg7KMJIORpirpgQjSJCchxtA6dxlDw4xFeA1gBDnD09MTq+S3Hz8ZfHJrGLg42BkkRYUYdFUUGWJ8XBiE+HjB8tu3b0fEwu3HzxhW7T3KcPPhUwZ1eWmG9EB3BhF+PoaqlEgGDjY2BmlxEYY37z8yLNmyhyEvKhB3IL79+Pl/6eT5/0MqO/+fvX7n/4fPX0gLRCE+Hob65AiGhOZJDBXTIP6XAjrfQFWJIdHHiYGfhxtFPdZY4ObkAHsBpFhNVhIsdgPotRW7j4DFCRoAAi6m+ih8c201MEYHIAN2AEPTg8x0uAMgwAAQguAgzbf9ngAAAABJRU5ErkJggg==",
                "Windows7.PageLast20.png": "data:image/png;base64,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",
                "Open.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADWSURBVHjaYvz//z8DJYCJgULA8vpwcxqQnokuLmpb+5coE14davrz+8vz/zDw+c72/0CxvUAsCvIeIczCyMLOzMItATeQR9mDgZGF0+nH8zOvgK7DZa8A0IUfwU7FJsstbw/G2MCHiwsYfn96rAtkHsEw4PenJwxf7u5g+PPlOSGfH4a5DiUWvj7cT4xmZDALbsDvjw8Zfn94QGosLoYb8PXRIVI13weFA9gAkM3k2A4PAzJsB4FlEAP+/wP7n0RwHYhvgg34//c3ObbvhjEYBzw3AgQYANdMfHsVRg02AAAAAElFTkSuQmCC",
                "SimpleGray.PageFirst20.png": "data:image/png;base64,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",
                "ArrowDown.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAMAAACgjTZZAAADAFBMVEX///9mZmZqa2twcHF2dnZ7fHyBgYGGhoeKi4uOjo7///9ub27Y2Nng4ODp6enw8PH29vaNjY53d3fk5OTt7e309PSLjIyAgYDw8fCJiouHiYkAbwBrAHIAXAByAEEAcgB3AG8ARAB3AG8AbgBwAC4AbgAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAAAAAACYAAAAGPUJqwH1kHcBABgAAABUEeQAAHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAL8AwsEAAAD1sAAEABgCtAAAAIkSKAAAdlR2UCobACCv0AABAMIAAADCwSD11AAjABh3COAI36UAAHcAAAAAAAAAAAD2WABGABh2UcYY9ljGoAAAdlEAAAAw///w4ALgAjACMPAAABgAAAAwAAAAGPYAAEAAAAAcAAAAGPYAAAAAAAAAAAAAAAAAAAAADAACAAAAAAAAAQH2lAAAABgAAAC/AADYiAB/Y8jCAAAAAXRSTlMAQObYZgAAAAFiS0dECfHZpewAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAtSURBVHjaY2BkYmZhZWPn4GRg4Obh5eMXEGQAAiFhEVExBjAQl5BkgAIpEAEAI5sBViE2gUcAAAAASUVORK5CYII=",
                "Office2007Black.PageLast20.png": "data:image/png;base64,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",
                "DropDownButton.png": "data:image/png;base64,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//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AgwWs3gAAACpJREFUeNpivMmACpgY6CHAAqH+MzAwMDAiqWCE8eFaGKF8hBmMtHQYYACNOgIA+vDCDAAAAABJRU5ErkJggg==",
                "ArrowRight.png": "data:image/png;base64,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",
                "MsgFormInfo.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI3SURBVHjaxJddKARRFMd3B1uKiJSkrZWQ8vGgfSJFHtja8qAtosQjxbuPePSmeFGilBSRWKSoLSUbSUr5qH3ypHxEbWFb/7udy1hm594xdk792mm6O+c/55x77hl7y/C6zUpLFVyXBzqBG1SA8l/WXIBzEAQL4M4MAU2gB7QCh87acsIHJoAfzNCvpika9/PBNtilBzokI5sCvGATHGlETDMCpeTYmchDlSvb1ucpiV1P+a9sZ6FHraUsbcegC6zoRSCH3typ94rMeUFOeoxBb5ne8nSwBBr0BMwBl1CMFfvXQxThtKyCYi0B7ZQ3IZveurY9vLzGmNy4Ev1bFlgmMTGzq/rAKahO0vbvoq36WYRNMs79I/U/7nnGAzICxsAiiCgqAcLGnHGH7/ZMIxFgdVarroEGw600+vx57UhLkfmrTy2g1IzEvr1HZJa7uQBWmRlmCIhGpZZXcAGvFh2EL3wXhMETRcJAEWQZFRBS18C5BREIqgUELBBwoBawkGTnYT4ncAGXYC2JAuap7r6dBS4aHvKMtGKJlsyqn53ft/EDCavKZrCntyMk+3689XPnv80DJyQi9E+hH6XwJ5wJD0ElmKRiMcNuQBsYFx1KWZ4GQCGFbIcXjYRFaKt1U85XZKZibvds5qS0ZINc0Ei7RsuGQBHVVx2FPCI7licStA9qaKDQarHCNaQYzClLUQfo/WudKH8srlmKxqVVAvg3YU389jL741QkJd10qIWtEKDu8VL2IcAACNZ58Bjd0bIAAAAASUVORK5CYII=",
                "Office2010Blue.SelectedItem.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ5JREFUeNpi/P//P8Plrc3/P1xbx0AJENAKYtD1rmVkubyt5f+H6+sZbKNdKTLw8LL1DJcZGf8zHuox+m8b7shADXB45X4GFgZGRgaGv/+pYiDILIiB/6lqIBMDw79/VDKQiRYuZAK5EIuBOCxhVJ8Ckb6ViynJRKIL4YbdzMGuBx6G2OQ0kDSjGwZm4ApDJkassiCNIENgBqEYhstEoFlMYBfiAMgGoBqGL5aZcBgIDaP/N7LxRhL2SAFhqiYbNmYQj0LT/kNcyMjGzsDAzEwV80BmsYA5zExUMRAEIGHIwkS1MGTilnVjOLrnBsTbFGCQGSCzGEFVwPmDk/9/ebKbIsfxyLgyGNrnMgIEGABSj14mjAo5NQAAAABJRU5ErkJggg==",
                "Office2007Blue.PagePrevious20.png": "data:image/png;base64,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",
                "SimpleGray.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "SaveDocument.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACDSURBVHjaYuzq6trLwMDgxEACKC0tZQTR3d3dDAxAA/4TC2BqoTRILwMTAxkA6AKQ7f9BbBZkieUH7+DUFGmvwqCjrQ1xNgL8J8kL2LxEtAvQXQMDLLgkiAWjLiDgApCB2FxFsguQxdENJOgCQmFD0AWEwoURmBy3A2kPBvLADoAAAwDoGaQ5APlR2wAAAABJRU5ErkJggg==",
                "Office2010Black.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "BookmarksplusBottom.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAEZ0FNQQAAsY58+1GTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAB5SURBVHja1FJBCsAgDItjD+hT/YH6A5/aH2SnDRXUzTlhhaBSSGMakEQN3nu2+ikMScyordUMIdyeMk3R/lSBc850iQDAWlsliTGOeSQic8x+vTURudSk99LL7CwDqKoXAGTvVkC//dpZqjqWo96KlyR7jUf/JjoGAOZKjJty6U75AAAAAElFTkSuQmCC",
                "PageLast20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUeNq0lMEOwCAIQ3Ufzn6cpNthh4UICqEkPTU8RZAJYHTGNZrDA+omT386vqEySgbjDcFoChhdBmNswJhDdAPv+Lj36y2kn2yI8dXmZoCy8MtAcfwSUAI/DZSNnwJ6sBIwgoXAydjYrVv7EWAATa7gzbF5xKQAAAAASUVORK5CYII=",
                "Office2010Black.Loading.gif": "data:image/gif;base64,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",
                "Office2007Blue.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "Bookmarksroot.png": "data:image/png;base64,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//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AzF4BsAAAAGJJREFUeNqUjkEKgDAMBCch6jeqov9/j0KpfYSXCnqwaHsSh73sMpBI3DvhQTGsf3sA4whuzX26HUeJcoRqMBrHVBlpw/scQGIaiyuKkpafhiEzAzmAcn4Yxrm05acSqbkGAGenLiT/9JfeAAAAAElFTkSuQmCC",
                "Zoom.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFrSURBVHjaYvz//z8DJYAFmVNcXKwIpEqB2BuI5YD4KRDvAOLu3t7em9gMYIS5AKjZA0itBmIeXl5eBkFBQYbPnz8zvH//HiT9C4jjgIasxGoAULMEkH2VnZ1dKCQkhMHIyAiu4MaNGwwrVqwAGfYFyNUDGnIf2QAmKN0OxELR0dEomkFAQ0ODISUlhYGJiYkHyO1FdwHMAD+Qk7W1tbEGlIyMDIOSkhJYHdC1bCgGAAU4QbaLi4vjDW0xMTEQxQzEoigGAP30HUh/gQYWTgCV/wvEr7F5YffLly8Zbt26hVXz8+fPYXIHgRb+wmZAMcgVy5YtY7h79y6G5gULFjD8/QuynOEevnQQCKQWgdKBoqIiAyhM3rx5w3D//n2QZpAiRqieDqArKjEMgBoCSn2NQGwDxCpADIrz40C8AIjnA7E0uiGMxOYFoOEgAw+gG8JISmbCYkgZI6m5Ec2QNYzkZGdoWIFy7EqAAAMAObWTUmudGf4AAAAASUVORK5CYII=",
                "Office2010Black.ZoomPageWidth20.png": "data:image/png;base64,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",
                "Office2007Silver.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "Office2003.ZoomOnePage20.png": "data:image/png;base64,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",
                "FullScreen.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABhSURBVHjaYvz//z8DJYClu7ubbBNKS0sZWaAMkjUDLYa4ACaQs/gW0ZqnxKrB2UwMFAIWdIFWPzUUfvWmW6QZQEgDyS4gZPgwcAH1ohE5cZBsACxZkgMYKc2NFIcBQIABAGIsIfw8AuswAAAAAElFTkSuQmCC",
                "Office2010Black.PageLast20.png": "data:image/png;base64,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",
                "DesignToolbarMiddleHalf.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAfCAIAAABCnIs2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACNJREFUeNpiPHbsGAMDA+P///+BFBMDGAxpiuX48eNACiDAAIavB+NtvG1NAAAAAElFTkSuQmCC",
                "SimpleGray.PagePrevious20.png": "data:image/png;base64,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",
                "Office2007Black.PageFirst20.png": "data:image/png;base64,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",
                "About.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAEZ0FNQQAAsY58+1GTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABVSURBVHjaYvz//z8DJYCJgUJAsQEs2AQrKiow/NXR0cFIlAuwacYnjtMLHR0djLhsxesFYjQRHYjIziY6DEjRTJVoZKQ0JbIMfS8MfGYCAAAA//8DAFqXIrQgTn22AAAAAElFTkSuQmCC",
                "WindowsXP.ZoomPageWidth20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAGJJREFUeNpiYGBgYGagHmBhGAW0AcXFxf/JVcNEjmH41DKRaxguPYzYJHp7exlJNQymh5Fcl2EDvb29jIzUMgzFy1R1IU3CkBxDcallQncyOd6kaU4ZoYCaVQATAAAA//8DAOW+OIHGrpVgAAAAAElFTkSuQmCC",
                "Office2007Blue.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "Office2007Silver.PagePrevious20.png": "data:image/png;base64,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",
                "SaveXps.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFOSURBVHjapFLLTsJQFJxbUSRl0ZIYA42PpXFhTNAPgETjgh9hp1+iK90bv6ElUVkbhZW6cAEJwRSKRo1Ca21L7a25WBosBCdp5txzOnOnJyXLx5VLAHlMhzLHxI1iFmGmz8F2xj9TZr0A8hyrjiotf0iZYeWkiv2ttF9TpjPaC2JgwF5gApaCGTJhKAFiwcPhjTpkELyNCYMJKYi3RBf/gSzL7rSgWm7cBXbfxbXaxV1HHzmPRQnvnwycP/bw/NnH7hI/mYHlCW894VVLR6Pr4OHdwroYh2a60QZUWHszcdHU0TEctHUbVe0DWUlE+4tAMEYbDHbAEYK11DyKGyn0nD7KNQ0ZIYkXm0CzCJrGmAQz5JcLq0nUXwWc7aSR8BqyauK0bky+xJzEY3MhAT7241qQ4l7NRX9CGOLc8Ci3OPtngpKiKHtT/oelbwEGAGxRw6UIK4iWAAAAAElFTkSuQmCC",
                "WindowsXP.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "Office2007Blue.PageNext20.png": "data:image/png;base64,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",
                "Office2010Silver.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "Office2007Black.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "Windows7.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "Office2010Silver.ZoomOnePage20.png": "data:image/png;base64,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",
                "ArrowUpBlue.png": "data:image/png;base64,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",
                "Windows7.PageNext20.png": "data:image/png;base64,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",
                "SaveExcel.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADQSURBVHjaYuxYr7eXgYHBiYE8sI8JpjnBcg8DNhoGDGTjwGJo4k4sMNaFJ4vAkiAaGzCQiQPLXXiMKs+ErgBEYwMLjrtgdRkTMgfddGQng2iYJciAERiI/xkoACx67B0M1tY2WCXfvXvHoKAgD+e/fPmaQVxcFM7fvn07qhfIcgGI4HnZj1WSB4gfPIhHEXvw4CGmAUzswlgN+PfzLV4vXL9+jUpeANmEC6A7GasXvogXkhUL1PPC9+8/cCoA2YqPDzJgx7lzZzzIdMAOgAADAKPbYKCcZy3ZAAAAAElFTkSuQmCC",
                "SaveImage.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFrSURBVHjaYnyat2svAwODEwN5YB8TTLPURFcGGC0Qrglmg2iYOJeVDINoiTmcDwVOLNiMBSn+sPI6mIYBkGHP8ndjqGXCZgBIIcgmbBrQXIDdAGwA5CKQF9ABIzAQ/zNQArZt2/afXADSi+KFf7/+MtzfeIHh88O3DB9uvmQ4lLuC4eH2K3D5+5suMuxLWQSmsYbB6/OPGB5uu8JwffZhsEHcItwMH26/gsuz733FoOinz/B5+13sBgjrSTPwyAoyCCqKMAgpiTKw8nAwqEWYwuV/OouBbef1VIaLoaSDu2vPMzAxMkIMM5Fn+PL0PcPFvt0MwgayDKpAg0C2gzDOaHxx/C7D1xcfGX58/sHwBOh3Zj4Ohl9ffjK8vfIUZySguMCwxI3h99efDO+uPGN4e+ExgwrI1gBDBiYWJuIM4AP6HQS+v/rM8Pv7bwZ2QS4wxgew5gUZJw0wJgaADNixfft2DzLT4Q6AAAMAm/m3eTi1TEwAAAAASUVORK5CYII=",
                "Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABdSURBVHjaYvz//z9DY2PjfwYiQX19PSMyn4mBQgAzgBENo9uIVY6qLhjCBrCQqP4/MMrBAQuLelINYARqBqcbWHoYjQUqGMAAyo2k4oaGhv8wNknRCIt75HQAEGAAd+tKehdJM0YAAAAASUVORK5CYII=",
                "Bookmarksjoin.png": "data:image/png;base64,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",
                "Office2010Blue.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "ButtonArrowDown.png": "data:image/png;base64,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",
                "Office2007Silver.PageLast20.png": "data:image/png;base64,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",
                "Office2007Black.ZoomOnePage20.png": "data:image/png;base64,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",
                "Office2007Blue.PageLast20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAHNJREFUeNq81FEKwDAIA9DYK3sOrzz3tZ+t1ERkgX76sDTUMhPvmBmaWQuzubagu+dpyt3zOZ8VT0OtO1ebjIIdlHoUBaVfmUWl2jCo3MMKnS62DkaEjYEVJoEMRoMsRoEKVoIqdgQ7GADY7sf+tYdV7gEAIFcshExqOuYAAAAASUVORK5CYII=",
                "Office2003.Editor.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGISURBVHjalFLdSkJBEJ4Vb6S6KrotepSI7jpBkYSBGWEZqYlZJIFFCJlCddEfZDcJPUA+VCDkjRXWObvTzC5HM49pH+ews7Mz3/yK2OEdAgMRFJBIn1J8KlaBolORgNLcke/0/nS1J5AUfva9zW/CIOBInw7A2k6xpfMDtg02sjfEzpEQHooJrVtNX+iIHLlyngFbmSxc+CghLUQPrtnRKp/FBao2K8uVy7QIBAJWKFnUAfhvEbA/OxOs+8J2lQWu2ZyGgMFvwyNDVjRVgJ8BPBFOnaOLULzY07rVxN/gzn9JMpBoJkJYWD9BlsfGR63aS+1ZmjKEJ/NKooT1d8TXusRg7LQjg7lwDgfKQPiIXoiOjpumdt49CaQjwX6zoSEb4DhOF3lPguWtArpjosmDD3264/ORnNZXH/N6+3oSMHu5lIQPW0Kz2QRwBOSPU6AoiexRydj8VQLXF6HNM/uudHT+mdidfd8d6IeZpUz/KXhhNriv92ByasKaXtzl1PQedDXlv/gWYACo3RPdkUubNwAAAABJRU5ErkJggg==",
                "Office2010Black.PageNext20.png": "data:image/png;base64,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",
                "PageNext20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGpJREFUeNq0lEsOgDAIRFsPjhcneWriymgBw0wyu/Joy2cCo1PbaFYEdMUNXfFkFH+IoigoqoyibVD0Id3A/T3NOXoL++2n7CvmD9BWMVWgBedLwBBWAaZgWWAalgGWYJenYmO3bu1DgAEAvorJLZOTde4AAAAASUVORK5CYII=",
                "HelpIcon.png": "data:image/png;base64,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",
                "Windows7.ZoomPageWidth20.png": "data:image/png;base64,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",
                "Continuous.png": "data:image/png;base64,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",
                "PageFirst20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNq0lNsKgDAMQzfxuxX87kLUByHuIl6OgTyMwmFrs2ZJidSQYLWAYb5SkDcM8skieyhyKCKnLDI2InMoOtjz8wxsX69wmPfzpFpeP/kOsAX9DCyhCNChGPCAokCHVrXx5bZZeoX8x8ZGt/YqwACGc6IdhSEWUQAAAABJRU5ErkJggg==",
                "Office2010Black.PagePrevious20.png": "data:image/png;base64,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",
                "NewButtonWhite.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarZGxSsNQFIa/G0XFoVYI4uBwJ1FQbNXBjElbiiBYq0OSrUlDldIk3NyqfQhHtw4u7j6Bk6PgoPgEvoHi1MEhSHASwW/6zs/hcOAHo2LXnYZRhkGsVbvpSNfz5ewTM0wBQCfMUrvVOgCIkzjiJwI+XxEAz5t23WnwN+bDVGlgAmx3oywEUQH6FzrVIMaAGfRTDeIOMNVJuwbiASj1cn8BSkHub0BJuZ4P4gMwe67ngzEHmEHuK4Cpo0sNUEvSkTrrnWpZtSxL2t0kiOTxKNPRIJP7cZioNFEdHXWB/D8AFvPFdtORa1XL2lvnn3E9X+b2foQAxNJjkRWEQ3X+3YWx8/tc3Bgvw+EtTE+KbPcKbjZg4brIVqtQ3oL78RfCs0/+HAmzJwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAOklEQVR42mL8//8/AyWAiYFCwIJHDtlpjDRzwcAbwILDz/jCAyVMBpcXGEejEQMwDg0vAAAAAP//AwByMAcm2INWmwAAAABJRU5ErkJggg==",
                "Office2007Silver.SelectedItem.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWJJREFUeNqslb1OwzAQgC/RDR4YbmDI0KESGyzpG1SCgfeAR2JF4hEYGUDqiFiaBQZUJAaGDB08dLghUjjbSePUCSlNT3F8558v5/PFjsqyhK/lfQlHkLPZTRSt3u5KShKgyfUomP55Ap3ngLxhB9ssvG4lhf9hgzDmkK8eBFhIR12s8M4kU+se25PCVVgr7a/v6n01tJxgZvGQ2TVwLuVbxk4PC+IJO6D10MD0Y/Wx7EBgalyEuIndfoLnz7aEImFAJcDWRgzDbPw/rjp63cbG+3ryN6yRXg/riT54COaAWKcAeTUFgBBG4ZKFhY1BLjmxGlzpxeetvLRrt23k2dTYLqvlQX+jkuaP6dIRQtuukLZh85YM0EqhLh0ptP1x2yXjazN4MHeo2zYMCUmsDJLT8YdhIQylzGljYpK5uIwRzKq9naSg1wrodDHugF3PgaYMkbkC3pcvR7kCLmaX0a8AAwDOipVbk6mXKwAAAABJRU5ErkJggg==",
                "Office2007Black.PageNext20.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAGtJREFUeNq81MENwDAIA0DjlTMHM7sDtE2BWEXK9xRki5AE5xB/zlpr+31Jt8dTdLRyB6Vr/VEoFZTuoOhOn+5K2Ys9BjMzbOAbNgJ3WBv8wlpgBSuDVawEdjAAiJPOPV17ust9AQAA//8DAEAYM2rNs+tHAAAAAElFTkSuQmCC",
                "WindowsXP.Find.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG3SURBVHjapFM7SANBEH0XVBItchaipLIRwSpwWNlcJTYSS8toEQMWWoigCJ6NWKmVJKliFxsJWKjYnIWSIuDZRVTYQIh2bkDx/GWd3TPRGBvJcLfFm5k3b2dmNSEEWjFNHjWSxfW9vM/faVzc3OF4J6bVgiSuSfy6jJNEvI7LPN8vQmNpdhyl21IDWP2oGst/4A0K1pKnebjccAoc7J6jU3vC2f6y1oTjEefZFe0vBcZqPILopAnTDKP8/NaIR01MTJgou+/NCqyEnZeBsgK/9yrpfqCjO4BQsBe6DoWxAgOnQHZk1RW0KRoXxnw0DPiDcFgF6YwNO+egj1xDg8DWXASVF8ApVLBNPiopaiQ+ycJdjmCQkgtFODmqwkmJCyxMDyv+y6siGBE7DvN08+/JaSQ/SQkxxjzp1DAlkzgQ6unC6MgAlE8C8pN++vt1PXVxuDoj7y+kUbKwc0xYaUf0m1bDdkWtrPITkcjaTMxv2CI8ZglvCsQGup+sokbF+L820YcW7V8E7GvEsh81nXKMqSlrN+Y10AO7Au34+cji6wdY28zg4dWv9oR7cSk1hVZfY8s9+BRgAJpCCS+6h+a+AAAAAElFTkSuQmCC",
                "MsgFormError.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKpSURBVHjaYryR7MIwkICFBLWcQOwKxIFArAvEckAsCpV7AcRPgfgsEG8C4t1A/ItaDuAH4mogzgRiHhxqJKDYGIjTgPgjEE8E4m4g/oLPcCYCloMMuwfEpXgsx+XoOqjeKHIcwAbEc4B4JhALURDFoChaCsQTgJiZWAeALN8CxMlUTGv5QLwamyOwOWAaNLFRG4ASbzshB2RS2efoAJSWQnA5ABTXLXTI+hOQEzQTmutwJjguLSMG2aJOBmYu3JlBwM4brIYAkAbiHHQH8EATCl7LQbRMcRdWR4AsF48rgKslIirYkB3gBy3pMACHvCqKgSA+uiNgliM7WCqjFp8DhGAJHeYAb1wqfzy8zfB67RwMR8EcgW45CPx+/RxDDxbgjVwUG+BT+W77SkipEpyC4gj52mkMrKKSGA5+0lvG8PfbF0IOMEAOARVCqkGOQPcVBZbD7WSCxj0bMTqwOYJMy2H1BcHKiGgASg9M3Lwk6wM54DuxdbeQZzhKOkCPDlBuQY8WPOAjcgjcIcdy9OAm0RF3kB1wgVTLQXF+vyIWa8Ik0hEXkB2wFZcqUHbDZjkswYES5stFEzAcgSuqkMBWZAdsgqYFrKn7cV85nP/t2jmGh81ZKMH/4dBWFEeA1Dyb0Yw3Q0HbjQzMOUZKDNBECCpbbbCpBpVs3+9cZWDlF0ZxDLpD/354x8DEyoZTDRJoAuKDIAYjUrMcVD7fprAJRgwAtZ41YI1VJrRgqaFDe6AAuaWMXhBNB+K5NLS8D4jXEGoTZsESCJXBeiAuI6ZRCkqQPkC8gIqWTwHiUFDZRWy/AOSIRGhofKTAYlC6igPiXGyWE1MZgdKEEjTuvpNgMSiRtQKxPBAvxqeQkYTeMXrnVBEpy74G4ke06pzCwHeo4ZuomTIBAgwAJnDUiFcmQv8AAAAASUVORK5CYII=",
                "Office2010Black.SelectedItem.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ5JREFUeNpi/P//P8Plrc3/P1xbx0AJENAKYtD1rmVkubyt5f+H6+sZbKNdKTLw8LL1DJcZGf8zHuox+m8b7shADXB45X4GFgZGRgaGv/+pYiDILIiB/6lqIBMDw79/VDKQiRYuZAK5EIuBOCxhVJ8Ckb6ViynJRKIL4YbdzMGuBx6G2OQ0kDSjGwZm4ApDJkassiCNIENgBqEYhstEoFlMYBfiAMgGoBqGL5aZcBgIDaP/N7LxRhL2SAFhqiYbNmYQj0LT/kNcyMjGzsDAzEwV80BmsYA5zExUMRAEIGHIwkS1MGTilnVjOLrnBsTbFGCQGSCzGEFVwPmDk/9/ebKbIsfxyLgyGNrnMgIEGABSj14mjAo5NQAAAABJRU5ErkJggg==",
                "WindowsXP.PageFirst20.png": "data:image/png;base64,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",
                "Office2010Silver.PageFirst20.png": "data:image/png;base64,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",
                "GetFlashPlayer.gif": "data:image/gif;base64,R0lGODlhngAnALMAAAcHB////35+fkNDQ84gJ9vV1aCgoMw+Q8MnLYiIiLy7u2ZmZtx6feWcniIiIgAAACH5BAkAAA8ALAAAAACeACcAAAT+kMhJq7046827/2AojldgnmiqrmzrvnAsxyQ533iu73Qt8sCg0CUoGo0t32/IbPKO0KQS5KxaY9CjdDo5HDLXsBiVRbK4h0bB1AC3EnDFzSA3FeAJwxplgO8DfXkneAl/YWVFWzUMKW0YLAYDCQoJCyyFKgMDJwoOcAsAAieaCQKhJgMLCZomAHiGV4iiZzUHsAGOJSqRLIYDsAYCDnsKmycOBgEDsyYOcgN1AK1jKbKKIre4bikOLJqeygADyaMFAgkmxXwLBdIolcpyq9PUJ9a0I3UquRa7lgGUMP2aVsDYiQLdEKYzCBAaw4bhACBrpelhLETXPjBq5EWDCjj+6RI4M+AJjjQD/wZB67RG3YlILl9ughagoBwACnLWu7fCRgoGHT4yCyCtUk4Fa0CicFBxGcRRyQAYUhXPBEh3VmRp1RJgxMYTQIOmaPen6EOaBw22e1rQ2Ko686oivCmm1FaMJkaM/bDCgDhSqCqaEEYuwDkU4xQAWCyJj4PFKQcsdtVqMjond+5m+SPiwE8vXza0uJWtHjVzmo0YEtGgFwLRpmPvUJBaQOG8IDy3eO1Rtm8cwe7exv2h9W7Yv5PHCC5rOHEPpU3w3qa8eout+Drodo3cunehWS73/AALNGgOu/DIW4HpIJxkBW7rQRGw/fwUdAbxia8e4CsdmR3+0d542v20BGKqTEKUCp2I59c5m8RUlUql4DQhYgaNY8dMCcojiSnOxYCaai6Ql0JoVKSAFj0oqNINKrdJuGIASvEyIyDCEPOihjPWaJEMtBWhT3YaGHcCP3ypOCRWxyizhwApPYXKkEqpc+Mvh8HoUo+XocRDHyGmsMEBDNyCYooYarIGk4BY4uVglAH0lyYWDoJOQcnMqJBCdjjgTGBq0vjhQDxEh4IGpZ2J5iiTRKPiJH6h0FZDRxVDpWVTvrPSMCcsEFmjVkmiYT0ZbNdIDZksKemcEyGWE0NcKrlUU8wodSGNl3FKTakrIBlCqigwWYpMgKxBloxUipfphgdhYWVrrID8WAWvkoaFqqwnTOYKodMksNhEyL6jbETiZAmjVeJJxhiujO6KwXYFWOvDd/QGocF5XBBQ77465OsBvwDP4K9YARec0cD9GKywCgh3t/DCDff28MMRV2zxxQhHAAA7",
                "Bookmarksline.png": "data:image/png;base64,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",
                "Office2010Silver.SelectedItem.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ5JREFUeNpi/P//P8Plrc3/P1xbx0AJENAKYtD1rmVkubyt5f+H6+sZbKNdKTLw8LL1DJcZGf8zHuox+m8b7shADXB45X4GFgZGRgaGv/+pYiDILIiB/6lqIBMDw79/VDKQiRYuZAK5EIuBOCxhVJ8Ckb6ViynJRKIL4YbdzMGuBx6G2OQ0kDSjGwZm4ApDJkassiCNIENgBqEYhstEoFlMYBfiAMgGoBqGL5aZcBgIDaP/N7LxRhL2SAFhqiYbNmYQj0LT/kNcyMjGzsDAzEwV80BmsYA5zExUMRAEIGHIwkS1MGTilnVjOLrnBsTbFGCQGSCzGEFVwPmDk/9/ebKbIsfxyLgyGNrnMgIEGABSj14mjAo5NQAAAABJRU5ErkJggg==",
                "Office2010Silver.Loading.gif": "data:image/gif;base64,R0lGODlhEAAQAOZZAJKSkoCAgO3t7ezs7N3d3fj4+PHx8dvb2+fn5/r6+vT09L29veLi4srKyvn5+fv7+5ycnPz8/PLy8tfX17m5udTU1K2traioqP39/YaGhuTk5PDw8PPz85eXl9XV1aysrLi4uM3NzeHh4Y2Njbq6uvb29u/v74yMjNHR0Z2dnebm5tra2vX19cbGxurq6szMzN7e3sjIyKWlpcnJycvLy4eHh6mpqZiYmJWVlYSEhODg4Kenp6qqqrCwsLu7u4GBgb6+vujo6JOTk+np6dzc3J+fn7Kyst/f37e3t7S0tO7u7r+/v8HBwff39+Xl5bGxsZ6enuPj48fHx6SkpLa2ttnZ2f7+/uvr6////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgBZACwAAAAAEAAQAAAHmIBYgoMoGTUTg4lYVi4GVjUBASOKglYWAEJVGZEnlFguAKE8HicjBJ4KHaE+nooMRkwJrYIwOxcMrQUDAw42U1MWrQNXVwIXvx/CxAIiHxYIuQICslgqLSgPiRgIIhKDClThFYlDVeYOggLhVDRXMw0CGuZVJZUxVCADDVJSISwrVRhYGWTFQAEs+6S8wPLgYCsBL0JsoBQIACH5BAUKAFkALAAAAAAQABAAAAeggFiCgxMdNwSDiVhWAgpWNwAAKVgmKlaDViRTMkcdkRAVPwFFl1hKU6ggBxApDBABsAiCJReoLYk9sBkSgwhANA+JDkhTiFgaIBRBisxYJFRUC82KFNDS070LC1fYigMVRBGJVhwmBYNNMVJSMIkcV/DiWAbrUhMGKwccBvBXCYMepMwwcKBKFQIJBlzZoEiBAywFD2LBEGyaBAIEWDALBAAh+QQFCgBZACwAAAAAEAAQAAAHmoBYgoMwFzYMg4lYVgYlVjZTUxZYBi5Wg1YxVFROF5EfK0IAFpeUm1QtIh8WCDwAry6CBRSbKIk+rx0Kg1c0HhGJCUxPiFhXMw0CioMoORkTDVJSIcuLNQEBI9FSL9VWGdgnAi8hG9VYHicjBIISIggY54MOVfVD8oIl9VUaBQMDDs4xqLKCxYArV5SdK/AAy8GE+GQJEJBgWSAAIfkEBQoAWQAsAAAAABAAEAAAB6CAWIKDGhQkQYOJggoFViRUVAtYCgJWiR5SMVcUkAs6MlMklpNSpRUICwtXIFOtSoIODaVEiS2tFyWDGxNHEYkPNEAIggYrBxyKgxM4HQQHVVUEyVhWNwAAKc/R01Yd1xASBAQs01gHECkMggUmHKPrPRAVgxFX9siDSQEBPwOCCfauGEgkY18AHbquDEiQCEaOAFB8DXqAIZkEFe/KTQsEACH5BAUKAFkALAAAAAAQABAAAAebgFiCg1cNDQKDiYIFCVgNUlIhWCUGVokMVVUSj1IvKlRUMZZYBZlVIgIvIRstoFQGgg8HmQiJKKAUBYMsGi4YiREeNFeLAwMOioMwOxcMA1dXiMlWNlNTFs/RyVhWF9YfBQICjdsiHxa124IOPjwr6olLAABCJtsoORkTRvMAGtM1AgQYEQUHgA8RpmUQeAKLAhejknk4MYJAskAAIfkEBQoAWQAsAAAAABAAEAAAB6OAWIKDBgcHHIOJgg8RWAdVVQRYBQqKG1dXBY+RAzFSHoMPmFcmEgQELBVSq5VYGAOYiINEqw0OgwkGClaJEUcTG4rCgxogFEHDiVYkVFQLyYNWFM3P0IIICwtXghUQPQWJCS0gOoMDPwEBSYkzU1MyBoI66QEyEzgdBEDuU0OCVkUC5CBwAwCAFAh2TKGAIZoKCVY6GISApYQAXsMOQEjBQFggACH5BAUKAFkALAAAAAAQABAAAAeZgFiCgwUDAw6DiYoDV1cCWAkFiomMjhJVVQyTggUCAgkimFWSm4MImAcPpYMYLhosgig5GROlVzMNAjUBASOlDVJSIRm8J7/BLx4nIwSlAi8hG4IrPD6Igw8oLSqDJkIAAEuJFVTlCoIa4ABGMDsXDDTlVI9YVhYAOAw2U1MWAyBUpGAYZMWFAisX+H3AUsCAlVIiPlhAMCkQACH5BAUKAFkALAAAAAAQABAAAAehgFiCg4SFg1YqJoYRD4RWRQE/FYQFV1cbgwgBmxCEJpZXjVgSGZs9hByWAxiDBDJIDo4KBgmCEzgdBIaCBisHHDcAACm7WAdVVQQdwp27x8kHECkMxRIEBCyCOiAttYMRRBUDgwYyU1MzhDBSUjFNgkPnU0AaIBRBE+xSBoJWJFM7VJCgQmWBgRlSKlg5JKCEFQoEF2BxoKAYFgQLFlwxFAgAOw==",
                "MultiplePages.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACISURBVHjaYixbPt2egYGhC4jNGIgHp4C4DIgPsgCJFUAswUAaMIPqk2RB1twZkYGiqnzFDKxiUADWx4Ru9PKDd8CYkBgMsKALRNqrMBAjBgMD7wJGYDT+ZyAfMKK4gMRYYBiNBUQsPAHS0mTEwFMglgF5IQWIX5Co+QVUH9gLO0C5ityEABBgAK7WRrrRnAlbAAAAAElFTkSuQmCC",
                "Office2007Black.PagePrevious20.png": "data:image/png;base64,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",
                "Office2003.PagePrevious20.png": "data:image/png;base64,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",
                "Office2007Silver.PageNext20.png": "data:image/png;base64,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"
            }
        }, A.loc && this.collections.loc && (this.collections.loc = A.loc), this.controls = {}, this.controls.forms = {}, this.controls.head = document.getElementsByTagName("head")[0], this.controls.viewer = document.getElementById(this.options.viewerId), this.controls.mainPanel = document.getElementById(this.options.viewerId + "_JsViewerMainPanel"), this.controls.findHelper = {
            findLabels: []
        }, this.reportParams = {
            drillDownGuid: null,
            pageNumber: 0,
            pagesCount: 0,
            pagesWidth: 0,
            pagesHeight: 0,
            zoom: this.options.toolbar.zoom,
            viewMode: this.options.toolbar.viewMode,
            reportFileName: null,
            pagesArray: [],
            interactionCollapsingStates: null,
            bookmarksContent: null,
            editableParameters: null,
            drillDownParameters: []
        }, this.options.actions.getReport || (this.options.actions.getReport = this.options.actions.viewerEvent), this.options.actions.printReport || (this.options.actions.printReport = this.options.actions.viewerEvent), this.options.actions.openReport || (this.options.actions.openReport = this.options.actions.viewerEvent), this.options.actions.exportReport || (this.options.actions.exportReport = this.options.actions.viewerEvent), this.options.actions.interaction || (this.options.actions.interaction = this.options.actions.viewerEvent), this.options.requestStylesUrl) {
        var t = this.options.appearance.customStylesUrl;
        t || (t = this.options.requestStylesUrl.replace("{action}", this.options.actions.viewerEvent), t += t.indexOf("?") > 0 ? "&" : "?", t += "stiweb_component=Viewer&stiweb_action=Resource&stiweb_data=styles&stiweb_theme=" + this.options.theme, t += "&stiweb_cachemode=" + (this.options.server.useCacheForResources ? "ObjectSession" == this.options.server.cacheMode || "StringSession" == this.options.server.cacheMode ? "session" : "cache" : "none"), t += "&stiweb_version=" + this.options.shortProductVersion);
        var e = document.createElement("link");
        e.setAttribute("type", "text/css"), e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), this.controls.head.appendChild(e)
    }
    this.options.isMobileDevice ? this.InitializeMobile() : this.options.toolbar.showPinToolbarButton = !1, window.File && window.FileReader && window.FileList && window.Blob || (this.options.toolbar.showOpenButton = !1), this.InitializeJsViewer(), this.InitializeToolBar(), this.options.toolbar.showFindButton && this.InitializeFindPanel(), this.InitializeDrillDownPanel(), this.InitializeDisabledPanels(), this.InitializeAboutPanel(), this.InitializeReportPanel(), this.InitializeProcessImage(), this.InitializeDatePicker(), this.InitializeToolTip(), "Separated" == this.options.toolbar.displayMode && this.InitializeNavigatePanel(), this.options.toolbar.showSaveButton && this.options.toolbar.visible && this.InitializeSaveMenu(), this.options.toolbar.showSendEmailButton && this.options.toolbar.visible && this.InitializeSendEmailMenu(), this.options.toolbar.showPrintButton && this.options.toolbar.visible && this.InitializePrintMenu(), this.options.toolbar.showZoomButton && (this.options.toolbar.visible || "Separated" == this.options.toolbar.displayMode) && this.InitializeZoomMenu(), this.options.toolbar.showViewModeButton && this.options.toolbar.visible && this.InitializeViewModeMenu(), (this.options.exports.showExportDialog || this.options.email.showExportDialog) && this.InitializeExportForm(), this.options.toolbar.showSendEmailButton && this.options.email.showEmailDialog && this.options.toolbar.visible && this.InitializeSendEmailForm(), this.addHoverEventsToMenus();
    var o = this;
    this.addEvent(document, "mouseup", function(A) {
        o.DocumentMouseUp(A)
    }), this.addEvent(document, "mousemove", function(A) {
        o.DocumentMouseMove(A)
    }), document.all && !document.querySelector && alert("Your web browser is not supported by our application. Please upgrade your browser!"), this.controls.viewer.style.top = 0, this.controls.viewer.style.right = 0, this.controls.viewer.style.bottom = 0, this.controls.viewer.style.left = 0, this.options.appearance.userScrollbarsMode = this.options.appearance.scrollbarsMode, this.changeFullScreenMode(this.options.appearance.fullScreenMode)
}
StiJsViewer.prototype.createXMLHttp = function() {
    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
    if (window.ActiveXObject)
        for (var A = ["MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"], t = 0; t < A.length; t++) try {
            var e = new ActiveXObject(A[t]);
            return e
        } catch (A) {}
    throw new Error("Unable to create XMLHttp object.")
}, StiJsViewer.prototype.createPostParameters = function(A, t) {
    -1 != this.reportParams.zoom && -2 != this.reportParams.zoom || (this.reportParams.autoZoom = this.reportParams.zoom);
    var e = {
        viewerId: this.options.viewerId,
        routes: this.options.routes,
        formValues: this.options.formValues,
        clientGuid: this.options.clientGuid,
        drillDownGuid: this.reportParams.drillDownGuid,
        cacheMode: this.options.server.cacheMode,
        cacheTimeout: this.options.server.cacheTimeout,
        cacheItemPriority: this.options.server.cacheItemPriority,
        pageNumber: this.reportParams.pageNumber,
        zoom: -1 == this.reportParams.zoom || -2 == this.reportParams.zoom ? 100 : this.reportParams.zoom,
        viewMode: this.reportParams.viewMode,
        multiPageWidthCount: this.reportParams.multiPageWidthCount,
        multiPageHeightCount: this.reportParams.multiPageHeightCount,
        multiPageContainerWidth: this.reportParams.multiPageContainerWidth,
        multiPageContainerHeight: this.reportParams.multiPageContainerHeight,
        multiPageMargins: this.reportParams.multiPageMargins,
        showBookmarks: this.options.toolbar.showBookmarksButton,
        openLinksWindow: this.options.appearance.openLinksWindow,
        chartRenderType: this.options.appearance.chartRenderType,
        reportDisplayMode: this.options.appearance.reportDisplayMode,
        drillDownParameters: this.reportParams.drillDownParameters,
        editableParameters: this.reportParams.editableParameters,
        useRelativeUrls: this.options.server.useRelativeUrls,
        passQueryParametersForResources: this.options.server.passQueryParametersForResources,
        passQueryParametersToReport: this.options.server.passQueryParametersToReport,
        version: this.options.shortProductVersion
    };
    if (A)
        for (var o in A) e[o] = A[o];
    var i = {
        stiweb_component: "Viewer"
    };
    e.action && (i.stiweb_action = e.action, delete e.action), e.base64Data && (i.stiweb_data = e.base64Data, delete e.base64Data);
    var s = JSON.stringify(e);
    if (this.options.server.useCompression ? i.stiweb_packed_parameters = StiGZipHelper.pack(s) : i.stiweb_parameters = Base64.encode(s), t) return i;
    var n = "stiweb_component=" + i.stiweb_component + "&";
    return i.stiweb_action && (n += "stiweb_action=" + i.stiweb_action + "&"), i.stiweb_data && (n += "stiweb_data=" + encodeURIComponent(i.stiweb_data) + "&"), i.stiweb_parameters ? n += "stiweb_parameters=" + encodeURIComponent(i.stiweb_parameters) : n += "stiweb_packed_parameters=" + encodeURIComponent(i.stiweb_packed_parameters), n
}, StiJsViewer.prototype.postAjax = function(A, t, e) {
    this.controls.toolbar && t && "GetReport" == t.action && (this.controls.toolbar.setEnabled(!1), this.controls.navigatePanel && this.controls.navigatePanel.setEnabled(!1));
    var o = this,
        i = this.createXMLHttp();
    0 != o.options.server.requestTimeout && setTimeout(function() {
        i.readyState < 4 && i.abort()
    }, 1e3 * o.options.server.requestTimeout), i.open("POST", A, !0), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.responseType = "text", t && t.responseType && (i.responseType = t.responseType), i.onreadystatechange = function() {
        if (4 == i.readyState) {
            var A = 0;
            try {
                A = i.status
            } catch (A) {}
            0 == A ? e("ServerError:Timeout response from the server.", o) : 200 == A ? e(i.response ? i.response : i.responseText, o) : (o.options.server.showServerErrorPage && i.response && (o.controls.reportPanel.innerHTML = i.response), e("ServerError:" + A + " - " + i.statusText, o))
        }
    };
    var s = this.createPostParameters(t, !1);
    i.send(s)
}, StiJsViewer.prototype.postForm = function(A, t, e) {
    e || (e = document);
    var o = e.createElement("FORM");
    o.setAttribute("method", "POST"), o.setAttribute("action", A);
    var i = this.createPostParameters(t, !0);
    for (var s in i) {
        var n = e.createElement("INPUT");
        n.setAttribute("type", "hidden"), n.setAttribute("name", s), n.setAttribute("value", i[s]), o.appendChild(n)
    }
    e.body.appendChild(o), o.submit(), e.body.removeChild(o)
}, StiJsViewer.prototype.showError = function(A) {
    var t = "Error",
        e = null;
    if (null != A && "string" == typeof A && "ServerError:" == A.substr(0, 12) && (e = A.length <= 13 ? "An unknown error occurred (the server returned an empty value)." : A.substr(12)), null != A && !1 === A.success && A.type && A.text && (t = A.type, e = A.text), null != e) {
        return (this.controls.forms.errorMessageForm || this.InitializeErrorMessageForm()).show(e.replace("\n", "<br>"), t), !0
    }
    return !1
}, StiJsViewer.prototype.ShowAnimationVerticalMenu = function(A, t, e) {
    var o = A.innerContent.offsetTop;
    clearTimeout(A.animationTimer);
    var i = new Date,
        s = i.getTime(),
        n = Math.round((t - o) / ((Math.abs(e - s) + 1) / 30));
    Math.abs(n) > Math.abs(t - o) && (n = t - o), o += n;
    var a;
    s < e ? (a = o, A.animationTimer = setTimeout(function() {
        A.jsObject.ShowAnimationVerticalMenu(A, t, e)
    }, 30)) : (a = t, A.style.overflow = "visible", A.animationTimer = null), A.innerContent.style.top = a + "px"
}, StiJsViewer.prototype.ShowAnimationForm = function(A, t) {
    A.flag || (A.currentOpacity = 1, A.flag = !0), clearTimeout(A.animationTimer);
    var e = new Date,
        o = e.getTime(),
        i = Math.round((100 - A.currentOpacity) / ((Math.abs(t - o) + 1) / 30));
    Math.abs(i) > Math.abs(100 - A.currentOpacity) && (i = 100 - A.currentOpacity), A.currentOpacity = A.currentOpacity + i;
    var s;
    o < t ? (s = A.currentOpacity, A.animationTimer = setTimeout(function() {
        A.jsObject.ShowAnimationForm(A, t)
    }, 30)) : (s = 100, A.flag = !1, A.animationTimer = null), A.style.opacity = s / 100
}, StiJsViewer.prototype.ShowAnimationForScroll = function(A, t, e, o) {
    if (!A) return;
    var i = 0;
    A.jsObject.options.appearance.scrollbarsMode ? i = A.scrollTop : 0 == (i = document.documentElement.scrollTop) && (i = document.getElementsByTagName("BODY")[0].scrollTop), clearTimeout(A.jsObject.controls.reportPanel.scrollTimer), clearTimeout(A.animationTimer);
    var s = new Date,
        n = s.getTime(),
        a = Math.round((t - i) / ((Math.abs(e - n) + 1) / 30));
    Math.abs(a) > Math.abs(t - i) && (a = t - i), i += a;
    var r, l = this;
    n < e ? (r = i, A.animationTimer = setTimeout(function() {
        l.ShowAnimationForScroll(A, t, e, o)
    }, 30)) : (r = t, o && o()), A.jsObject.options.appearance.scrollbarsMode ? A.scrollTop = r : window.scrollTo(0, r)
}, StiJsViewer.prototype.easeInOutQuad = function(A) {
    return A < .5 ? 2 * A * A : -1 + (4 - 2 * A) * A
}, StiJsViewer.prototype.animation = function(A) {
    var t = (new Date).getTime();
    for (var e in window.this_.options.animations) {
        var o = window.this_.options.animations[e],
            i = o.el;
        if (o.duration <= t - o.start) {
            for (var s in o.animations) {
                var n = o.animations[s];
                i.style[n.style] = parseFloat(n.end) + n.postfix
            }
            n.finish && n.finish(), window.this_.options.animations.splice(e, 1)
        } else
            for (var e in o.animations) {
                var n = o.animations[e];
                i.style[n.style] = parseFloat(n.start) + window.this_.easeInOutQuad((t - parseFloat(o.start)) / o.duration) * (parseFloat(n.end) - parseFloat(n.start)) + n.postfix, console.log(i.style[n.style])
            }
    }
    window.this_.options.animations.length > 0 && window.requestAnimationFrame(window.this_.animation)
}, StiJsViewer.prototype.animate = function(A, t) {
    A.style.transitionDuration = t.duration + "ms";
    var e = "";
    for (var o in t.animations) e += ("" != e ? ", " : "") + (t.animations[o].property || t.animations[o].style);
    A.style.transitionProperty = e;
    for (var o in t.animations) {
        var i = t.animations[o];
        A.style[i.style] = i.end + i.postfix, i.finish && setTimeout(function() {
            i.finish()
        }, t.duration)
    }
    setTimeout(function() {
        A.style.transitionDuration = ""
    }, 2 * t.duration)
}, StiJsViewer.prototype.DocumentMouseUp = function(A) {
    this.options.formInDrag = !1
}, StiJsViewer.prototype.DocumentMouseMove = function(A) {
    this.options.formInDrag && this.options.formInDrag[4].move(A)
}, StiJsViewer.prototype.SetEditableMode = function(A) {
    this.options.editableMode = A, this.controls.buttons.Editor && this.controls.buttons.Editor.setSelected(A), A ? this.ShowAllEditableFields() : this.HideAllEditableFields()
}, StiJsViewer.prototype.ShowAllEditableFields = function() {
    this.options.editableFields = [];
    for (var A = this.controls.reportPanel.pages, t = 0; t < A.length; t++) {
        var e = A[t],
            o = e.getElementsByTagName("*");
        for (k = 0; k < o.length; k++) {
            var i = o[k].getAttribute("editable");
            if (i) {
                var s = i.split(";"),
                    n = {};
                n.compIndex = s[0], n.pageIndex = t.toString(), n.type = s[1], "CheckBox" == n.type ? this.ShowCheckBoxEditableField(o[k], n, s) : "Text" == n.type ? this.ShowTextEditableField(o[k], n) : "RichText" == n.type && this.ShowRichTextEditableField(o[k], n)
            }
        }
    }
}, StiJsViewer.prototype.HideAllEditableFields = function() {
    var A = this.options.editableFields;
    this.options.currentEditableTextArea && this.options.currentEditableTextArea.onblur();
    for (var t = 0; t < A.length; t++) A[t].className = A[t].className.replace(" stiEditableField stiEditableFieldSelected", ""), A[t].onclick = null, A[t].style.outline = ""
}, StiJsViewer.prototype.ShowCheckBoxEditableField = function(A, t, e) {
    if (!A.sizes) {
        var o = A.getElementsByTagName("IMG");
        0 == o.length && (o = A.getElementsByTagName("SVG"));
        var i = o.length > 0 ? o[0] : null;
        if (!i) return;
        A.sizes = {
            inPixels: i.offsetWidth > i.offsetHeight ? i.offsetHeight : i.offsetWidth,
            widthStyle: i.style.width,
            heightStyle: i.style.height
        }
    }
    "Google Chrome" != this.getNavigatorName() && (A.style.outline = "1px solid gray"), A.style.textAlign = "center", A.className += " stiEditableField stiEditableFieldSelected";
    var s = this.GetSvgCheckBox(e[3], e[5], this.StrToInt(e[6]), e[7], A.sizes.inPixels),
        n = this.GetSvgCheckBox(e[4], e[5], this.StrToInt(e[6]), e[7], A.sizes.inPixels);
    t.falseImage = "<div style='width:" + A.sizes.widthStyle + ";height:" + A.sizes.heightStyle + ";'>" + s + "</div>", t.trueImage = "<div style='width:" + A.sizes.widthStyle + ";height:" + A.sizes.heightStyle + ";'>" + n + "</div>", t.checked = "true" == e[2] || "True" == e[2], A.params = t, A.jsObject = this, A.hasChanged || (A.checked = t.checked, A.innerHTML = t.checked ? t.trueImage : t.falseImage), A.onclick = function() {
        this.checked = !this.checked, this.innerHTML = this.checked ? t.trueImage : t.falseImage, this.hasChanged = !0, this.jsObject.AddEditableParameters(this)
    }, this.options.editableFields.push(A)
}, StiJsViewer.prototype.ShowTextEditableField = function(A, t) {
    A.className += " stiEditableField stiEditableFieldSelected", "Google Chrome" != this.getNavigatorName() && (A.style.outline = "1px solid gray"), A.params = t, A.jsObject = this, A.onclick = function() {
        if (this.editMode) return;
        this.jsObject.options.currentEditableTextArea && this.jsObject.options.currentEditableTextArea.onblur(), this.editMode = !0;
        var t = document.createElement("textarea");
        t.jsObject = this.jsObject, t.style.width = this.offsetWidth - 5 + "px", t.style.height = this.offsetHeight - 5 + "px", t.style.maxWidth = this.offsetWidth - 5 + "px", t.style.maxHeight = this.offsetHeight - 5 + "px", t.className = this.className.replace(" stiEditableField stiEditableFieldSelected", "") + " stiEditableTextArea", t.style.border = "0px", t.value = this.innerHTML, this.appendChild(t), t.focus(), this.jsObject.options.currentEditableTextArea = t, t.onblur = function() {
            A.editMode = !1, A.innerHTML = this.value, this.jsObject.options.currentEditableTextArea = null, this.jsObject.AddEditableParameters(A)
        }
    }, this.options.editableFields.push(A)
}, StiJsViewer.prototype.ShowRichTextEditableField = function(A, t) {}, StiJsViewer.prototype.AddEditableParameters = function(A) {
    this.reportParams.editableParameters || (this.reportParams.editableParameters = {});
    var t = {};
    t.type = A.params.type, "CheckBox" == t.type && (t.checked = A.checked), "Text" == t.type && (t.text = A.innerHTML), this.reportParams.editableParameters[A.params.pageIndex] || (this.reportParams.editableParameters[A.params.pageIndex] = {}), this.reportParams.editableParameters[A.params.pageIndex][A.params.compIndex] = t
}, StiJsViewer.prototype.GetSvgCheckBox = function(A, t, e, o, i) {
    var s = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="' + i + 'px" height="' + i + 'px">',
        n = '<path stroke="' + t + '" stroke-width="' + e + '" fill="' + o + '" stroke-linecap="round" stroke-linejoin="round" transform="scale(' + 1 / (200 / i) + ')" d="',
        a = "";
    switch (A) {
        case "Cross":
            a = "m 62.567796,147.97593 c -0.55,-0.14223 -2.162828,-0.5128 -3.584062,-0.82348 -3.647667,-0.79738 -9.670499,-5.83775 -14.242817,-11.91949 l " + "-3.902341,-5.19058 5.080199,-1.13481 c 7.353071,-1.64253 13.640456,-5.71752 21.826811,-14.14646 l 7.208128,-7.42171 " + "-6.410736,-7.513354 c -11.773129,-13.79803 -14.346726,-23.01954 -8.627769,-30.91434 2.894109,-3.9952 11.818482,-12.369333 " + "13.182086,-12.369333 0.411356,0 1.063049,1.6875 1.448207,3.750003 0.980474,5.25038 6.456187,16.76587 10.936694,23 2.075266,2.8875 " + "3.991125,5.25 4.257464,5.25 0.266339,0 3.775242,-3.4875 7.797566,-7.75 16.397034,-17.37615 29.674184,-19.76481 38.280564,-6.88699 " + "4.15523,6.21753 4.18631,8.07093 0.14012,8.3552 -5.84833,0.41088 -17.16241,8.5342 -25.51465,18.319104 l -4.63153,5.42599 " + "4.87803,4.31529 c 6.55108,5.79533 18.8991,11.89272 25.84076,12.76002 3.0455,0.38051 5.53727,1.10582 5.53727,1.6118 0,2.7809 " + "-9.26611,14.41872 -13.03,16.36511 -7.96116,4.11687 -16.36991,0.71207 -32.764584,-13.26677 l -4.985957,-4.25125 -7.086791,8.97188 c " + "-3.897736,4.93454 -8.82141,10.1198 -10.9415,11.52281 -3.906121,2.58495 -8.86588,4.41339 -10.691162,3.94136 z";
            break;
        case "Check":
            a = "M 60.972125,162.49704 C 51.172676,136.72254 43.561975,123.37669 35.370344,117.6027 l -4.45827,-3.14248 2.75159,-2.89559 c 3.875121,-4.07793 " + "10.034743,-7.49924 14.902472,-8.27747 3.859874,-0.61709 4.458306,-0.38024 8.535897,3.37835 2.660692,2.45254 6.265525,7.60856 9.167226,13.11196 " + "2.630218,4.98849 4.910542,9.06999 5.067388,9.06999 0.156846,0 2.31372,-3.0375 4.793052,-6.75 C 96.259164,91.956015 129.68299,58.786374 157.56485,41.281603 l " + "8.84913,-5.555656 2.2633,2.631238 2.26329,2.631237 -7.76266,6.294183 C 139.859,66.19023 108.01682,105.51363 89.042715,138.83563 c -6.680477,11.73214 " + "-7.172359,12.31296 -15.090788,17.81963 -4.501873,3.13071 -9.044031,6.30443 -10.093684,7.05271 -1.708923,1.21826 -2.010678,1.09165 -2.886118,-1.21093 z";
            break;
        case "CrossRectangle":
            a = "m 24.152542,102.04237 0,-72.499996 74.5,0 74.499998,0 0,72.499996 0,72.5 -74.499998,0 -74.5,0 0,-72.5 z m 133.758188,0.25 -0.25819,-57.249996 " + "-58.999998,0 -59,0 -0.259695,55.999996 c -0.142833,30.8 -0.04446,56.5625 0.218615,57.25 0.375181,0.98048 13.207991,1.25 59.517885,1.25 l " + "59.039573,0 -0.25819,-57.25 z m -90.574091,43.18692 c -1.823747,-0.3912 -4.926397,-1.85716 -6.894778,-3.25768 -3.319254,-2.36169 -12.289319,-12.40741 " + "-12.289319,-13.76302 0,-0.32888 2.417494,-1.13897 5.372209,-1.80021 7.185193,-1.60797 13.747505,-5.93496 21.803114,-14.3763 l 6.675323,-6.99496 " + "-6.379078,-7.31436 C 64.931387,85.71231 61.643682,76.29465 65.471903,68.89169 67.054097,65.83207 78.56175,54.542374 80.098251,54.542374 c 0.45744,0 " + "1.146839,1.6875 1.531997,3.75 0.980474,5.250386 6.456187,16.765876 10.936694,22.999996 2.075266,2.8875 3.991125,5.25 4.257464,5.25 0.266339,0 " + "3.775244,-3.4875 7.797564,-7.75 16.39704,-17.376139 29.67419,-19.764806 38.28057,-6.88698 4.15523,6.21752 4.18631,8.07092 0.14012,8.35519 -5.82996,0.40959 " + "-18.23707,9.34942 -25.91566,18.67328 -3.90068,4.73647 -3.97203,4.95414 -2.2514,6.86861 3.19054,3.54997 13.7039,10.54321 18.97191,12.61967 2.83427,1.11716 " + "7.43737,2.33421 10.22912,2.70455 2.79175,0.37034 5.07591,0.9956 5.07591,1.38947 0,2.11419 -8.37504,13.20895 -11.6517,15.4355 -8.39423,5.70403 " + "-16.63203,2.77 -34.14289,-12.16054 l -4.985955,-4.25125 -7.086791,8.97188 c -9.722344,12.3085 -16.524852,16.55998 -23.948565,14.96754 z";
            break;
        case "CheckRectangle":
            a = "m 19.915254,103.5 0,-72.5 71.942245,0 71.942241,0 6.55727,-4.11139 6.55726,-4.11139 1.96722,2.36139 c 1.08197,1.298765 1.98219,2.644166 2.00049,2.98978 " + "0.0183,0.345615 -2.44173,2.53784 -5.46673,4.87161 l -5.5,4.243219 0,69.378391 0,69.37839 -74.999991,0 -75.000005,0 0,-72.5 z m 133.999996,3.87756 c " + "0,-49.33933 -0.12953,-53.514947 -1.62169,-52.276568 -2.78014,2.307312 -15.68408,17.90053 -24.32871,29.399008 -10.4919,13.955575 -23.47926,33.53736 " + "-29.514025,44.5 -4.457326,8.09707 -5.134776,8.80812 -14.291256,15 -5.28667,3.575 -9.903486,6.62471 -10.259592,6.77712 -0.356107,0.15242 -1.912439,-2.99758 " + "-3.458515,-7 -1.546077,-4.00241 -5.258394,-12.41205 -8.249593,-18.68809 -4.285436,-8.99155 -6.676569,-12.64898 -11.27758,-17.25 C 47.70282,104.62757 " + "44.364254,102 43.495254,102 c -2.798369,0 -1.704872,-1.66044 3.983717,-6.049158 5.593548,-4.31539 13.183139,-7.091307 16.801313,-6.145133 3.559412,0.930807 " + "9.408491,8.154973 13.919775,17.192241 l 4.46286,8.94025 4.54378,-6.83321 C 95.518219,96.605618 108.21371,81.688517 125.80695,63.75 L 143.21531,46 l " + "-53.650021,0 -53.650035,0 0,57.5 0,57.5 59.000005,0 58.999991,0 0,-53.62244 z";
            break;
        case "CrossCircle":
            a = "M 83.347458,173.13597 C 61.069754,168.04956 42.193415,152.8724 32.202285,132.01368 23.4014,113.63986 23.679644,89.965903 32.91889,71.042373 " + "41.881579,52.685283 60.867647,37.139882 80.847458,31.799452 c 10.235111,-2.735756 31.264662,-2.427393 40.964762,0.600679 26.18668,8.174684 " + "46.06876,28.926852 51.62012,53.879155 2.43666,10.952327 1.56754,28.058524 -1.98036,38.977594 -6.65679,20.48707 -25.64801,38.95163 -47.32647,46.01402 " + "-6.3909,2.08202 -10.18566,2.59644 -21.27805,2.88446 -9.033911,0.23456 -15.484931,-0.10267 -19.500002,-1.01939 z M 112.4138,158.45825 c 17.13137,-3.13002 " + "33.71724,-15.96081 41.41353,-32.03742 14.8975,-31.119027 -1.10807,-67.659584 -34.40232,-78.540141 -6.71328,-2.193899 -9.93541,-2.643501 " + "-19.07755,-2.661999 -9.354252,-0.01893 -12.16228,0.37753 -18.768532,2.649866 -17.155451,5.900919 -29.669426,17.531424 -36.438658,33.866137 " + "-2.152301,5.193678 -2.694658,8.35455 -3.070923,17.89744 -0.518057,13.139047 0.741843,19.201887 6.111644,29.410237 4.106815,7.80733 15.431893,19.09359 " + "23.36818,23.28808 12.061362,6.37467 27.138828,8.6356 40.864629,6.1278 z M 69.097458,133.41654 c -2.8875,-2.75881 -5.25,-5.35869 -5.25,-5.77751 " + "0,-0.41882 5.658529,-6.30954 12.57451,-13.0905 l 12.57451,-12.329 L 76.198053,89.392633 63.399628,76.565738 68.335951,71.554056 c 2.714978,-2.756426 " + "5.304859,-5.011683 5.75529,-5.011683 0.450432,0 6.574351,5.611554 13.608709,12.470121 l 12.78974,12.470119 4.42889,-4.553471 c 2.43588,-2.50441 " + "8.39186,-8.187924 13.23551,-12.630032 l 8.80663,-8.076559 5.34744,5.281006 5.34743,5.281007 -12.96155,12.557899 -12.96154,12.557897 13.13318,13.16027 " + "13.13319,13.16027 -5.18386,4.66074 c -2.85112,2.5634 -5.70472,4.66073 -6.34134,4.66073 -0.63661,0 -6.5434,-5.4 -13.12621,-12 -6.58281,-6.6 -12.3871,-12 " + "-12.89844,-12 -0.511329,0 -6.593363,5.60029 -13.515627,12.44509 l -12.585935,12.44508 -5.25,-5.016 z";
            break;
        case "DotCircle":
            a = "M 81.652542,170.5936 C 59.374838,165.50719 40.498499,150.33003 30.507369,129.47131 21.706484,111.09749 21.984728,87.42353 31.223974,68.5 " + "40.186663,50.14291 59.172731,34.597509 79.152542,29.257079 89.387653,26.521323 110.4172,26.829686 120.1173,29.857758 c 26.18668,8.174684 " + "46.06876,28.926852 51.62012,53.879152 2.43666,10.95233 1.56754,28.05853 -1.98036,38.9776 -6.65679,20.48707 -25.64801,38.95163 -47.32647,46.01402 " + "-6.3909,2.08202 -10.18566,2.59644 -21.27805,2.88446 -9.033907,0.23456 -15.484927,-0.10267 -19.499998,-1.01939 z m 29.999998,-15.098 c 20.68862,-4.34363 " + "38.01874,-20.45437 44.09844,-40.9956 2.36228,-7.9813 2.36228,-22.0187 0,-30 C 150.08927,65.371023 134.63549,50.297336 114.65254,44.412396 " + "106.5531,42.027127 90.741304,42.026386 82.695253,44.4109 62.460276,50.407701 46.686742,66.039241 41.6053,85.13096 c -1.948821,7.32201 -1.86506,23.11641 " + "0.158766,29.93754 8.730326,29.42481 38.97193,46.91812 69.888474,40.4271 z M 90.004747,122.6703 C 76.550209,117.63801 69.825047,101.82445 " + "75.898143,89.5 c 2.136718,-4.33615 7.147144,-9.356192 11.754399,-11.776953 5.578622,-2.931141 16.413098,-2.927504 22.052908,0.0074 18.03,9.382663 " + "19.07573,32.784373 1.91442,42.841563 -5.57282,3.26589 -15.830952,4.2617 -21.615123,2.09829 z";
            break;
        case "DotRectangle":
            a = "m 23.847458,101.19491 0,-72.499995 74.5,0 74.499992,0 0,72.499995 0,72.5 -74.499992,0 -74.5,0 0,-72.5 z m 133.999992,-0.008 0,-57.507925 " + "-59.249992,0.25793 -59.25,0.25793 -0.25819,57.249995 -0.258189,57.25 59.508189,0 59.508182,0 0,-57.50793 z m -94.320573,33.85402 c -0.37368,-0.37368 " + "-0.679419,-15.67942 -0.679419,-34.01275 l 0,-33.333335 35.513302,0 35.51329,0 -0.2633,33.749995 -0.2633,33.75 -34.570573,0.26275 c -19.013819,0.14452 " + "-34.876319,-0.043 -35.25,-0.41666 z";
            break;
        case "NoneCircle":
            a = "M 83.5,170.5936 C 61.222296,165.50719 42.345957,150.33003 32.354827,129.47131 23.553942,111.09749 23.832186,87.423523 33.071432,68.5 " + "42.034121,50.14291 61.020189,34.597509 81,29.257079 c 10.235111,-2.735756 31.26466,-2.427393 40.96476,0.600679 26.18668,8.174684 46.06876,28.926852 " + "51.62012,53.879155 2.43666,10.95232 1.56754,28.058527 -1.98036,38.977597 -6.65679,20.48707 -25.64801,38.95163 -47.32647,46.01402 -6.3909,2.08202 " + "-10.18566,2.59644 -21.27805,2.88446 -9.033909,0.23456 -15.484929,-0.10267 -19.5,-1.01939 z m 30,-15.098 c 20.68862,-4.34363 38.01874,-20.45437 " + "44.09844,-40.9956 2.36228,-7.9813 2.36228,-22.018707 0,-29.999997 C 151.93673,65.371023 136.48295,50.297336 116.5,44.412396 108.40056,42.027127 " + "92.588762,42.026386 84.542711,44.410896 64.307734,50.407697 48.5342,66.039237 43.452758,85.130959 c -1.948821,7.322 -1.86506,23.116411 " + "0.158766,29.937541 8.730326,29.42481 38.97193,46.91812 69.888476,40.4271 z";
            break;
        case "NoneRectangle":
            a = "m 24.152542,102.04237 0,-72.499997 74.5,0 74.500008,0 0,72.499997 0,72.5 -74.500008,0 -74.5,0 0,-72.5 z m 133.758198,0.25 " + "-0.25819,-57.249997 -59.000008,0 -59,0 -0.259695,55.999997 c -0.142833,30.8 -0.04446,56.5625 0.218615,57.25 0.375181,0.98048 " + "13.207991,1.25 59.517885,1.25 l 59.039583,0 -0.25819,-57.25 z";
            break
    }
    return s + n + a + '" /></svg>'
}, StiJsViewer.prototype.FindPosX = function(A, t, e) {
    var o = e ? 0 : this.GetScrollXOffset(A, t);
    if (A.offsetParent)
        while (A.className != t) {
            if (o += A.offsetLeft, !A.offsetParent) break;
            A = A.offsetParent
        } else A.x && (o += A.x);
    return o
}, StiJsViewer.prototype.FindPosY = function(A, t, e) {
    var o = e ? 0 : this.GetScrollYOffset(A, t);
    if (A.offsetParent)
        while (A.className != t) {
            if (o += A.offsetTop, !A.offsetParent) break;
            A = A.offsetParent
        } else A.y && (o += A.y);
    return o
}, StiJsViewer.prototype.GetScrollXOffset = function(A, t) {
    var e = 0;
    if (A.parentElement)
        while (A.className != t) {
            if ("scrollLeft" in A && (e -= A.scrollLeft), !A.parentElement) break;
            A = A.parentElement
        }
    return e
}, StiJsViewer.prototype.GetScrollYOffset = function(A, t) {
    var e = 0;
    if (A.parentElement)
        while (A.className != t) {
            if ("scrollTop" in A && (e -= A.scrollTop), !A.parentElement) break;
            A = A.parentElement
        }
    return e
}, StiJsViewer.prototype.scrollToAnchor = function(A) {
    for (var t = 0; t < document.anchors.length; t++)
        if (document.anchors[t].name == A) {
            var e = document.anchors[t],
                o = e.parentElement || e,
                i = this.FindPosY(e, this.options.appearance.scrollbarsMode ? "stiJsViewerReportPanel" : null, !0) - 2 * o.offsetHeight,
                s = new Date,
                n = s.getTime() + this.options.scrollDuration,
                a = this;
            this.ShowAnimationForScroll(this.controls.reportPanel, i, n, function() {
                var A = a.getPageFromAnchorElement(e),
                    t = a.FindPosY(o, "stiJsViewerReportPanel", !0),
                    i = A ? a.FindPosY(A, "stiJsViewerReportPanel", !0) : t;
                a.removeBookmarksLabel();
                var s = document.createElement("div");
                a.controls.bookmarksLabel = s, s.className = "stiJsViewerBookmarksLabel";
                var n = 20 * (a.reportParams.zoom / 100),
                    r = A ? A.offsetWidth - n - 6 : o.offsetWidth,
                    l = o.offsetHeight - 3;
                s.style.width = r + "px", s.style.height = l + "px";
                var h = A.margins ? a.StrToInt(A.margins[3]) : 0;
                s.style.marginLeft = n / 2 - h + "px";
                var p = A.margins ? a.StrToInt(A.margins[0]) : 0;
                s.style.marginTop = t - i - p - a.reportParams.zoom / 100 + "px", A.insertBefore(s, A.childNodes[0])
            });
            break
        }
}, StiJsViewer.prototype.isWholeWord = function(A, t) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",
        o = A.indexOf(t),
        i = A.substring(o - 1, o),
        s = A.substring(o + t.length, o + t.length + 1);
    return !("" != i && -1 != e.indexOf(i) || "" != s && -1 != e.indexOf(s))
}, StiJsViewer.prototype.goToFindedElement = function(A) {
    if (A && A.ownerElement) {
        var t = this.FindPosY(A.ownerElement, this.options.appearance.scrollbarsMode ? "stiJsViewerReportPanel" : null, !0) - A.ownerElement.offsetHeight - 50,
            e = new Date,
            o = e.getTime() + this.options.scrollDuration,
            i = this;
        this.ShowAnimationForScroll(this.controls.reportPanel, t, o, function() {})
    }
}, StiJsViewer.prototype.hideFindLabels = function() {
    for (var A = 0; A < this.controls.findHelper.findLabels.length; A++) this.controls.findHelper.findLabels[A].parentElement.removeChild(this.controls.findHelper.findLabels[A]);
    this.controls.findHelper.findLabels = [], this.options.findMode = !1
}, StiJsViewer.prototype.showFindLabels = function(A) {
    this.hideFindLabels(), this.options.findMode = !0, this.options.changeFind = !1, this.controls.findHelper.lastFindText = A;
    for (var t = this.controls.findPanel && this.controls.findPanel.controls.matchCase.isSelected, e = this.controls.findPanel && this.controls.findPanel.controls.matchWholeWord.isSelected, o = this.controls.reportPanel.pages, i = 0; i < o.length; i++) {
        var s = o[i],
            n = s.getElementsByTagName("*");
        for (k = 0; k < n.length; k++) {
            var a = n[k].innerHTML;
            if (a && 1 == n[k].childNodes.length && "#text" == n[k].childNodes[0].nodeName && (t || (a = a.toLowerCase(), A = A.toLowerCase()), a.indexOf(A) >= 0)) {
                if (e && !this.isWholeWord(a, A)) continue;
                var r = document.createElement("div");
                r.ownerElement = n[k], r.className = "stiJsViewerFindLabel", r.style.width = n[k].offsetWidth - 4 + "px";
                var l = n[k].offsetHeight - 4;
                r.style.height = l + "px", r.style.marginTop = -4 * (this.reportParams.zoom / 100) + "px", n[k].insertBefore(r, n[k].childNodes[0]), r.setSelected = function(A) {
                    this.isSelected = A, this.style.border = "2px solid " + (A ? "red" : "#8a8a8a")
                }, 0 == this.controls.findHelper.findLabels.length && r.setSelected(!0), this.controls.findHelper.findLabels.push(r)
            }
        }
    }
    this.controls.findHelper.findLabels.length > 0 && this.goToFindedElement(this.controls.findHelper.findLabels[0])
}, StiJsViewer.prototype.selectFindLabel = function(A) {
    var t = this.controls.findHelper.findLabels;
    if (0 == t.length) return;
    for (var e = 0, o = 0; o < t.length; o++)
        if (t[o].isSelected) {
            t[o].setSelected(!1), e = o;
            break
        }
        "Next" == A ? ++e > t.length - 1 && (e = 0) : --e < 0 && (e = t.length - 1), t[e].setSelected(!0), this.goToFindedElement(t[e])
}, StiJsViewer.prototype.scrollToPage = function(A) {
    var t = 0;
    for (i = 0; i < A; i++) t += this.controls.reportPanel.pages[i].offsetHeight + 20;
    this.options.appearance.scrollbarsMode || (t += this.FindPosY(this.controls.reportPanel, null, !0));
    var e = new Date,
        o = e.getTime() + this.options.scrollDuration;
    this.ShowAnimationForScroll(this.controls.reportPanel, t, o)
}, StiJsViewer.prototype.removeBookmarksLabel = function() {
    this.controls.bookmarksLabel && (this.controls.bookmarksLabel.parentElement.removeChild(this.controls.bookmarksLabel), this.controls.bookmarksLabel = null)
}, StiJsViewer.prototype.getPageFromAnchorElement = function(A) {
    var t = A;
    while (t.parentElement) {
        if (t.className && 0 == t.className.indexOf("stiJsViewerPage")) return t;
        t = t.parentElement
    }
    return t
}, StiJsViewer.prototype.isContainted = function(A, t) {
    for (var e in A)
        if (t == A[e]) return !0;
    return !1
}, StiJsViewer.prototype.IsTouchDevice = function() {
    return "ontouchstart" in document.documentElement
}, StiJsViewer.prototype.IsMobileDevice = function() {
    return /iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i.test(navigator.userAgent)
}, StiJsViewer.prototype.SetZoom = function(A) {
    zoomValues = ["25", "50", "75", "100", "150", "200"];
    for (var t = 0; t < zoomValues.length; t++)
        if (zoomValues[t] == this.reportParams.zoom) break;
    A && t < zoomValues.length - 1 && this.postAction("Zoom" + zoomValues[t + 1]), !A && t > 0 && this.postAction("Zoom" + zoomValues[t - 1])
}, StiJsViewer.prototype.getCssParameter = function(A) {
    if (A.indexOf(".gif]") > 0 || A.indexOf(".png]") > 0) return A.substr(A.indexOf("["), A.indexOf("]") - A.indexOf("[") + 1);
    return null
}, StiJsViewer.prototype.newGuid = function() {
    var A = "0123456789abcdefghijklmnopqrstuvwxyz".split("");
    return function(t, e) {
        var o = A,
            i = [],
            s = Math.random;
        if (e = e || o.length, t)
            for (var n = 0; n < t; n++) i[n] = o[0 | s() * e];
        else {
            var a;
            i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4";
            for (var n = 0; n < 36; n++) i[n] || (a = 0 | 16 * s(), i[n] = o[19 == n ? 3 & a | 8 : 15 & a])
        }
        return i.join("")
    }
}(), StiJsViewer.prototype.generateKey = function() {
    return this.newGuid().replace(/-/g, "")
}, StiJsViewer.prototype.Item = function(A, t, e, o) {
    return {
        name: A,
        caption: t,
        imageName: e,
        key: o
    }
}, StiJsViewer.prototype.StrToInt = function(A) {
    var t = parseInt(A);
    if (t) return t;
    return 0
}, StiJsViewer.prototype.formatDate = function(A, t) {
    var e = A.getFullYear(),
        o = e.toString().substring(2),
        i = A.getMonth() + 1,
        s = i < 10 ? "0" + i : i,
        n = A.getDate(),
        a = n < 10 ? "0" + n : n,
        r = A.getHours(),
        l = r < 10 ? "0" + r : r,
        h = r > 12 ? r - 12 : r > 0 ? r : 12,
        p = h < 10 ? "0" + h : h,
        c = A.getMinutes(),
        g = c < 10 ? "0" + c : c,
        u = A.getSeconds(),
        d = u < 10 ? "0" + u : u,
        m = r < 12 ? "AM" : "PM";
    return t = t.replace(/yyyy/gi, e), t = t.replace(/yy/gi, o), t = t.replace(/Y/, e), t = t.replace(/MM/g, s), t = t.replace(/M/g, i), t = t.replace(/dd/g, a), t = t.replace(/d/g, n), t = t.replace(/hh/g, p), t = t.replace(/h/g, h), t = t.replace(/HH/g, l), t = t.replace(/H/g, r), t = t.replace(/mm/g, g), t = t.replace(/m/g, c), t = t.replace(/ss/g, d), t = t.replace(/s/g, u), t = t.replace(/tt/gi, m), t = t.replace(/t/gi, m.substr(0, 1))
}, StiJsViewer.prototype.stringToTime = function(A) {
    var t = A.split(":"),
        e = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    return e.hours = this.StrToInt(t[0]), t.length > 1 && (e.minutes = this.StrToInt(t[1])), t.length > 2 && (e.seconds = this.StrToInt(t[2])), e.hours < 0 && (e.hours = 0), e.minutes < 0 && (e.minutes = 0), e.seconds < 0 && (e.seconds = 0), e.hours > 23 && (e.hours = 23), e.minutes > 59 && (e.minutes = 59), e.seconds > 59 && (e.seconds = 59), e
}, StiJsViewer.prototype.dateTimeObjectToString = function(A, t) {
    var e = new Date(A.year, A.month - 1, A.day, A.hours, A.minutes, A.seconds);
    if ("" != this.options.appearance.parametersPanelDateFormat) return this.formatDate(e, this.options.appearance.parametersPanelDateFormat);
    return this.DateToLocaleString(e, t)
}, StiJsViewer.prototype.getStringKey = function(A, t) {
    return "DateTime" == t.params.type ? this.dateTimeObjectToString(A, t.params.dateTimeType) : A
}, StiJsViewer.prototype.getCountObjects = function(A) {
    var t = 0;
    if (A)
        for (var e in A) t++;
    return t
}, StiJsViewer.prototype.getDateTimeObject = function(A) {
    return A || (A = new Date), dateTimeObject = {}, dateTimeObject.year = A.getFullYear(), dateTimeObject.month = A.getMonth() + 1, dateTimeObject.day = A.getDate(), dateTimeObject.hours = A.getHours(), dateTimeObject.minutes = A.getMinutes(), dateTimeObject.seconds = A.getSeconds(), dateTimeObject
}, StiJsViewer.prototype.getNowTimeSpanObject = function() {
    return date = new Date, timeSpanObject = {}, timeSpanObject.hours = date.getHours(), timeSpanObject.minutes = date.getMinutes(), timeSpanObject.seconds = date.getSeconds(), timeSpanObject
}, StiJsViewer.prototype.copyObject = function(A) {
    if (!A || "object" != typeof A) return A;
    var t = "function" == typeof A.pop ? [] : {},
        e, o;
    for (e in A) A.hasOwnProperty(e) && (o = A[e], t[e] = o && "object" == typeof o ? this.copyObject(o) : o);
    return t
}, StiJsViewer.prototype.getNavigatorName = function() {
    if (!navigator) return "Unknown";
    var A = navigator.userAgent;
    if (A.indexOf("Edge") >= 0) return "Edge";
    if (A.indexOf("MSIE") >= 0 || A.indexOf("Trident") >= 0) return "MSIE";
    if (A.indexOf("Gecko") >= 0) {
        if (A.indexOf("Chrome") >= 0) return "Chrome";
        if (A.indexOf("Safari") >= 0) return "Safari";
        return "Mozilla"
    }
    if (A.indexOf("Opera") >= 0) return "Opera";
    return "Unknown"
}, StiJsViewer.prototype.showHelpWindow = function(A) {
    var t;
    switch (this.options.cultureName) {
        case "ru":
            t = "ru";
        default:
            t = "en"
    }
    this.openNewWindow("http://www.stimulsoft.com/" + t + "/documentation/online/" + A)
}, StiJsViewer.prototype.setObjectToCenter = function(A, t) {
    var e = this.controls.viewer.offsetWidth / 2 - A.offsetWidth / 2,
        o = this.options.appearance.fullScreenMode ? this.controls.viewer.offsetHeight / 2 - A.offsetHeight / 2 : t || 250;
    A.style.left = e > 0 ? e + "px" : 0, A.style.top = o > 0 ? o + "px" : 0
}, StiJsViewer.prototype.strToInt = function(A) {
    var t = parseInt(A);
    if (t) return t;
    return 0
}, StiJsViewer.prototype.strToCorrectPositiveInt = function(A) {
    var t = this.strToInt(A);
    if (t >= 0) return t;
    return 0
}, StiJsViewer.prototype.helpLinks = {
    Print: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    Save: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    SendEmail: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    Bookmarks: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    Parameters: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    FirstPage: "user-manual/index.html?report_internals_appearance_borders_simple_borders.htm",
    PrevPage: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    NextPage: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    LastPage: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    FullScreen: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    Zoom: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    ViewMode: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm",
    Editor: "user-manual/index.html?viewing_reports_basic_toolbar_of_report_viewer.htm"
}, StiJsViewer.prototype.getHTMLColor = function(A) {
    if (A.indexOf(",") > 0) return "rgb(" + A + ")";
    return A
}, StiJsViewer.prototype.clearStyles = function(A) {
    A.className = "stiJsViewerClearAllStyles"
}, StiJsViewer.prototype.getDefaultExportSettings = function(A) {
    var t = null;
    switch (A) {
        case "Document":
            t = {};
            break;
        case "Pdf":
            t = this.options.exports.defaultSettings.StiPdfExportSettings;
            break;
        case "Xps":
            t = this.options.exports.defaultSettings.StiXpsExportSettings;
            break;
        case "Ppt2007":
            t = this.options.exports.defaultSettings.StiPpt2007ExportSettings;
            break;
        case "Html":
        case "Html5":
        case "Mht":
            t = this.options.exports.defaultSettings.StiHtmlExportSettings;
            break;
        case "Text":
            t = this.options.exports.defaultSettings.StiTxtExportSettings;
            break;
        case "Rtf":
            t = this.options.exports.defaultSettings.StiRtfExportSettings;
            break;
        case "Word2007":
            t = this.options.exports.defaultSettings.StiWord2007ExportSettings;
            break;
        case "Odt":
            t = this.options.exports.defaultSettings.StiOdtExportSettings;
            break;
        case "Excel":
        case "ExcelXml":
        case "Excel2007":
            t = this.options.exports.defaultSettings.StiExcelExportSettings;
            break;
        case "Ods":
            t = this.options.exports.defaultSettings.StiOdsExportSettings;
            break;
        case "ImageBmp":
        case "ImageGif":
        case "ImageJpeg":
        case "ImagePcx":
        case "ImagePng":
        case "ImageTiff":
        case "ImageSvg":
        case "ImageSvgz":
        case "ImageEmf":
            t = this.options.exports.defaultSettings.StiImageExportSettings;
            break;
        case "Xml":
        case "Csv":
        case "Dbf":
        case "Dif":
        case "Sylk":
            t = this.options.exports.defaultSettings.StiDataExportSettings;
            break
    }
    return t
}, StiJsViewer.prototype.changeFullScreenMode = function(A) {
    this.options.appearance.scrollbarsMode = A || this.options.appearance.userScrollbarsMode, this.options.appearance.fullScreenMode = A, this.options.toolbar.visible && this.options.toolbar.showFullScreenButton && this.controls.toolbar.controls.FullScreen.setSelected(A), this.controls.reportPanel.correctMargins(), A ? (this.controls.viewer.style.zIndex = "1000000", this.controls.viewer.style.position = "absolute", this.controls.viewer.style.width && (this.controls.viewer.style.userWidth = this.controls.viewer.style.width, this.controls.viewer.style.width = null), this.controls.viewer.style.height && (this.controls.viewer.style.userHeight = this.controls.viewer.style.height, this.controls.viewer.style.height = null), this.controls.reportPanel.style.position = "absolute", this.controls.reportPanel.style.top = this.options.toolbar.visible ? this.controls.toolbar.offsetHeight + "px" : 0, this.controls.reportPanel.style.height = "auto", document.body.prevOverflow = document.body.style.overflow, document.body.style.overflow = "hidden") : (this.controls.viewer.style.zIndex = "auto", this.controls.viewer.style.position = "", this.controls.viewer.style.userWidth && (this.controls.viewer.style.width = this.controls.viewer.style.userWidth), this.controls.viewer.style.userHeight && (this.controls.viewer.style.height = this.controls.viewer.style.userHeight), this.controls.reportPanel.style.position = "Percentage" != this.options.viewerHeightType || this.options.appearance.scrollbarsMode ? "absolute" : "relative", this.controls.reportPanel.style.top = this.options.toolbar.visible && ("Percentage" != this.options.viewerHeightType || this.options.appearance.scrollbarsMode) ? this.controls.toolbar.offsetHeight + "px" : 0, "Percentage" != this.options.viewerHeightType || this.options.appearance.scrollbarsMode || (this.controls.reportPanel.style.height = "calc(100% - 35px)"), void 0 !== document.body.prevOverflow && (document.body.style.overflow = document.body.prevOverflow, delete document.body.prevOverflow));
    var t = (this.options.toolbar.visible ? this.controls.toolbar.offsetHeight : 0) + (this.controls.drillDownPanel ? this.controls.drillDownPanel.offsetHeight : 0) + (this.controls.findPanel ? this.controls.findPanel.offsetHeight : 0);
    this.controls.parametersPanel && (this.controls.parametersPanel.style.top = t + "px"), this.controls.bookmarksPanel && (this.controls.bookmarksPanel.style.top = (this.controls.parametersPanel && "Top" == this.options.appearance.parametersPanelPosition ? this.controls.parametersPanel.offsetHeight : 0) + +t + "px"), this.controls.reportPanel.style.overflow = this.options.appearance.scrollbarsMode ? "auto" : "hidden"
}, StiJsViewer.prototype.addEvent = function(A, t, e) {
    A.addEventListener ? A.addEventListener(t, e, !1) : A.attachEvent && A.attachEvent("on" + t, e)
}, StiJsViewer.prototype.lowerFirstChar = function(A) {
    return A.charAt(0).toLowerCase() + A.substr(1)
}, StiJsViewer.prototype.addHoverEventsToMenus = function() {
    if ("Hover" == this.options.toolbar.showMenuMode)
        for (var A = ["Print", "Save", "SendEmail", "Zoom", "ViewMode"], t = 0; t < A.length; t++) {
            var e = this.controls.toolbar.controls[A[t]];
            if (e) {
                var o = this.controls.menus[this.lowerFirstChar(e.name) + "Menu"];
                o && (o.buttonName = e.name, o.onmouseover = function() {
                    clearTimeout(this.jsObject.options.toolbar["hideTimer" + this.buttonName + "Menu"])
                }, o.onmouseout = function() {
                    var A = this;
                    this.jsObject.options.toolbar["hideTimer" + this.buttonName + "Menu"] = setTimeout(function() {
                        A.changeVisibleState(!1)
                    }, this.jsObject.options.menuHideDelay)
                })
            }
        }
}, StiJsViewer.prototype.GetXmlValue = function(A, t) {
    return A.substr(0, A.indexOf("</" + t + ">")).substr(A.indexOf("<" + t + ">") + t.length + 2)
}, StiJsViewer.prototype.DateToLocaleString = function(A, t) {
    var e = A.toLocaleTimeString(),
        o = e.toLowerCase().indexOf("am") >= 0 || e.toLowerCase().indexOf("pm") >= 0,
        i = o ? "MM/dd/yyyy" : "dd.MM.yyyy",
        s = A.getFullYear(),
        n = s.toString().substring(2),
        a = A.getMonth() + 1,
        r = a < 10 ? "0" + a : a,
        l = A.getDate(),
        h = l < 10 ? "0" + l : l;
    i = i.replace(/yyyy/i, s), i = i.replace(/yy/i, n), i = i.replace(/MM/i, r), i = i.replace(/M/i, a), i = i.replace(/dd/i, h), i = i.replace(/d/i, l);
    var p = A.getHours(),
        c = "";
    o && (c = p < 12 ? " AM" : " PM", 0 == (p = p > 12 ? p - 12 : p) && (p = 12));
    var g = A.getMinutes();
    g = g < 10 ? "0" + g : g;
    var u = A.getSeconds();
    u = u < 10 ? "0" + u : u;
    var d = p + ":" + g + ":" + u + c;
    if ("Time" == t) return d;
    if ("Date" == t) return i;
    return i + " " + d
}, StiJsViewer.prototype.UpdateAllHyperLinks = function() {
    if ("SinglePage" != this.reportParams.viewMode) return;
    var aHyperlinks = this.controls.reportPanel.getElementsByTagName("a");
    if (this.controls.bookmarksPanel)
        for (var aBookmarks = this.controls.bookmarksPanel.getElementsByTagName("a"), i = 0; i < aHyperlinks.length; i++) aHyperlinks[i].getAttribute("href") && (aHyperlinks[i].anchorName = aHyperlinks[i].getAttribute("href").replace("#", ""), aHyperlinks[i].onclick = function() {
            for (var k = 0; k < aBookmarks.length; k++) {
                var clickFunc = aBookmarks[k].getAttribute("onclick");
                if (clickFunc && clickFunc.indexOf("'" + this.anchorName + "'") > 0) try {
                    return eval(clickFunc), !1
                } catch (A) {}
            }
        })
}, StiJsViewer.prototype.openNewWindow = function(A, t, e) {
    return window.open(A, t, e)
}, StiJsViewer.prototype.SetCookie = function(A, t, e, o, i) {
    var s = location.pathname,
        n = new Date;
    n.setTime(n.getTime() + 365 * 24 * 3600 * 1e3), document.cookie = A + "=" + escape(t) + "; expires=" + n.toGMTString() + (e ? "; path=" + e : "") + (o ? "; domain=" + s.substring(0, s.lastIndexOf("/")) + "/" : "") + (i ? "; secure" : "")
}, StiJsViewer.prototype.GetCookie = function(A) {
    var t = " " + document.cookie,
        e = " " + A + "=",
        o = null,
        i = 0,
        s = 0;
    return t.length > 0 && -1 != (i = t.indexOf(e)) && (i += e.length, s = t.indexOf(";", i), -1 == s && (s = t.length), o = unescape(t.substring(i, s))), o
}, StiJsViewer.prototype.numberWithSpaces = function(A) {
    if (null == A) return "";
    return A.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}, StiJsViewer.prototype.GetImageTypesItems = function() {
    var A = [];
    return this.options.exports.showExportToImageBmp && A.push(this.Item("Bmp", "Bmp", null, "Bmp")), this.options.exports.showExportToImageGif && A.push(this.Item("Gif", "Gif", null, "Gif")), this.options.exports.showExportToImageJpeg && A.push(this.Item("Jpeg", "Jpeg", null, "Jpeg")), this.options.exports.showExportToImagePcx && A.push(this.Item("Pcx", "Pcx", null, "Pcx")), this.options.exports.showExportToImagePng && A.push(this.Item("Png", "Png", null, "Png")), this.options.exports.showExportToImageTiff && A.push(this.Item("Tiff", "Tiff", null, "Tiff")), this.options.exports.showExportToImageMetafile && A.push(this.Item("Emf", "Emf", null, "Emf")), this.options.exports.showExportToImageSvg && A.push(this.Item("Svg", "Svg", null, "Svg")), this.options.exports.showExportToImageSvgz && A.push(this.Item("Svgz", "Svgz", null, "Svgz")), A
}, StiJsViewer.prototype.GetDataTypesItems = function() {
    var A = [];
    return this.options.exports.showExportToCsv && A.push(this.Item("Csv", "Csv", null, "Csv")), this.options.exports.showExportToDbf && A.push(this.Item("Dbf", "Dbf", null, "Dbf")), this.options.exports.showExportToXml && A.push(this.Item("Xml", "Xml", null, "Xml")), this.options.exports.showExportToDif && A.push(this.Item("Dif", "Dif", null, "Dif")), this.options.exports.showExportToSylk && A.push(this.Item("Sylk", "Sylk", null, "Sylk")), A
}, StiJsViewer.prototype.GetExcelTypesItems = function() {
    var A = [];
    return this.options.exports.showExportToExcel2007 && A.push(this.Item("Excel2007", "Excel", null, "Excel2007")), this.options.exports.showExportToExcel && A.push(this.Item("ExcelBinary", "Excel 97-2003", null, "ExcelBinary")), this.options.exports.showExportToExcelXml && A.push(this.Item("ExcelXml", "Excel Xml 2003", null, "ExcelXml")), A
}, StiJsViewer.prototype.GetHtmlTypesItems = function() {
    var A = [];
    return this.options.exports.showExportToHtml && A.push(this.Item("Html", "Html", null, "Html")), this.options.exports.showExportToHtml5 && A.push(this.Item("Html5", "Html5", null, "Html5")), this.options.exports.showExportToMht && A.push(this.Item("Mht", "Mht", null, "Mht")), A
}, StiJsViewer.prototype.GetZoomItems = function() {
    for (var A = [], t = [.25, .5, .75, 1, 1.25, 1.5, 2], e = 0; e < t.length; e++) A.push(this.Item("item" + e, 100 * t[e] + "%", null, t[e].toString()));
    return A
}, StiJsViewer.prototype.GetImageFormatForHtmlItems = function() {
    var A = [];
    return A.push(this.Item("item0", "Jpeg", null, "Jpeg")), A.push(this.Item("item1", "Gif", null, "Gif")), A.push(this.Item("item2", "Bmp", null, "Bmp")), A.push(this.Item("item3", "Png", null, "Png")), A
}, StiJsViewer.prototype.GetExportModeItems = function() {
    var A = [];
    return A.push(this.Item("item0", "Table", null, "Table")), A.push(this.Item("item1", "Span", null, "Span")), A.push(this.Item("item2", "Div", null, "Div")), A
}, StiJsViewer.prototype.GetImageResolutionItems = function() {
    for (var A = [], t = ["10", "25", "50", "75", "100", "200", "300", "400", "500"], e = 0; e < t.length; e++) A.push(this.Item("item" + e, t[e], null, t[e]));
    return A
}, StiJsViewer.prototype.GetImageCompressionMethodItems = function() {
    var A = [];
    return A.push(this.Item("item0", "Jpeg", null, "Jpeg")), A.push(this.Item("item1", "Flate", null, "Flate")), A
}, StiJsViewer.prototype.GetImageQualityItems = function() {
    for (var A = [], t = [.25, .5, .75, .85, .9, .95, 1], e = 0; e < t.length; e++) A.push(this.Item("item" + e, 100 * t[e] + "%", null, t[e].toString()));
    return A
}, StiJsViewer.prototype.GetBorderTypeItems = function() {
    var A = [];
    return A.push(this.Item("item0", this.collections.loc.BorderTypeSimple, null, "Simple")), A.push(this.Item("item1", this.collections.loc.BorderTypeSingle, null, "UnicodeSingle")), A.push(this.Item("item2", this.collections.loc.BorderTypeDouble, null, "UnicodeDouble")), A
}, StiJsViewer.prototype.GetEncodingDataItems = function() {
    for (var A = [], t = 0; t < this.collections.encodingData.length; t++) {
        var e = this.collections.encodingData[t];
        A.push(this.Item("item" + t, e.value, null, e.key))
    }
    return A
}, StiJsViewer.prototype.GetImageFormatItems = function(A) {
    var t = [];
    return t.push(this.Item("item0", this.collections.loc.ImageFormatColor, null, "Color")), t.push(this.Item("item1", this.collections.loc.ImageFormatGrayscale, null, "Grayscale")), A || t.push(this.Item("item2", this.collections.loc.ImageFormatMonochrome, null, "Monochrome")), t
}, StiJsViewer.prototype.GetMonochromeDitheringTypeItems = function() {
    var A = [];
    return A.push(this.Item("item0", "None", null, "None")), A.push(this.Item("item1", "FloydSteinberg", null, "FloydSteinberg")), A.push(this.Item("item2", "Ordered", null, "Ordered")), A
}, StiJsViewer.prototype.GetTiffCompressionSchemeItems = function() {
    var A = [];
    return A.push(this.Item("item0", "Default", null, "Default")), A.push(this.Item("item1", "CCITT3", null, "CCITT3")), A.push(this.Item("item2", "CCITT4", null, "CCITT4")), A.push(this.Item("item3", "LZW", null, "LZW")), A.push(this.Item("item4", "None", null, "None")), A.push(this.Item("item5", "Rle", null, "Rle")), A
}, StiJsViewer.prototype.GetEncodingDifFileItems = function() {
    var A = [];
    return A.push(this.Item("item0", "437", null, "437")), A.push(this.Item("item1", "850", null, "850")), A.push(this.Item("item2", "852", null, "852")), A.push(this.Item("item3", "857", null, "857")), A.push(this.Item("item4", "860", null, "860")), A.push(this.Item("item5", "861", null, "861")), A.push(this.Item("item6", "862", null, "862")), A.push(this.Item("item7", "863", null, "863")), A.push(this.Item("item8", "865", null, "865")), A.push(this.Item("item9", "866", null, "866")), A.push(this.Item("item10", "869", null, "869")), A
}, StiJsViewer.prototype.GetExportModeRtfItems = function() {
    var A = [];
    return A.push(this.Item("item0", this.collections.loc.ExportModeRtfTable, null, "Table")), A.push(this.Item("item1", this.collections.loc.ExportModeRtfFrame, null, "Frame")), A
}, StiJsViewer.prototype.GetEncodingDbfFileItems = function() {
    var A = [];
    return A.push(this.Item("item0", "Default", null, "Default")), A.push(this.Item("item1", "437 U.S. MS-DOS", null, "USDOS")), A.push(this.Item("item2", "620 Mazovia(Polish) MS-DOS", null, "MazoviaDOS")), A.push(this.Item("item3", "737 Greek MS-DOS(437G)", null, "GreekDOS")), A.push(this.Item("item4", "850 International MS-DOS", null, "InternationalDOS")), A.push(this.Item("item5", "852 Eastern European MS-DOS", null, "EasternEuropeanDOS")), A.push(this.Item("item6", "857 Turkish MS-DOS", null, "TurkishDOS")), A.push(this.Item("item7", "861 Icelandic MS-DOS", null, "IcelandicDOS")), A.push(this.Item("item8", "865 Nordic MS-DOS", null, "NordicDOS")), A.push(this.Item("item9", "866 Russian MS-DOS", null, "RussianDOS")), A.push(this.Item("item10", "895 Kamenicky(Czech) MS-DOS", null, "KamenickyDOS")), A.push(this.Item("item11", "1250 Eastern European Windows", null, "EasternEuropeanWindows")), A.push(this.Item("item12", "1251 Russian Windows", null, "RussianWindows")), A.push(this.Item("item13", "1252 WindowsANSI", null, "WindowsANSI")), A.push(this.Item("item14", "1253 GreekWindows", null, "GreekWindows")), A.push(this.Item("item15", "1254 TurkishWindows", null, "TurkishWindows")), A.push(this.Item("item16", "10000 StandardMacintosh", null, "StandardMacintosh")), A.push(this.Item("item17", "10006 GreekMacintosh", null, "GreekMacintosh")), A.push(this.Item("item18", "10007 RussianMacintosh", null, "RussianMacintosh")), A.push(this.Item("item19", "10029 EasternEuropeanMacintosh", null, "EasternEuropeanMacintosh")), A
}, StiJsViewer.prototype.GetAllowEditableItems = function() {
    var A = [];
    return A.push(this.Item("item0", this.collections.loc.NameYes, null, "Yes")), A.push(this.Item("item1", this.collections.loc.NameNo, null, "No")), A
}, StiJsViewer.prototype.GetEncryptionKeyLengthItems = function() {
    var A = [];
    return A.push(this.Item("item0", "40 bit", null, "Bit40")), A.push(this.Item("item1", "128 bit", null, "Bit128")), A
}, StiJsViewer.prototype.GetDataExportModeItems = function() {
    var A = [];
    return A.push(this.Item("item0", this.collections.loc.BandsFilterAllBands, null, "AllBands")), A.push(this.Item("item1", this.collections.loc.BandsFilterDataOnly, null, "Data")), A.push(this.Item("item2", this.collections.loc.BandsFilterDataAndHeadersFooters, null, "DataAndHeadersFooters")), A
};
var hexcase = 0;
StiJsViewer.prototype.InitializeAboutPanel = function() {
        var A = document.createElement("div");
        this.controls.aboutPanel = A, this.controls.mainPanel.appendChild(A), A.jsObject = this, A.className = "stiJsViewerAboutPanel", A.style.background = "url(" + this.collections.images["AboutInfo.png"] + ")", A.style.display = "none";
        var t = document.createElement("div");
        t.innerHTML = "Stimulsoft Reports", t.className = "stiJsViewerAboutPanelHeader", A.appendChild(t);
        var e = document.createElement("div");
        e.innerHTML = "Copyright 2003-" + (new Date).getFullYear() + " Stimulsoft", e.className = "stiJsViewerAboutPanelCopyright", A.appendChild(e);
        var o = document.createElement("div");
        o.innerHTML = "Version " + this.options.productVersion, this.options.jsMode || (o.innerHTML += ", ASP.NET"), o.innerHTML += ", JS", o.className = "stiJsViewerAboutPanelVersion", A.appendChild(o);
        var i = document.createElement("div");
        i.innerHTML = "All rights reserved", i.className = "stiJsViewerAboutPanelVersion", A.appendChild(i);
        var s = document.createElement("div");
        return s.innerHTML = "www.stimulsoft.com", s.className = "stiJsViewerAboutPanelStiLink", A.appendChild(s), s.onclick = function(t) {
            t && (t.stopPropagation(), t.preventDefault()), A.jsObject.openNewWindow("https://www.stimulsoft.com")
        }, A.ontouchend = function() {
            this.changeVisibleState(!1)
        }, A.onclick = function() {
            this.changeVisibleState(!1)
        }, A.changeVisibleState = function(A) {
            this.style.display = A ? "" : "none", this.jsObject.setObjectToCenter(this), this.jsObject.controls.disabledPanels[2].changeVisibleState(A)
        }, A
    }, StiJsViewer.prototype.InitializeBookmarksPanel = function() {
        var createAndShow = !this.options.isMobileDevice;
        if (this.controls.bookmarksPanel && (createAndShow = this.controls.bookmarksPanel.visible, this.controls.bookmarksPanel.changeVisibleState(!1), this.controls.mainPanel.removeChild(this.controls.bookmarksPanel), delete this.controls.bookmarksPanel), this.options.toolbar.visible && this.options.toolbar.showBookmarksButton && this.controls.toolbar.controls.Bookmarks.setEnabled(null != this.reportParams.bookmarksContent), !this.reportParams.bookmarksContent) return;
        var bookmarksPanel = document.createElement("div");
        bookmarksPanel.jsObject = this, bookmarksPanel.id = this.controls.viewer.id + "_BookmarksPanel", bookmarksPanel.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (bookmarksPanel.style.color = this.options.toolbar.fontColor), this.controls.mainPanel.appendChild(bookmarksPanel), this.controls.bookmarksPanel = bookmarksPanel, bookmarksPanel.className = "stiJsViewerBookmarksPanel", "Separated" == this.options.toolbar.displayMode && (bookmarksPanel.className += " stiJsViewerBookmarksPanelSeparated"), bookmarksPanel.style.display = "none", bookmarksPanel.visible = !1, bookmarksPanel.style.width = this.options.appearance.bookmarksTreeWidth - 1 + "px", this.options.isMobileDevice ? bookmarksPanel.style.bottom = this.options.toolbar.autoHide ? "0" : "0.5in" : bookmarksPanel.style.bottom = "Separated" == this.options.toolbar.displayMode ? "35px" : "0";
        var styleTop = this.options.toolbar.visible ? this.controls.toolbar.offsetHeight : 0;
        this.options.isMobileDevice && this.options.toolbar.autoHide && (styleTop = 0), styleTop += this.controls.parametersPanel && "Top" == this.options.appearance.parametersPanelPosition ? this.controls.parametersPanel.offsetHeight : 0, styleTop += this.controls.findPanel ? this.controls.findPanel.offsetHeight : 0, styleTop += this.controls.drillDownPanel ? this.controls.drillDownPanel.offsetHeight : 0, bookmarksPanel.style.top = styleTop + "px", this.options.isMobileDevice && (bookmarksPanel.style.transition = "opacity 300ms ease"), bookmarksPanel.container = document.createElement("div"), bookmarksPanel.container.className = "stiJsViewerBookmarksContainer", "Simple" == this.options.toolbar.displayMode && (bookmarksPanel.container.className += " stiJsViewerBookmarksContainerSimple"), "" != this.options.toolbar.backgroundColor && (bookmarksPanel.container.style.background = this.options.toolbar.backgroundColor), "" != this.options.toolbar.borderColor && (bookmarksPanel.container.style.border = "1px solid " + this.options.toolbar.borderColor), bookmarksPanel.appendChild(bookmarksPanel.container), bookmarksPanel.changeVisibleState = function(A) {
            var t = this.jsObject.options,
                e = this.jsObject.controls;
            this.style.display = A ? "" : "none", this.visible = A, t.toolbar.visible && t.toolbar.showBookmarksButton && this.jsObject.controls.toolbar.controls.Bookmarks.setSelected(A);
            var o = A ? t.appearance.bookmarksTreeWidth : 0;
            if (e.reportPanel.style.marginLeft = A ? o + "px" : "0px", "Left" == t.appearance.parametersPanelPosition && e.parametersPanel) {
                var i = e.parametersPanel.visible ? e.parametersPanel.firstChild.offsetWidth : 0;
                e.parametersPanel.style.left = A ? o + "px" : "0px", e.reportPanel.style.marginLeft = i + o + "px"
            }
            t.isMobileDevice && (A && e.parametersPanel && e.parametersPanel.changeVisibleState(!1), setTimeout(function() {
                bookmarksPanel.style.opacity = A ? "1" : "0", A ? e.reportPanel.hideToolbar() : e.reportPanel.showToolbar()
            }))
        }, bookmarksPanel.addContent = function(A) {
            this.container.innerHTML = A
        };
        var imagesForBookmarks = this.GetImagesForBookmarks(),
            bookmarksContent = this.reportParams.bookmarksContent.replace("imagesForBookmarks", imagesForBookmarks);
        eval(bookmarksContent), bookmarksPanel.addContent(bookmarks), createAndShow && bookmarksPanel.changeVisibleState(!0)
    }, StiJsViewer.prototype.GetImagesForBookmarks = function() {
        for (var A = ["root", "folder", "folderOpen", "node", "empty", "line", "join", "joinBottom", "plus", "plusBottom", "minus", "minusBottom"], t = {}, e = 0; e < A.length; e++) t[A[e]] = this.collections.images["Bookmarks" + A[e] + ".png"];
        return JSON.stringify(t)
    }, stiTree.prototype.add = function(A, t, e, o, i, s) {
        this.aNodes[this.aNodes.length] = new stiTreeNode(A, t, e, o, i, s)
    }, stiTree.prototype.openAll = function() {
        this.oAll(!0)
    }, stiTree.prototype.closeAll = function() {
        this.oAll(!1)
    }, stiTree.prototype.toString = function() {
        var A = '<div class="stiTree">\n';
        return document.getElementById ? (this.config.useCookies && (this.selectedNode = this.getSelected()), A += this.addNode(this.root)) : A += "Browser not supported.", A += "</div>", this.selectedFound || (this.selectedNode = null), this.completed = !0, A
    }, stiTree.prototype.addNode = function(A) {
        var t = "",
            e = 0;
        for (this.config.inOrder && (e = A._ai), e; e < this.aNodes.length; e++)
            if (this.aNodes[e].pid == A.id) {
                var o = this.aNodes[e];
                if (o._p = A, o._ai = e, this.setCS(o), !o.target && this.config.target && (o.target = this.config.target), o._hc && !o._io && this.config.useCookies && (o._io = this.isOpen(o.id)), !this.config.folderLinks && o._hc && (o.url = null), this.config.useSelection && o.id == this.selectedNode && !this.selectedFound && (o._is = !0, this.selectedNode = e, this.selectedFound = !0), t += this.node(o, e), o._ls) break
            }
        return t
    }, stiTree.prototype.node = function(A, t) {
        var e = '<div class="stiTreeNode">' + this.indent(A, t);
        if (this.config.useIcons && (A.icon || (A.icon = this.root.id == A.pid ? this.icon.root : A._hc ? this.icon.folder : this.icon.node), A.iconOpen || (A.iconOpen = A._hc ? this.icon.folderOpen : this.icon.node), this.root.id == A.pid && (A.icon = this.icon.root, A.iconOpen = this.icon.root), e += '<img id="i' + this.obj + t + '" src="' + (A._io ? A.iconOpen : A.icon) + '" alt="" />'), A.url) {
            e += '<a id="s' + this.obj + t + '" class="' + (this.config.useSelection && A._is ? "nodeSel" : "node") + '"', A.target && (e += ' target="' + A.target + '"'), this.config.useStatusText && (e += " onmouseover=\"window.status='" + A.name + "';return true;\" onmouseout=\"window.status='';return true;\" ");
            var o = "";
            this.config.useSelection && (A._hc && this.config.folderLinks || !A._hc) && (o += this.obj + ".s(" + t + ");"), null != A.page && (o += "document.getElementById('" + this.mobileViewerId + "').jsObject.postAction('BookmarkAction'," + A.page + ",'" + A.url.substr(1) + "');"), o.length > 0 && A.page >= 0 && (e += ' onclick="' + o + '"'), e += ">"
        } else this.config.folderLinks && A.url || !A._hc || A.pid == this.root.id || (e += '<a href="javascript: ' + this.obj + ".o(" + t + ');" class="node">');
        return e += A.name, !A.url && (this.config.folderLinks && A.url || !A._hc) || (e += "</a>"), e += "</div>", A._hc && (e += '<div id="d' + this.obj + t + '" class="clip" style="display:' + (this.root.id == A.pid || A._io ? "block" : "none") + ';">', e += this.addNode(A), e += "</div>"), this.aIndent.pop(), e
    }, stiTree.prototype.indent = function(A, t) {
        var e = "";
        if (this.root.id != A.pid) {
            for (var o = 0; o < this.aIndent.length; o++) e += '<img src="' + (1 == this.aIndent[o] && this.config.useLines ? this.icon.line : this.icon.empty) + '" alt="" />';
            A._ls ? this.aIndent.push(0) : this.aIndent.push(1), A._hc ? (e += '<a href="javascript: ' + this.obj + ".o(" + t + ');"><img id="j' + this.obj + t + '" src="', this.config.useLines ? e += A._io ? A._ls && this.config.useLines ? this.icon.minusBottom : this.icon.minus : A._ls && this.config.useLines ? this.icon.plusBottom : this.icon.plus : e += A._io ? this.icon.nlMinus : this.icon.nlPlus, e += '" alt="" /></a>') : e += '<img src="' + (this.config.useLines ? A._ls ? this.icon.joinBottom : this.icon.join : this.icon.empty) + '" alt="" />'
        }
        return e
    }, stiTree.prototype.setCS = function(A) {
        for (var t, e = 0; e < this.aNodes.length; e++) this.aNodes[e].pid == A.id && (A._hc = !0), this.aNodes[e].pid == A.pid && (t = this.aNodes[e].id);
        t == A.id && (A._ls = !0)
    }, stiTree.prototype.getSelected = function() {
        var A = this.getCookie("cs" + this.obj);
        return A || null
    }, stiTree.prototype.s = function(A) {
        if (!this.config.useSelection) return;
        var t = this.aNodes[A];
        if (t._hc && !this.config.folderLinks) return;
        this.selectedNode != A && ((this.selectedNode || 0 == this.selectedNode) && (eOld = document.getElementById("s" + this.obj + this.selectedNode), eOld.className = "node"), eNew = document.getElementById("s" + this.obj + A), eNew.className = "nodeSel", this.selectedNode = A, this.config.useCookies && this.setCookie("cs" + this.obj, t.id))
    }, stiTree.prototype.o = function(A) {
        var t = this.aNodes[A];
        this.nodeStatus(!t._io, A, t._ls), t._io = !t._io, this.config.closeSameLevel && this.closeLevel(t), this.config.useCookies && this.updateCookie()
    }, stiTree.prototype.oAll = function(A) {
        for (var t = 0; t < this.aNodes.length; t++) this.aNodes[t]._hc && this.aNodes[t].pid != this.root.id && (this.nodeStatus(A, t, this.aNodes[t]._ls), this.aNodes[t]._io = A);
        this.config.useCookies && this.updateCookie()
    }, stiTree.prototype.openTo = function(A, t, e) {
        if (!e)
            for (var o = 0; o < this.aNodes.length; o++)
                if (this.aNodes[o].id == A) {
                    A = o;
                    break
                }
        var i = this.aNodes[A];
        if (i.pid == this.root.id || !i._p) return;
        i._io = !0, i._is = t, this.completed && i._hc && this.nodeStatus(!0, i._ai, i._ls), this.completed && t ? this.s(i._ai) : t && (this._sn = i._ai), this.openTo(i._p._ai, !1, !0)
    }, stiTree.prototype.closeLevel = function(A) {
        for (var t = 0; t < this.aNodes.length; t++) this.aNodes[t].pid == A.pid && this.aNodes[t].id != A.id && this.aNodes[t]._hc && (this.nodeStatus(!1, t, this.aNodes[t]._ls), this.aNodes[t]._io = !1, this.closeAllChildren(this.aNodes[t]))
    }, stiTree.prototype.closeAllChildren = function(A) {
        for (var t = 0; t < this.aNodes.length; t++) this.aNodes[t].pid == A.id && this.aNodes[t]._hc && (this.aNodes[t]._io && this.nodeStatus(!1, t, this.aNodes[t]._ls), this.aNodes[t]._io = !1, this.closeAllChildren(this.aNodes[t]))
    }, stiTree.prototype.nodeStatus = function(A, t, e) {
        eDiv = document.getElementById("d" + this.obj + t), eJoin = document.getElementById("j" + this.obj + t), this.config.useIcons && (eIcon = document.getElementById("i" + this.obj + t), eIcon.src = A ? this.aNodes[t].iconOpen : this.aNodes[t].icon), eJoin.src = this.config.useLines ? A ? e ? this.icon.minusBottom : this.icon.minus : e ? this.icon.plusBottom : this.icon.plus : A ? this.icon.nlMinus : this.icon.nlPlus, eDiv.style.display = A ? "block" : "none"
    }, stiTree.prototype.clearCookie = function() {
        var A = new Date,
            t = new Date(A.getTime() - 1e3 * 60 * 60 * 24);
        this.setCookie("co" + this.obj, "cookieValue", t), this.setCookie("cs" + this.obj, "cookieValue", t)
    }, stiTree.prototype.setCookie = function(A, t, e, o, i, s) {
        document.cookie = escape(A) + "=" + escape(t) + (e ? "; expires=" + e.toGMTString() : "") + (o ? "; path=" + o : "") + (i ? "; domain=" + i : "") + (s ? "; secure" : "")
    }, stiTree.prototype.getCookie = function(A) {
        var t = "",
            e = document.cookie.indexOf(escape(A) + "=");
        if (-1 != e) {
            var o = e + (escape(A) + "=").length,
                i = document.cookie.indexOf(";", o);
            t = -1 != i ? unescape(document.cookie.substring(o, i)) : unescape(document.cookie.substring(o))
        }
        return t
    }, stiTree.prototype.updateCookie = function() {
        for (var A = "", t = 0; t < this.aNodes.length; t++) this.aNodes[t]._io && this.aNodes[t].pid != this.root.id && (A && (A += "."), A += this.aNodes[t].id);
        this.setCookie("co" + this.obj, A)
    }, stiTree.prototype.isOpen = function(A) {
        for (var t = this.getCookie("co" + this.obj).split("."), e = 0; e < t.length; e++)
            if (t[e] == A) return !0;
        return !1
    }, Array.prototype.push || (Array.prototype.push = function A() {
        for (var t = 0; t < arguments.length; t++) this[this.length] = arguments[t];
        return this.length
    }), Array.prototype.pop || (Array.prototype.pop = function A() {
        return lastElement = this[this.length - 1], this.length = Math.max(this.length - 1, 0), lastElement
    }), StiJsViewer.prototype.CheckBox = function(A, t, e) {
        var o = this.CreateHTMLTable();
        o.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (o.style.color = this.options.toolbar.fontColor), o.jsObject = this, o.isEnabled = !0, o.isChecked = !1, o.id = this.generateKey(), o.name = A, o.captionText = t, e && o.setAttribute("title", e), o.className = "stiJsViewerCheckBox", o.style.boxSizing = "content-box", A && (this.controls.checkBoxes || (this.controls.checkBoxes = {}), this.controls.checkBoxes[A] = o), o.imageBlock = document.createElement("div");
        var i = this.options.isTouchDevice ? "16px" : "13px";
        o.imageBlock.style.width = i, o.imageBlock.style.height = i, o.imageBlock.style.boxSizing = "content-box", o.imageBlock.className = "stiJsViewerCheckBoxImageBlock";
        var s = o.addCell(o.imageBlock);
        this.options.isTouchDevice && (s.style.padding = "1px 3px 1px 1px"), o.image = document.createElement("img"), o.image.src = this.collections.images["CheckBox.png"], o.image.style.visibility = "hidden", o.image.style.verticalAlign = "baseline";
        var n = this.CreateHTMLTable();
        return n.style.width = "100%", n.style.height = "100%", o.imageBlock.appendChild(n), n.addCell(o.image).style.textAlign = "center", null != t && (o.captionCell = o.addCell(), this.options.isTouchDevice || (o.captionCell.style.padding = "1px 0 0 4px"), o.captionCell.style.whiteSpace = "nowrap", o.captionCell.innerHTML = t), o.onmouseover = function() {
            this.jsObject.options.isTouchDevice || this.onmouseenter()
        }, o.onmouseout = function() {
            this.jsObject.options.isTouchDevice || this.onmouseleave()
        }, o.onmouseenter = function() {
            if (!this.isEnabled) return;
            this.imageBlock.className = "stiJsViewerCheckBoxImageBlockOver"
        }, o.onmouseleave = function() {
            if (!this.isEnabled) return;
            this.imageBlock.className = "stiJsViewerCheckBoxImageBlock"
        }, o.onclick = function() {
            if (this.isTouchEndFlag || !this.isEnabled || this.jsObject.options.isTouchClick) return;
            this.setChecked(!this.isChecked), this.action()
        }, o.ontouchend = function() {
            if (!this.isEnabled || this.jsObject.options.fingerIsMoved) return;
            var A = this;
            this.isTouchEndFlag = !0, clearTimeout(this.isTouchEndTimer), this.imageBlock.className = "stiJsViewerCheckBoxImageBlockOver", setTimeout(function() {
                A.imageBlock.className = "stiJsViewerCheckBoxImageBlock", A.setChecked(!A.isChecked), A.action()
            }, 150), this.isTouchEndTimer = setTimeout(function() {
                A.isTouchEndFlag = !1
            }, 1e3)
        }, o.ontouchstart = function() {
            this.jsObject.options.fingerIsMoved = !1
        }, o.setEnabled = function(A) {
            this.image.style.opacity = A ? "1" : "0.5", this.isEnabled = A, this.className = A ? "stiJsViewerCheckBox" : "stiJsViewerCheckBoxDisabled", this.imageBlock.className = A ? "stiJsViewerCheckBoxImageBlock" : "stiJsViewerCheckBoxImageBlockDisabled"
        }, o.setChecked = function(A, t) {
            this.image.style.visibility = A ? "visible" : "hidden", this.isChecked = A, t || this.onChecked()
        }, o.onChecked = function() {}, o.action = function() {}, o
    }, StiJsViewer.prototype.InitializeDatePicker = function(A) {
        var t = this.BaseMenu(null, null, "Down", "stiJsViewerDropdownMenu");
        t.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (t.style.color = this.options.toolbar.fontColor), t.style.zIndex = "36", t.parentDataControl = null, t.dayButtons = [], t.showTime = !1, t.doubleDatePicker = A, t.key = new Date, A || (this.controls.datePicker = t, this.controls.mainPanel.appendChild(t));
        var e = this.CreateHTMLTable();
        t.innerContent.appendChild(e), t.prevMonthButton = this.SmallButton(null, null, "ArrowLeft.png"), t.prevMonthButton.style.margin = "1px 2px 0 1px", t.prevMonthButton.datePicker = t, t.prevMonthButton.action = function() {
            var A = this.datePicker.key.getMonth(),
                t = this.datePicker.key.getFullYear(); - 1 == --A && (A = 11, t--);
            var e = this.jsObject.GetCountDaysOfMonth(t, A);
            e < this.datePicker.key.getDate() && this.datePicker.key.setDate(e), this.datePicker.key.setMonth(A), this.datePicker.key.setYear(t), this.datePicker.fill(), this.datePicker.action()
        }, e.addCell(t.prevMonthButton), t.monthDropDownList = this.DropDownList(null, this.options.isTouchDevice ? 79 : 81, null, this.GetMonthesForDatePickerItems(), !0), t.monthDropDownList.style.margin = "1px 2px 0 0", t.monthDropDownList.datePicker = t, t.monthDropDownList.action = function() {
            var A = this.jsObject.GetCountDaysOfMonth(this.datePicker.key.getFullYear(), parseInt(this.key));
            A < this.datePicker.key.getDate() && this.datePicker.key.setDate(A), this.datePicker.key.setMonth(parseInt(this.key)), this.datePicker.repaintDays(), this.datePicker.action()
        }, e.addCell(t.monthDropDownList), t.monthDropDownList.menu.style.zIndex = "37", t.monthDropDownList.menu.datePicker = t, t.monthDropDownList.menu.onmousedown = function() {
            this.isTouchEndFlag || this.ontouchstart(!0)
        }, t.monthDropDownList.menu.ontouchstart = function(A) {
            var t = this;
            this.isTouchEndFlag = !A, clearTimeout(this.isTouchEndTimer), this.jsObject.options.dropDownListMenuPressed = this, this.datePicker.ontouchstart(), this.isTouchEndTimer = setTimeout(function() {
                t.isTouchEndFlag = !1
            }, 1e3)
        }, t.yearTextBox = this.TextBox(null, 40, "Year"), t.yearTextBox.style.margin = "1px 2px 0 0", t.yearTextBox.datePicker = t, t.yearTextBox.action = function() {
            var A = this.jsObject.strToCorrectPositiveInt(this.value);
            this.value = A, this.datePicker.key.setYear(A), this.datePicker.repaintDays(), this.datePicker.action()
        }, e.addCell(t.yearTextBox), t.nextMonthButton = this.SmallButton(null, null, "ArrowRight.png"), t.nextMonthButton.datePicker = t, t.nextMonthButton.style.margin = "1px 1px 0 0", t.nextMonthButton.action = function() {
            var A = this.datePicker.key.getMonth(),
                t = this.datePicker.key.getFullYear();
            12 == ++A && (A = 0, t++);
            var e = this.jsObject.GetCountDaysOfMonth(t, A);
            e < this.datePicker.key.getDate() && this.datePicker.key.setDate(e), this.datePicker.key.setMonth(A), this.datePicker.key.setYear(t), this.datePicker.fill(), this.datePicker.action()
        }, e.addCell(t.nextMonthButton);
        var o = document.createElement("div");
        o.style.margin = "2px 0 2px 0", o.className = "stiJsViewerDatePickerSeparator", t.innerContent.appendChild(o), t.daysTable = this.CreateHTMLTable(), t.innerContent.appendChild(t.daysTable), "Sunday" == this.options.appearance.datePickerFirstDayOfWeek && (this.collections.dayOfWeek.splice(6, 1), this.collections.dayOfWeek.splice(0, 0, "Sunday"));
        for (var i = 0; i < 7; i++) {
            var s = t.daysTable.addCell();
            s.className = "stiJsViewerDatePickerDayOfWeekCell";
            var n = this.collections.loc["Day" + this.collections.dayOfWeek[i]];
            n && (s.innerHTML = n.toString().substring(0, 1).toUpperCase()), i == ("Sunday" == this.options.appearance.datePickerFirstDayOfWeek ? 6 : 5) && (s.style.color = "#0000ff"), i == ("Sunday" == this.options.appearance.datePickerFirstDayOfWeek ? 0 : 6) && (s.style.color = "#ff0000")
        }
        t.daysTable.addRow();
        for (var a = 1, i = 0; i < 42; i++) {
            var r = this.DatePickerDayButton();
            r.datePicker = t, r.style.margin = "1px", t.dayButtons.push(r), t.daysTable.addCellInRow(a, r), (i + 1) % 7 == 0 && (t.daysTable.addRow(), a++)
        }
        var l = document.createElement("div");
        l.style.margin = "2px 0 2px 0", l.className = "stiJsViewerDatePickerSeparator", t.innerContent.appendChild(l);
        var h = this.CreateHTMLTable();
        h.style.width = "100%", t.innerContent.appendChild(h), h.addTextCell(this.collections.loc.Time + ":").style.padding = "0 4px 0 4px";
        var p = this.TextBox(null, 90);
        p.style.margin = "1px 2px 2px 2px";
        var c = h.addCell(p);
        return c.style.width = "100%", c.style.textAlign = "right", t.time = p, p.action = function() {
            var A = this.jsObject.stringToTime(this.value);
            t.key.setHours(A.hours), t.key.setMinutes(A.minutes), t.key.setSeconds(A.seconds), this.value = this.jsObject.formatDate(t.key, "H:mm:ss"), t.action()
        }, t.repaintDays = function() {
            var A = this.key.getMonth(),
                t = this.key.getFullYear(),
                e = this.jsObject.GetCountDaysOfMonth(t, A),
                o = this.jsObject.GetDayOfWeek(t, A, 1);
            "Monday" == this.jsObject.options.appearance.datePickerFirstDayOfWeek ? o-- : 7 == o && "Sunday" == this.jsObject.options.appearance.datePickerFirstDayOfWeek && (o = 0);
            for (var i = 0; i < 42; i++) {
                var s = i - o + 1,
                    n = s == this.key.getDate(),
                    a = this.dayButtons[i];
                i < o || i - o > e - 1 ? (a.caption.innerHTML = "", a.setEnabled(!1)) : (a.numberOfDay = s, a.caption.innerHTML = s, a.setEnabled(!0), a.setSelected(n))
            }
        }, t.fill = function() {
            this.yearTextBox.value = this.key.getFullYear(), this.monthDropDownList.setKey(this.key.getMonth()), this.repaintDays(), this.showTime && (this.time.value = this.jsObject.formatDate(this.key, "H:mm:ss"))
        }, t.onshow = function() {
            this.key = new Date, this.ownerValue && (this.key = new Date(this.ownerValue.year, this.ownerValue.month - 1, this.ownerValue.day, this.ownerValue.hours, this.ownerValue.minutes, this.ownerValue.seconds)), l.style.display = this.showTime ? "" : "none", h.style.display = this.showTime ? "" : "none", this.fill()
        }, t.action = function() {
            this.ownerValue || (this.ownerValue = this.jsObject.getDateTimeObject()), this.ownerValue.year = this.key.getFullYear(), this.ownerValue.month = this.key.getMonth() + 1, this.ownerValue.day = this.key.getDate(), this.ownerValue.hours = this.key.getHours(), this.ownerValue.minutes = this.key.getMinutes(), this.ownerValue.seconds = this.key.getSeconds(), this.parentDataControl && (this.parentDataControl.value = this.jsObject.dateTimeObjectToString(t.ownerValue, this.parentDataControl.parameter.params.dateTimeType))
        }, t.onmousedown = function() {
            this.isTouchStartFlag || this.ontouchstart(!0)
        }, t.ontouchstart = function(A) {
            var t = this;
            this.isTouchStartFlag = !A, clearTimeout(this.isTouchStartTimer), this.jsObject.options.datePickerPressed = this, this.isTouchStartTimer = setTimeout(function() {
                t.isTouchStartFlag = !1
            }, 1e3)
        }, t.changeVisibleState = function(A) {
            var t = "stiJsViewerMainPanel";
            if (A) {
                this.onshow(), this.style.display = "", this.visible = !0, this.style.overflow = "hidden", this.parentDataControl.setSelected(!0), this.parentButton.setSelected(!0), this.jsObject.options.currentDatePicker = this, this.style.width = this.innerContent.offsetWidth + "px", this.style.height = this.innerContent.offsetHeight + "px", this.style.left = this.jsObject.FindPosX(this.parentButton, t) + "px", this.style.top = this.jsObject.FindPosY(this.parentButton, t) + this.parentButton.offsetHeight + 1 + "px", this.innerContent.style.top = -this.innerContent.offsetHeight + "px";
                var e = new Date,
                    o = e.getTime();
                this.jsObject.options.toolbar.menuAnimation && (o += this.jsObject.options.menuAnimDuration), this.jsObject.ShowAnimationVerticalMenu(this, 0, o)
            } else clearTimeout(this.innerContent.animationTimer), this.showTime = !1, this.visible = !1, this.parentDataControl.setSelected(!1), this.parentButton.setSelected(!1), this.style.display = "none", this.jsObject.options.currentDatePicker == this && (this.jsObject.options.currentDatePicker = null)
        }, t
    }, StiJsViewer.prototype.DatePickerDayButton = function() {
        var A = this.SmallButton(null, "0", null, null, null, "stiJsViewerDatePickerDayButton"),
            t = this.options.isTouchDevice ? "25px" : "23px";
        return A.style.width = t, A.style.height = t, A.caption.style.textAlign = "center", A.innerTable.style.width = "100%", A.caption.style.padding = "0px", A.numberOfDay = 1, A.action = function() {
            this.datePicker.key.setDate(parseInt(this.numberOfDay)), this.setSelected(!0), this.datePicker.action(), this.datePicker.doubleDatePicker || this.datePicker.changeVisibleState(!1)
        }, A.setSelected = function(A) {
            A && (this.datePicker.selectedButton && this.datePicker.selectedButton.setSelected(!1), this.datePicker.selectedButton = this), this.isSelected = A, this.className = this.styleName + " " + this.styleName + (A ? "Selected" : this.isEnabled ? this.isOver ? "Over" : "Default" : "Disabled")
        }, A
    }, StiJsViewer.prototype.GetDayOfWeek = function(A, t) {
        var e = new Date(A, t, 1).getDay();
        return 0 == e && (e = 7), e
    }, StiJsViewer.prototype.GetCountDaysOfMonth = function(A, t) {
        var e = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            o = e[t];
        return 1 == t && (o = A % 4 != 0 || A % 100 == 0 && A % 400 != 0 ? 28 : 29), o
    }, StiJsViewer.prototype.GetMonthesForDatePickerItems = function() {
        for (var A = [], t = 0; t < this.collections.months.length; t++) A.push(this.Item("Month" + t, this.collections.loc["Month" + this.collections.months[t]], null, t));
        return A
    }, StiJsViewer.prototype.GetDayOfWeekItems = function() {
        for (var A = [], t = 0; t < this.collections.dayOfWeek.length; t++) A.push(this.Item("DayOfWeekItem" + t, this.collections.loc["Day" + this.collections.dayOfWeek[t]], null, this.collections.dayOfWeek[t]));
        return A
    }, StiJsViewer.prototype.GetFirstDayOfWeek = function() {
        var A = new Date,
            t = A.toLocaleTimeString();
        return t.toLowerCase().indexOf("am") >= 0 || t.toLowerCase().indexOf("pm") >= 0 ? 0 : 1
    }, StiJsViewer.prototype.InitializeDisabledPanels = function() {
        this.controls.disabledPanels = {};
        for (var A = 1; A < 5; A++) {
            var t = document.createElement("div");
            t.jsObject = this, t.style.display = "none", this.controls.mainPanel.appendChild(t), this.controls.disabledPanels[A] = t, t.style.zIndex = 10 * A, t.className = "stiJsViewerDisabledPanel", t.changeVisibleState = function(A) {
                this.style.display = A ? "" : "none"
            }, t.onmousedown = function() {
                this.isTouchStartFlag || t.ontouchstart(!0)
            }, t.ontouchstart = function(A) {
                var e = this;
                this.isTouchStartFlag = !A, clearTimeout(this.isTouchStartTimer), t.jsObject.options.disabledPanelPressed = !0, this.isTouchStartTimer = setTimeout(function() {
                    e.isTouchStartFlag = !1
                }, 1e3)
            }
        }
    }, StiJsViewer.prototype.InitializeDrillDownPanel = function() {
        var A = document.createElement("div");
        this.controls.drillDownPanel = A, this.controls.mainPanel.appendChild(A), A.jsObject = this, A.className = "stiJsViewerToolBar", "Separated" == this.options.toolbar.displayMode && (A.className += " stiJsViewerToolBarSeparated"), A.style.display = "none";
        var t = document.createElement("div");
        A.appendChild(t), "Simple" == this.options.toolbar.displayMode && (t.style.paddingTop = "2px");
        var e = this.CreateHTMLTable();
        e.className = "stiJsViewerToolBarTable", "Separated" == this.options.toolbar.displayMode && (e.style.border = "0px"), t.appendChild(e), e.style.margin = "0", "" != this.options.toolbar.fontColor && (e.style.color = this.options.toolbar.fontColor), e.style.fontFamily = this.options.toolbar.fontFamily, e.style.boxSizing = "border-box";
        var o = this.CreateHTMLTable();
        return e.addCell(o), A.buttonsRow = o.rows[0], A.buttons = {}, A.selectedButton = null, A.changeVisibleState = function(A) {
            this.style.display = A ? "" : "none";
            var t = this.offsetHeight,
                e = this.jsObject.controls.parametersPanel && "Top" == this.jsObject.options.appearance.parametersPanelPosition ? this.jsObject.controls.parametersPanel.offsetHeight : 0,
                o = this.jsObject.options.toolbar.visible ? this.jsObject.controls.toolbar.offsetHeight : 0;
            this.jsObject.options.isMobileDevice && this.jsObject.options.toolbar.autoHide && (o = 0);
            var i = this.jsObject.controls.findPanel ? this.jsObject.controls.findPanel.offsetHeight : 0;
            this.jsObject.controls.parametersPanel && (this.jsObject.controls.parametersPanel.style.top = o + i + t + "px"), this.jsObject.controls.bookmarksPanel && (this.jsObject.controls.bookmarksPanel.style.top = o + i + e + t + "px"), this.jsObject.controls.reportPanel.style.marginTop = ("relative" == this.jsObject.controls.reportPanel.style.position ? e + i : t + e + i) + "px"
        }, A.addButton = function(t, e) {
            var i = "button" + (A.buttonsRow.children.length + 1),
                s = A.jsObject.SmallButton(i, t);
            s.style.display = "inline-block", s.reportParams = e || (this.reportParams = {}), A.buttons[i] = s, s.style.margin = "2px 1px 2px 2px";
            var n = o.addCell(s);
            if (n.style.padding = "0", n.style.border = "0", n.style.lineHeight = "0", s.select = function() {
                    A.selectedButton && A.selectedButton.setSelected(!1), this.setSelected(!0), A.selectedButton = this, A.jsObject.reportParams = this.reportParams, A.jsObject.controls.reportPanel.scrollTop = 0
                }, s.action = function() {
                    "none" != this.style.display && (this.select(), A.jsObject.postAction("Refresh"))
                }, s.select(), "button1" != i) {
                var a = A.jsObject.SmallButton(null, null, "CloseForm.png");
                a.style.display = "inline-block", a.style.margin = "0 2px 0 0", a.image.style.margin = "1px 0 0 -1px", a.imageCell.style.padding = 0, a.style.width = A.jsObject.options.isTouchDevice ? "22px" : "17px", a.style.height = a.style.width, a.reportButton = s, s.innerTable.addCell(a), a.action = function() {
                    this.reportButton.style.display = "none", this.reportButton.isSelected && A.buttons.button1.action()
                }, a.onmouseenter = function(A) {
                    this.reportButton.onmouseoutAction(), this.onmouseoverAction(), A && A.stopPropagation()
                }
            }
        }, A.reset = function() {
            if (o.tr[0].childNodes.length > 0) {
                A.buttons = {};
                while (o.tr[0].childNodes.length > 0) o.tr[0].removeChild(o.tr[0].childNodes[o.tr[0].childNodes.length - 1])
            }
            A.changeVisibleState(!1)
        }, A
    }, StiJsViewer.prototype.DropDownList = function(A, t, e, o, i, s) {
        var n = this.CreateHTMLTable();
        n.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (n.style.color = this.options.toolbar.fontColor), n.jsObject = this, n.name = A, n.key = null, n.imageCell = null, n.readOnly = i, n.items = null == o ? {} : o, n.isEnabled = !0, n.isSelected = !1, n.isOver = !1, n.isFocused = !1, n.fullWidth = t + 2, e && n.setAttribute("title", e);
        var a = t - (this.options.isTouchDevice ? 23 : 15) - (s ? 38 : 0);
        return n.className = "stiJsViewerDropDownList", A && (this.controls.dropDownLists || (this.controls.dropDownLists = {}), this.controls.dropDownLists[A] = n), s && (n.image = document.createElement("div"), n.image.dropDownList = n, n.image.jsObject = this, n.image.className = "stiJsViewerDropDownListImage", n.imageCell.style.lineHeight = "0", n.imageCell = n.addCell(n.image), i && (n.image.onclick = function() {
            this.isTouchEndFlag || this.jsObject.options.isTouchClick || this.dropDownList.button.onclick()
        }, n.image.ontouchend = function() {
            var A = this;
            this.isTouchEndFlag = !0, clearTimeout(this.isTouchEndTimer), this.dropDownList.button.ontouchend(), this.isTouchEndTimer = setTimeout(function() {
                A.isTouchEndFlag = !1
            }, 1e3)
        })), n.textBox = document.createElement("input"), n.textBox.jsObject = this, n.addCell(n.textBox), n.textBox.style.width = a + "px", n.textBox.dropDownList = n, n.textBox.readOnly = i, n.textBox.style.border = 0, n.textBox.style.cursor = i ? "default" : "text", n.textBox.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (n.textBox.style.color = this.options.toolbar.fontColor), n.textBox.style.height = this.options.isTouchDevice ? "23px" : "18px", n.textBox.style.lineHeight = n.textBox.style.height, n.textBox.className = "stiJsViewerDropDownList_TextBox", i && (n.textBox.onclick = function() {
            this.isTouchEndFlag || this.jsObject.options.isTouchDevice || this.jsObject.options.isTouchClick || this.dropDownList.button.onclick()
        }, n.textBox.ontouchend = function() {
            var A = this;
            this.isTouchEndFlag = !0, clearTimeout(this.isTouchEndTimer), this.dropDownList.button.ontouchend(), this.isTouchEndTimer = setTimeout(function() {
                A.isTouchEndFlag = !1
            }, 1e3)
        }), n.textBox.action = function() {
            this.dropDownList.readOnly || (this.dropDownList.setKey(this.value), this.dropDownList.action())
        }, n.textBox.onfocus = function() {
            this.isFocused = !0, this.dropDownList.isFocused = !0, this.dropDownList.setSelected(!0)
        }, n.textBox.onblur = function() {
            this.isFocused = !1, this.dropDownList.isFocused = !1, this.dropDownList.setSelected(!1), this.action()
        }, n.textBox.onkeypress = function(A) {
            if (this.dropDownList.readOnly) return !1;
            if (A && 13 == A.keyCode) return this.action(), !1
        }, n.button = this.SmallButton(null, null, "ButtonArrowDown.png", null, null, "stiJsViewerDropDownListButton"), n.button.style.height = this.isTouchDevice ? "26px" : "21px", n.addCell(n.button), n.button.dropDownList = n, n.button.action = function() {
            this.dropDownList.menu.visible ? this.dropDownList.menu.changeVisibleState(!1) : (this.dropDownList.menu.isDinamic && this.dropDownList.menu.addItems(this.dropDownList.items), this.dropDownList.menu.changeVisibleState(!0))
        }, n.menu = this.DropDownListMenu(n), this.controls.mainPanel.appendChild(n.menu), n.menu.isDinamic = null == o, null != o && n.menu.addItems(o), n.onmouseover = function() {
            this.jsObject.options.isTouchDevice || this.onmouseenter()
        }, n.onmouseout = function() {
            this.jsObject.options.isTouchDevice || this.onmouseleave()
        }, n.onmouseenter = function() {
            if (!this.isEnabled) return;
            this.isOver = !0, this.isSelected || this.isFocused || (this.className = "stiJsViewerDropDownListOver")
        }, n.onmouseleave = function() {
            if (!this.isEnabled) return;
            this.isOver = !1, this.isSelected || this.isFocused || (this.className = "stiJsViewerDropDownList")
        }, n.setEnabled = function(A) {
            this.isEnabled = A, this.button.setEnabled(A), this.textBox.disabled = !A, this.textBox.style.visibility = A ? "visible" : "hidden", this.className = A ? "stiJsViewerDropDownList" : "stiJsViewerDropDownListDisabled", this.imageCell && (this.image.style.visibility = A ? "visible" : "hidden")
        }, n.setSelected = function(A) {
            this.isSelected = A, this.className = A ? "stiJsViewerDropDownListOver" : this.isEnabled ? this.isOver ? "stiJsViewerDropDownListOver" : "stiJsViewerDropDownList" : "stiJsViewerDropDownListDisabled"
        }, n.setKey = function(A) {
            this.key = A;
            for (var t in this.items)
                if (A == this.items[t].key) return this.textBox.value = this.items[t].caption, void(this.image && (this.image.style.background = "url(" + this.jsObject.collections.images[this.items[t].imageName] + ")"));
            this.textBox.value = A.toString()
        }, n.haveKey = function(A) {
            for (var t in this.items)
                if (this.items[t].key == A) return !0;
            return !1
        }, n.action = function() {}, n
    }, StiJsViewer.prototype.DropDownListMenu = function(A) {
        var t = this.VerticalMenu(A.name, A.button, "Down", A.items, "stiJsViewerMenuStandartItem", "stiJsViewerDropdownMenu");
        return t.dropDownList = A, t.innerContent.style.minWidth = A.fullWidth + "px", t.changeVisibleState = function(t) {
            var e = "stiJsViewerMainPanel";
            if (t) {
                this.onshow(), this.style.display = "", this.visible = !0, this.style.overflow = "hidden", this.parentButton.dropDownList.setSelected(!0), this.parentButton.setSelected(!0), this.jsObject.options.currentDropDownListMenu = this, this.style.width = this.innerContent.offsetWidth + "px", this.style.height = this.innerContent.offsetHeight + "px", this.style.left = this.jsObject.FindPosX(this.parentButton.dropDownList, e) + 1 + "px";
                var o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    i = this.jsObject.FindPosY(A) + A.offsetHeight + this.offsetHeight > o && this.jsObject.FindPosY(A) - this.offsetHeight > 0 ? "Up" : "Down";
                this.style.top = "Down" == i ? this.jsObject.FindPosY(A, e) + this.parentButton.offsetHeight + 2 + "px" : this.jsObject.FindPosY(A, e) - this.offsetHeight + "px", this.innerContent.style.top = ("Down" == i ? -this.innerContent.offsetHeight : this.innerContent.offsetHeight) + "px", d = new Date;
                var s = d.getTime();
                this.jsObject.options.toolbar.menuAnimation && (s += this.jsObject.options.menuAnimDuration), this.jsObject.ShowAnimationVerticalMenu(this, 0, s)
            } else clearTimeout(this.innerContent.animationTimer), this.visible = !1, this.parentButton.dropDownList.setSelected(!1), this.parentButton.setSelected(!1), this.style.display = "none", this.jsObject.options.currentDropDownListMenu == this && (this.jsObject.options.currentDropDownListMenu = null)
        }, t.onmousedown = function() {
            this.isTouchStartFlag || this.ontouchstart(!0)
        }, t.ontouchstart = function(A) {
            var t = this;
            this.isTouchStartFlag = !A, clearTimeout(this.isTouchStartTimer), this.jsObject.options.dropDownListMenuPressed = this, this.isTouchStartTimer = setTimeout(function() {
                t.isTouchStartFlag = !1
            }, 1e3)
        }, t.action = function(A) {
            this.changeVisibleState(!1), this.dropDownList.key = A.key, this.dropDownList.textBox.value = A.caption.innerHTML, this.dropDownList.image && (this.dropDownList.image.style.background = "url(" + this.jsObject.collections.images[A.imageName] + ")"), this.dropDownList.action()
        }, t.onshow = function() {
            if (null == this.dropDownList.key) return;
            for (var A in this.items) {
                if (this.dropDownList.key == this.items[A].key) return void this.items[A].setSelected(!0);
                this.items[A].setSelected(!1)
            }
        }, t
    }, StiJsViewer.prototype.InitializeFindPanel = function() {
        var A = document.createElement("div");
        A.style.display = "none", A.controls = {}, this.controls.findPanel = A, this.controls.mainPanel.appendChild(A), A.jsObject = this, A.className = "stiJsViewerToolBar", "Separated" == this.options.toolbar.displayMode && (A.className += " stiJsViewerToolBarSeparated");
        var t = document.createElement("div");
        A.innerContent = t, A.appendChild(t), "Simple" == this.options.toolbar.displayMode && (t.style.paddingTop = "2px");
        var e = document.createElement("div");
        t.appendChild(e), e.className = "stiJsViewerToolBarTable", "Separated" == this.options.toolbar.displayMode && (e.style.border = "0px"), e.style.boxSizing = "border-box";
        var o = this.CreateHTMLTable();
        e.appendChild(o), o.style.margin = "0";
        for (var i = [
                ["close", this.SmallButton(null, null, "CloseFindPanel.png", null), "2px"],
                ["text", this.TextBlock(this.collections.loc.FindWhat), "2px"],
                ["findTextBox", this.TextBox(null, 170), "2px"],
                ["findPreviows", this.SmallButton(null, this.collections.loc.FindPrevious, "ArrowUpBlue.png"), "2px"],
                ["findNext", this.SmallButton(null, this.collections.loc.FindNext, "ArrowDownBlue.png"), "2px"],
                ["matchCase", this.SmallButton(null, this.collections.loc.MatchCase.replace("&", ""), null), "2px"],
                ["matchWholeWord", this.SmallButton(null, this.collections.loc.MatchWholeWord.replace("&", ""), null), "2px"]
            ], s = 0; s < i.length; s++) A.controls[i[s][0]] = i[s][1], o.addCell(i[s][1]), i[s][1].style.margin = i[s][2], "Separated" == this.options.toolbar.displayMode && "text" != i[s][0] && "findTextBox" != i[s][0] && (i[s][1].style.height = "28px");
        var n = function(t) {
            if ("" == A.controls.findTextBox.value) return void A.jsObject.hideFindLabels();
            A.jsObject.controls.findHelper.lastFindText != A.controls.findTextBox.value || A.jsObject.options.changeFind ? A.jsObject.showFindLabels(A.controls.findTextBox.value) : A.jsObject.selectFindLabel(t)
        };
        A.controls.close.action = function() {
            A.changeVisibleState(!1)
        }, A.controls.findTextBox.onkeyup = function(A) {
            A && 13 == A.keyCode && n("Next")
        }, A.controls.matchCase.action = function() {
            this.setSelected(!this.isSelected), this.jsObject.options.changeFind = !0
        }, A.controls.matchWholeWord.action = function() {
            this.setSelected(!this.isSelected), this.jsObject.options.changeFind = !0
        }, A.controls.findPreviows.action = function() {
            n("Previows")
        }, A.controls.findNext.action = function() {
            n("Next")
        }, A.changeVisibleState = function(t) {
            var e = this.jsObject.options,
                o = this.jsObject.controls;
            t || this.jsObject.hideFindLabels(), this.style.display = t ? "" : "none", t && (A.jsObject.controls.findHelper && (A.jsObject.controls.findHelper.lastFindText = ""), A.controls.findTextBox.value = "", A.controls.findTextBox.focus()), e.toolbar.showFindButton && o.toolbar.controls.Find.setSelected(t), o.parametersPanel && (o.parametersPanel.style.top = (e.toolbar.visible ? o.toolbar.offsetHeight : 0) + (o.drillDownPanel ? o.drillDownPanel.offsetHeight : 0) + (o.findPanel ? o.findPanel.offsetHeight : 0) + "px"), o.bookmarksPanel && (o.bookmarksPanel.style.top = (e.toolbar.visible ? o.toolbar.offsetHeight : 0) + (o.findPanel ? o.findPanel.offsetHeight : 0) + (o.drillDownPanel ? o.drillDownPanel.offsetHeight : 0) + (o.parametersPanel && "Top" == e.appearance.parametersPanelPosition ? o.parametersPanel.offsetHeight : 0) + "px"), o.reportPanel.style.marginTop = (o.parametersPanel && "Top" == e.appearance.parametersPanelPosition ? o.parametersPanel.offsetHeight : 0) + ("absolute" == o.reportPanel.style.position && o.drillDownPanel ? o.drillDownPanel.offsetHeight : 0) + ("absolute" == o.reportPanel.style.position && o.findPanel ? o.findPanel.offsetHeight : 0) + "px"
        }
    }, StiJsViewer.prototype.FormButton = function(A, t, e, o) {
        var i = this.SmallButton(A, t || "", e, null, null, "stiJsViewerFormButton");
        return i.innerTable.style.width = "100%", i.style.minWidth = (o || 80) + "px", i.caption.style.textAlign = "center", i
    }, StiJsViewer.prototype.GroupPanel = function(A, t, e, o) {
        var i = document.createElement("div");
        i.style.fontFamily = this.options.toolbar.fontFamily, i.style.color = this.options.toolbarFontColor, i.jsObject = this, e && (i.style.minWidth = e + "px"), i.style.overflow = "hidden", i.isOpened = t;
        var s = this.FormButton(null, A, t ? "ArrowDownGray.png" : "ArrowRight.png");
        s.imageCell.style.width = "1px", s.caption && (s.caption.style.textAlign = "left", s.caption.style.padding = "0 15px 0 5px"), i.appendChild(s);
        var n = document.createElement("div");
        return o && (n.style.padding = o), n.style.display = t ? "" : "none", n.className = "stiJsViewerGroupPanelContainer", i.container = n, i.appendChild(n), i.changeOpeningState = function(A) {
            i.isOpened = A, s.image.src = i.jsObject.collections.images[A ? "ArrowDownGray.png" : "ArrowRight.png"], n.style.display = A ? "" : "none"
        }, s.action = function() {
            i.isOpened = !i.isOpened, s.image.src = i.jsObject.collections.images[i.isOpened ? "ArrowDownGray.png" : "ArrowRight.png"], i.style.height = (i.isOpened ? s.offsetHeight : s.offsetHeight + n.offsetHeight) + "px", i.isOpened && (n.style.display = ""), i.jsObject.animate(i, {
                duration: 150,
                animations: [{
                    style: "height",
                    start: i.isOpened ? s.offsetHeight : s.offsetHeight + n.offsetHeight,
                    end: i.isOpened ? s.offsetHeight + n.offsetHeight : s.offsetHeight,
                    postfix: "px",
                    finish: function() {
                        n.style.display = i.isOpened ? "" : "none", i.style.height = ""
                    }
                }]
            })
        }, i
    }, StiJsViewer.prototype.CreateHTMLTable = function(A, t) {
        var e = document.createElement("table");
        return e.jsObject = this, this.clearStyles(e), e.cellPadding = 0, e.cellSpacing = 0, e.tbody = document.createElement("tbody"), e.appendChild(e.tbody), e.tr = [], e.tr[0] = document.createElement("tr"), this.clearStyles(e.tr[0]), e.tbody.appendChild(e.tr[0]), e.addCell = function(A) {
            var t = document.createElement("td");
            return this.jsObject.clearStyles(t), this.tr[0].appendChild(t), A && t.appendChild(A), t
        }, e.addCellInNextRow = function(A) {
            var t = this.tr.length;
            this.tr[t] = document.createElement("tr"), this.jsObject.clearStyles(this.tr[t]), this.tbody.appendChild(this.tr[t]);
            var e = document.createElement("td");
            return this.jsObject.clearStyles(e), this.tr[t].appendChild(e), A && e.appendChild(A), e
        }, e.addCellInLastRow = function(A) {
            var t = this.tr.length,
                e = document.createElement("td");
            return this.jsObject.clearStyles(e), this.tr[t - 1].appendChild(e), A && e.appendChild(A), e
        }, e.addTextCellInLastRow = function(A) {
            var t = this.tr.length,
                e = document.createElement("td");
            return this.jsObject.clearStyles(e), this.tr[t - 1].appendChild(e), e.innerHTML = A, e
        }, e.addCellInRow = function(A, t) {
            var e = document.createElement("td");
            return this.jsObject.clearStyles(e), this.tr[A].appendChild(e), t && e.appendChild(t), e
        }, e.addTextCell = function(A) {
            var t = document.createElement("td");
            return this.jsObject.clearStyles(t), this.tr[0].appendChild(t), t.innerHTML = A, t
        }, e.addRow = function() {
            var A = this.tr.length;
            return this.tr[A] = document.createElement("tr"), this.jsObject.clearStyles(this.tr[A]), this.tbody.appendChild(this.tr[A]), this.tr[A]
        }, e
    }, StiJsViewer.prototype.TextBlock = function(A) {
        var t = document.createElement("div");
        return t.style.fontFamily = this.options.toolbar.fontFamily, t.style.fontSize = "12px", t.style.paddingTop = "2px", t.innerHTML = A, t
    }, StiJsViewer.prototype.InitializeInteractions = function(A) {
        A.getComponentOffset = function(A) {
            var t = 0,
                e = 0,
                o = A;
            while (A && !isNaN(A.offsetLeft) && !isNaN(A.offsetTop) && (A == o || "" == A.style.position || "static" == A.style.position)) t += A.offsetLeft - A.scrollLeft, e += A.offsetTop - A.scrollTop, A = A.offsetParent;
            return {
                top: e,
                left: t
            }
        }, A.paintSortingArrow = function(A, t) {
            var e = document.createElement("img");
            e.src = "asc" == t ? this.jsObject.collections.images["ArrowDown.png"] : this.jsObject.collections.images["ArrowUp.png"];
            var o = this.jsObject.reportParams.zoom / 100 * 9,
                i = this.jsObject.reportParams.zoom / 100 * 5;
            e.style.position = "absolute", e.style.width = o + "px", e.style.height = i + "px", A.appendChild(e);
            var s = A.style.position,
                n = A.className;
            A.style.position = "relative", n || (A.className = "stiSortingParentElement");
            var a = this.jsObject.FindPosX(e, A.className),
                r = this.jsObject.FindPosY(e, A.className);
            e.style.marginLeft = A.offsetWidth - a - o - this.jsObject.reportParams.zoom / 100 * 3 + "px", e.style.marginTop = A.offsetHeight / 2 - i / 2 - r + "px", A.style.position = s, A.className = n
        }, A.paintCollapsingIcon = function(t, e) {
            var o = document.createElement("img");
            o.src = e ? this.jsObject.collections.images["CollapsingPlus.png"] : this.jsObject.collections.images["CollapsingMinus.png"], o.style.position = "absolute";
            var i = this.jsObject.reportParams.zoom / 100 * 10,
                s = this.jsObject.reportParams.zoom / 100 * 10;
            o.style.width = i + "px", o.style.height = s + "px", t.appendChild(o);
            var n = A.getComponentOffset(t),
                a = A.getComponentOffset(o);
            o.style.marginLeft = n.left - a.left + i / 3 + "px", o.style.marginTop = n.top - a.top + i / 3 + "px"
        }, A.postInteractionSorting = function(A, t) {
            var e = {
                action: "Sorting",
                sortingParameters: {
                    ComponentName: A.getAttribute("interaction") + ";" + t.toString(),
                    DataBand: A.getAttribute("databandsort")
                }
            };
            this.jsObject.controls.parametersPanel && (e.variables = this.jsObject.controls.parametersPanel.getParametersValues()), this.jsObject.postInteraction(e)
        }, A.postInteractionDrillDown = function(A) {
            var t = {
                action: "DrillDown",
                drillDownParameters: {
                    ComponentIndex: A.getAttribute("compindex"),
                    ElementIndex: A.getAttribute("elementindex"),
                    PageIndex: A.getAttribute("pageindex"),
                    PageGuid: A.getAttribute("pageguid"),
                    ReportFile: A.getAttribute("reportfile")
                }
            };
            this.jsObject.postInteraction(t)
        }, A.postInteractionCollapsing = function(A) {
            var t = A.getAttribute("interaction"),
                e = A.getAttribute("compindex"),
                o = "true" != A.getAttribute("collapsed");
            this.jsObject.reportParams.interactionCollapsingStates || (this.jsObject.reportParams.interactionCollapsingStates = {}), this.jsObject.reportParams.interactionCollapsingStates[t] || (this.jsObject.reportParams.interactionCollapsingStates[t] = {}), this.jsObject.reportParams.interactionCollapsingStates[t][e] = o;
            var i = {
                action: "Collapsing",
                collapsingParameters: {
                    ComponentName: t,
                    InteractionCollapsingStates: this.jsObject.reportParams.interactionCollapsingStates
                }
            };
            this.jsObject.controls.parametersPanel && (i.variables = this.jsObject.controls.parametersPanel.getParametersValues()), this.jsObject.postInteraction(i)
        };
        for (var t = A.querySelectorAll ? A.querySelectorAll("td,rect,path,ellipse") : A.getElementsByTagName("td"), e = [], o = 0; o < t.length; o++)
            if (t[o].getAttribute("interaction") && (t[o].getAttribute("pageguid") || t[o].getAttribute("reportfile") || t[o].getAttribute("collapsed") || t[o].getAttribute("databandsort"))) {
                t[o].style.cursor = "pointer", t[o].jsObject = this;
                var i = t[o].getAttribute("sort");
                i && A.paintSortingArrow(t[o], i);
                var s = t[o].getAttribute("collapsed");
                if (s) {
                    var n = t[o].getAttribute("compindex") + "|" + t[o].getAttribute("interaction");
                    e.indexOf(n) < 0 && (A.paintCollapsingIcon(t[o], "true" == s), e.push(n))
                }
                t[o].onclick = function(t) {
                    this.getAttribute("pageguid") || this.getAttribute("reportfile") ? A.postInteractionDrillDown(this) : this.getAttribute("collapsed") ? A.postInteractionCollapsing(this) : A.postInteractionSorting(this, t.ctrlKey)
                }, (t[o].getAttribute("pageguid") || t[o].getAttribute("reportfile")) && (t[o].onmouseover = function(A) {
                    this.style.opacity = .75
                }, t[o].onmouseout = function(A) {
                    this.style.opacity = 1
                })
            }
    }, StiJsViewer.prototype.InitializeJsViewer = function() {
        this.controls.viewer.jsObject = this, this.controls.viewer.pressedDown = function() {
            var A = this.jsObject.options;
            this.jsObject.removeBookmarksLabel(), null != A.currentMenu && (A.menuPressed == A.currentMenu || A.currentMenu.parentButton == A.buttonPressed || A.datePickerPressed || A.dropDownListMenuPressed || A.currentMenu.changeVisibleState(!1)), null != A.currentDropDownListMenu && A.dropDownListMenuPressed != A.currentDropDownListMenu && A.currentDropDownListMenu.parentButton != A.buttonPressed && A.currentDropDownListMenu.changeVisibleState(!1), null != A.currentDatePicker && A.datePickerPressed != A.currentDatePicker && A.currentDatePicker.parentButton != A.buttonPressed && A.currentDatePicker.changeVisibleState(!1), A.buttonPressed = !1, A.menuPressed = !1, A.formPressed = !1, A.dropDownListMenuPressed = !1, A.disabledPanelPressed = !1, A.datePickerPressed = !1, A.fingerIsMoved = !1
        }, this.controls.viewer.onmousedown = function() {
            if (this.isTouchStartFlag) return;
            this.jsObject.options.isTouchClick = !1, this.pressedDown()
        }, this.controls.viewer.ontouchstart = function() {
            var A = this;
            this.isTouchStartFlag = !0, clearTimeout(this.isTouchStartTimer), this.jsObject.options.buttonsTimer && (clearTimeout(this.jsObject.options.buttonsTimer[2]), this.jsObject.options.buttonsTimer[0].className = this.jsObject.options.buttonsTimer[1], this.jsObject.options.buttonsTimer = null), this.jsObject.options.isTouchClick = !0, this.pressedDown(), this.isTouchStartTimer = setTimeout(function() {
                A.isTouchStartFlag = !1
            }, 1e3)
        }, this.controls.viewer.onmouseup = function() {
            if (this.isTouchEndFlag) return;
            this.ontouchend()
        }, this.controls.viewer.ontouchend = function() {
            var A = this;
            this.isTouchEndFlag = !0, clearTimeout(this.isTouchEndTimer), this.jsObject.options.fingerIsMoved = !1, this.isTouchEndTimer = setTimeout(function() {
                A.isTouchEndFlag = !1
            }, 1e3)
        }, this.controls.viewer.ontouchmove = function() {
            this.jsObject.options.fingerIsMoved = !0
        }
    }, StiJsViewer.prototype.CreateParameter = function(A) {
        var t = this.CreateHTMLTable();
        this.options.parameters[A.name] = t, t.params = A, t.controls = {}, t.jsObject = this, t.params.isNull = !1, t.menu = null, t.addCell = function(A) {
            var e = document.createElement("td");
            return e.style.height = t.jsObject.options.parameterRowHeight + "px", e.style.padding = "0px 2px 0 2px", this.tr[0].appendChild(e), A && e.appendChild(A), e
        }, t.oldAddCellInNextRow = t.addCellInNextRow, t.addCellInNextRow = function(A) {
            var e = this.oldAddCellInNextRow(A);
            return e.style.height = t.jsObject.options.parameterRowHeight + "px", e.style.padding = "0px 2px 0 2px", e
        }, t.oldAddCellInLastRow = t.addCellInLastRow, t.addCellInLastRow = function(A) {
            var e = this.oldAddCellInLastRow(A);
            return e.style.height = t.jsObject.options.parameterRowHeight + "px", e.style.padding = "0px 2px 0 2px", e
        };
        var e = "Range" == t.params.basicType && "Left" == this.options.appearance.parametersPanelPosition;
        if ("Bool" != t.params.type || "Value" != t.params.basicType && "NullableValue" != t.params.basicType || t.addCell(this.CreateBoolCheckBox(t)), "Range" == t.params.basicType && (t.addCell().innerHTML = this.collections.loc.RangeFrom), "Bool" == t.params.type && "List" != t.params.basicType || t.addCell(this.CreateFirstTextBox(t)), "DateTime" == t.params.type && t.params.allowUserValues && "List" != t.params.basicType && "Range" != t.params.basicType && t.addCell(this.CreateFirstDateTimeButton(t)), "Guid" == t.params.type && t.params.allowUserValues && "List" != t.params.basicType && t.addCell(this.CreateFirstGuidButton(t)), "Range" == t.params.basicType) {
            (e ? t.addCellInNextRow() : t.addCell()).innerHTML = this.collections.loc.RangeTo
        }
        if ("Range" == t.params.basicType && t.addCellInLastRow(this.CreateSecondTextBox(t)), "Range" == t.params.basicType && "DateTime" == t.params.type && t.params.allowUserValues && t.addCellInLastRow(this.CreateSecondDateTimeButton(t)), "Range" == t.params.basicType && "Guid" == t.params.type && t.params.allowUserValues && t.addCellInLastRow(this.CreateSecondGuidButton(t)), (null != t.params.items || "List" == t.params.basicType && t.params.allowUserValues) && t.addCellInLastRow(this.CreateDropDownButton(t)), "NullableValue" == t.params.basicType && t.params.allowUserValues && t.addCellInLastRow(this.CreateNullableCheckBox(t)), "NullableValue" == t.params.basicType && t.params.allowUserValues) {
            var o = t.addCellInLastRow();
            o.innerHTML = "Null", o.style.padding = "0px"
        }
        return t.setEnabled = function(A) {
            this.params.isNull = !A;
            for (var t in this.controls) "nullableCheckBox" != t && this.controls[t].setEnabled(A)
        }, t.changeVisibleStateMenu = function(A) {
            if (A) {
                var e = null;
                switch (this.params.basicType) {
                    case "Value":
                    case "NullableValue":
                        e = this.jsObject.parameterMenuForValue(this);
                        break;
                    case "Range":
                        e = this.jsObject.parameterMenuForRange(this);
                        break;
                    case "List":
                        e = this.params.allowUserValues ? this.jsObject.parameterMenuForEditList(this) : this.jsObject.parameterMenuForNotEditList(this);
                        break
                }
                null != e && e.changeVisibleState(!0)
            } else null != t.menu && (t.params.allowUserValues && "List" == t.params.basicType && t.menu.updateItems(), t.menu.changeVisibleState(!1))
        }, t.getStringDateTime = function(A) {
            return A.month + "/" + A.day + "/" + A.year + " " + (A.hours > 12 ? A.hours - 12 : A.hours) + ":" + A.minutes + ":" + A.seconds + " " + (A.hours < 12 ? "AM" : "PM")
        }, t.getValue = function() {
            var A = null;
            if (t.params.isNull) return null;
            if ("Value" == t.params.basicType || "NullableValue" == t.params.basicType) {
                if ("Bool" == t.params.type) return t.controls.boolCheckBox.isChecked;
                if ("DateTime" == t.params.type) return this.getStringDateTime(t.params.key);
                A = t.params.allowUserValues ? t.controls.firstTextBox.value : t.params.key
            }
            if ("Range" == t.params.basicType && (A = {}, A.from = "DateTime" == t.params.type ? this.getStringDateTime(t.params.key) : t.controls.firstTextBox.value, A.to = "DateTime" == t.params.type ? this.getStringDateTime(t.params.keyTo) : t.controls.secondTextBox.value), "List" == t.params.basicType)
                if (A = [], t.params.allowUserValues)
                    for (var e in t.params.items) A[e] = "DateTime" == t.params.type ? this.getStringDateTime(t.params.items[e].key) : t.params.items[e].key;
                else {
                    num = 0;
                    for (var e in t.params.items) t.params.items[e].isChecked && (A[num] = "DateTime" == t.params.type ? this.getStringDateTime(t.params.items[e].key) : t.params.items[e].key, num++)
                }
            return A
        }, t.getDateTimeForReportServer = function(A) {
            var e = new Date(A.year, A.month - 1, A.day, A.hours, A.minutes, A.seconds);
            return (t.jsObject.options.cloudReportsClient.options.const_dateTime1970InTicks + 1e4 * e).toString()
        }, t.getTimeSpanForReportServer = function(A) {
            var e = t.jsObject,
                o = A.split(":"),
                i = o[0].split(".");
            return (1e4 * (864e5 * (i.length > 1 ? e.strToInt(i[0]) : 0) + 36e5 * e.strToInt(i.length > 1 ? i[1] : i[0]) + 6e4 * (o.length > 1 ? e.strToInt(o[1]) : 0) + 1e3 * (o.length > 2 ? e.strToInt(o[2]) : 0))).toString()
        }, t.getSingleValueForReportServer = function() {
            var A = null;
            if (t.params.isNull) return null;
            if ("Value" == t.params.basicType || "NullableValue" == t.params.basicType) {
                if ("Bool" == t.params.type) return t.controls.boolCheckBox.isChecked ? "True" : "False";
                if ("DateTime" == t.params.type) return t.getDateTimeForReportServer(t.params.key);
                A = t.params.allowUserValues ? t.controls.firstTextBox.value : t.params.key, "TimeSpan" == t.params.type && (A = t.getTimeSpanForReportServer(A))
            }
            return A
        }, t.getRangeValuesForReportServer = function() {
            var A = {};
            return A.from = "DateTime" == t.params.type ? t.getDateTimeForReportServer(t.params.key) : "TimeSpan" == t.params.type ? t.getTimeSpanForReportServer(t.controls.firstTextBox.value) : t.controls.firstTextBox.value, A.to = "DateTime" == t.params.type ? t.getDateTimeForReportServer(t.params.keyTo) : "TimeSpan" == t.params.type ? t.getTimeSpanForReportServer(t.controls.secondTextBox.value) : t.controls.secondTextBox.value, A
        }, t.getListValuesForReportServer = function() {
            var A = [],
                e = 0;
            for (var o in t.params.items) {
                var i = {};
                i.Ident = "Single", (t.params.allowUserValues || !t.params.allowUserValues && t.params.items[o].isChecked) && (i.Value = "DateTime" == t.params.type ? t.getDateTimeForReportServer(t.params.items[o].key) : "TimeSpan" == t.params.type ? t.getTimeSpanForReportServer(t.params.items[o].key) : t.params.items[o].key, i.Type = null == i.Value ? null : t.getSingleType(), A.push(i))
            }
            return A
        }, t.getParameterObjectForReportServer = function() {
            var A = {};
            switch (A.Ident = -1 != t.params.basicType.indexOf("Value") ? "Single" : t.params.basicType, A.Name = t.params.name, A.Ident) {
                case "Single":
                    A.Value = t.getSingleValueForReportServer(), A.Type = null == A.Value ? null : t.getSingleType();
                    break;
                case "Range":
                    var e = t.getRangeValuesForReportServer();
                    A.FromValue = e.from, A.ToValue = e.to, A.RangeType = t.params.type + "Range", A.FromType = null == A.FromValue ? null : t.getSingleType(), A.ToType = null == A.ToValue ? null : t.getSingleType();
                    break;
                case "List":
                    A.ListType = t.params.type + "List", A.Values = t.getListValuesForReportServer();
                    break
            }
            return A
        }, t.getSingleType = function() {
            var A = t.params.type;
            if ("DateTime" != A && "TimeSpan" != A && "Guid" != A && "Decimal" != A) return A.toLowerCase();
            return A
        }, t.controls.nullableCheckBox && "DateTime" == t.params.type && null == t.params.value && t.controls.nullableCheckBox.setChecked(!0), t
    }, StiJsViewer.prototype.CreateBoolCheckBox = function(A) {
        var t = this.ParameterCheckBox(A);
        return A.controls.boolCheckBox = t, t.setChecked("boolean" == typeof A.params.value && A.params.value || "true" == A.params.value || "True" == A.params.value), t.setEnabled(A.params.allowUserValues), t
    }, StiJsViewer.prototype.CreateFirstTextBox = function(A) {
        var t = this.ParameterTextBox(A);
        if (A.controls.firstTextBox = t, t.setReadOnly("List" == A.params.basicType || !A.params.allowUserValues), "Value" != A.params.basicType && "NullableValue" != A.params.basicType || ("DateTime" == A.params.type && null == A.params.value && (A.params.key = this.getDateTimeObject(new Date)), t.value = "DateTime" == A.params.type ? this.getStringKey(A.params.key, A) : A.params.value), "Range" == A.params.basicType && ("DateTime" == A.params.type && A.params.key && A.params.key.isNull && (A.params.key = this.getDateTimeObject(new Date)), t.value = this.getStringKey(A.params.key, A)), "List" == A.params.basicType)
            for (var e in A.params.items) {
                var o = !0;
                A.params.value instanceof Array && A.params.value.indexOf(A.params.items[e].value) < 0 && (o = !1), A.params.items[e].isChecked = o, o && ("" != t.value && (t.value += ";"), A.params.allowUserValues ? t.value += this.getStringKey(A.params.items[e].key, A) : t.value += "" != A.params.items[e].value ? A.params.items[e].value : this.getStringKey(A.params.items[e].key, A))
            }
        return t
    }, StiJsViewer.prototype.CreateFirstDateTimeButton = function(A) {
        var t = this.ParameterButton("DateTimeButton", A);
        return A.controls.firstDateTimeButton = t, t.action = function() {
            var A = t.jsObject.controls.datePicker;
            A.ownerValue = this.parameter.params.key, A.showTime = "Date" != this.parameter.params.dateTimeType, A.parentDataControl = this.parameter.controls.firstTextBox, A.parentButton = this, A.changeVisibleState(!A.visible)
        }, t
    }, StiJsViewer.prototype.CreateFirstGuidButton = function(A) {
        var t = this.ParameterButton("GuidButton", A);
        return A.controls.firstGuidButton = t, t.action = function() {
            this.parameter.controls.firstTextBox.value = this.parameter.jsObject.newGuid()
        }, t
    }, StiJsViewer.prototype.CreateSecondTextBox = function(A) {
        var t = this.ParameterTextBox(A);
        return A.controls.secondTextBox = t, t.setReadOnly(!A.params.allowUserValues), "DateTime" == A.params.type && A.params.keyTo && A.params.keyTo.isNull && (A.params.keyTo = this.getDateTimeObject(new Date)), t.value = this.getStringKey(A.params.keyTo, A), t
    }, StiJsViewer.prototype.CreateSecondDateTimeButton = function(A) {
        var t = this.ParameterButton("DateTimeButton", A);
        return A.controls.secondDateTimeButton = t, t.action = function() {
            var A = {
                    showTime: "Date" != this.parameter.params.dateTimeType,
                    firstParentDataControl: this.parameter.controls.firstTextBox,
                    firstParentButton: this.parameter.controls.firstDateTimeButton,
                    firstOwnerValue: this.parameter.params.key,
                    secondParentDataControl: this.parameter.controls.secondTextBox,
                    secondParentButton: this,
                    secondOwnerValue: this.parameter.params.keyTo
                },
                e = t.jsObject.InitializeDoubleDatePicker(A);
            e.changeVisibleState(!e.visible, null, "Left" != t.jsObject.options.appearance.parametersPanelPosition, "Left" == t.jsObject.options.appearance.parametersPanelPosition ? 245 : 0)
        }, t
    }, StiJsViewer.prototype.CreateSecondGuidButton = function(A) {
        var t = this.ParameterButton("GuidButton", A);
        return A.controls.secondGuidButton = t, t.action = function() {
            this.parameter.controls.secondTextBox.value = this.parameter.jsObject.newGuid()
        }, t
    }, StiJsViewer.prototype.CreateDropDownButton = function(A) {
        var t = this.ParameterButton("DropDownButton", A);
        return A.controls.dropDownButton = t, t.action = function() {
            this.parameter.changeVisibleStateMenu(null == this.parameter.menu)
        }, t
    }, StiJsViewer.prototype.CreateNullableCheckBox = function(A) {
        var t = this.ParameterCheckBox(A);
        return A.controls.nullableCheckBox = t, t.onChecked = function() {
            this.parameter.setEnabled(!this.isChecked);
            var A = this.isChecked ? "DateTime" == this.parameter.params.type ? "transparent" : "#c6c6c6" : this.jsObject.options.toolbar.fontColor && "Empty" != this.jsObject.options.toolbar.fontColor ? this.jsObject.options.toolbar.fontColor : "#444444";
            this.parameter.controls.firstTextBox && (this.parameter.controls.firstTextBox.style.color = A), this.parameter.controls.secondTextBox && (this.parameter.controls.secondTextBox.style.color = A)
        }, t
    }, StiJsViewer.prototype.InitializeParametersPanel = function() {
        var A = !this.options.isMobileDevice;
        if (this.controls.parametersPanel && (A = this.controls.parametersPanel.visible, this.controls.parametersPanel.isUpdatePanel = !0, this.controls.parametersPanel.changeVisibleState(!1), this.controls.mainPanel.removeChild(this.controls.parametersPanel), delete this.controls.parametersPanel), this.options.toolbar.visible && this.options.toolbar.showParametersButton && this.controls.toolbar.controls.Parameters.setEnabled(null != this.options.paramsVariables), null == this.options.paramsVariables) return;
        var t = document.createElement("div");
        t.menus = {}, this.controls.parametersPanel = t, this.controls.mainPanel.appendChild(t), t.className = "stiJsViewerParametersPanel", "Top" == this.options.appearance.parametersPanelPosition && (t.className += " stiJsViewerParametersPanelTop", "Separated" == this.options.toolbar.displayMode && (t.className += " stiJsViewerParametersPanelSeparatedTop")), t.id = this.controls.viewer.id + "_ParametersPanel", t.style.display = "none", t.visible = !1, t.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (t.style.color = this.options.toolbar.fontColor), t.jsObject = this, t.currentOpeningParameter = null, t.dropDownButtonWasClicked = !1, t.dateTimeButtonWasClicked = !1;
        var e = this.options.toolbar.visible ? this.controls.toolbar.offsetHeight : 0;
        this.options.isMobileDevice && this.options.toolbar.autoHide && (e = 0), e += this.controls.drillDownPanel ? this.controls.drillDownPanel.offsetHeight : 0, e += this.controls.findPanel ? this.controls.findPanel.offsetHeight : 0, t.style.top = e + "px", "Left" == this.options.appearance.parametersPanelPosition && (this.options.isMobileDevice ? t.style.bottom = this.options.toolbar.autoHide ? "0" : "0.5in" : t.style.bottom = "Separated" == this.options.toolbar.displayMode ? "35px" : "0"), this.options.isMobileDevice && (t.style.transition = "opacity 300ms ease");
        var o = document.createElement("div");
        t.appendChild(o), "Simple" == this.options.toolbar.displayMode && (o.style.marginTop = "2px", o.className = "stiJsViewerInnerParametersPanelSimple"), "Left" == this.options.appearance.parametersPanelPosition && (o.className += " stiJsViewerInnerParametersPanelLeft", "Separated" == this.options.toolbar.displayMode && (o.className += " stiJsViewerInnerParametersPanelSeparatedLeft")), t.container = document.createElement("div"), t.container.id = t.id + "Container", t.container.className = "stiJsViewerInnerContainerParametersPanel", t.container.jsObject = this, o.appendChild(t.container), "" != this.options.toolbar.backgroundColor && (t.container.style.background = this.options.toolbar.backgroundColor), "" != this.options.toolbar.borderColor && (t.container.style.border = "1px solid " + this.options.toolbar.borderColor), "Top" == this.options.appearance.parametersPanelPosition && (t.container.style.maxHeight = this.options.appearance.parametersPanelMaxHeight + "px");
        var i = this.CreateHTMLTable();
        t.mainButtons = i, i.setAttribute("align", "right"), i.style.margin = "5px 0 10px 0", i.ID = t.id + "MainButtons", t.mainButtons.reset = this.FormButton("Reset", this.collections.loc.Reset, null, 80), t.mainButtons.submit = this.FormButton("Submit", this.collections.loc.Submit, null, 80), i.addCell(t.mainButtons.reset), i.addCell(t.mainButtons.submit).style.paddingLeft = "10px", this.options.isTouchDevice || (t.container.onscroll = function() {
            t.hideAllMenus()
        }), t.changeVisibleState = function(A) {
            var e = this.jsObject.options,
                o = this.jsObject.controls;
            t.style.display = A ? "" : "none", A || t.hideAllMenus(), t.visible = A, e.toolbar.visible && e.toolbar.showParametersButton && o.toolbar.controls.Parameters.setSelected(A);
            var i = "Top" == this.jsObject.options.appearance.parametersPanelPosition ? t.offsetHeight : 0,
                s = o.findPanel ? o.findPanel.offsetHeight : 0,
                n = o.drillDownPanel ? o.drillDownPanel.offsetHeight : 0,
                a = e.toolbar.visible ? o.toolbar.offsetHeight : 0;
            if (e.isMobileDevice && e.toolbar.autoHide && (a = 0), o.reportPanel.style.marginTop = ("relative" == o.reportPanel.style.position ? i : n + s + i) + "px", null != o.bookmarksPanel && (o.bookmarksPanel.style.top = a + n + s + i + "px"), "Left" == e.appearance.parametersPanelPosition) {
                var r = o.bookmarksPanel && o.bookmarksPanel.visible ? e.appearance.bookmarksTreeWidth : 0;
                t.style.left = r + "px", o.reportPanel.style.marginLeft = (A ? r + t.firstChild.offsetWidth : r) + "px"
            }
            e.isMobileDevice && (A && o.bookmarksPanel && o.bookmarksPanel.changeVisibleState(!1), setTimeout(function() {
                t.style.opacity = A ? "1" : "0", A ? o.reportPanel.hideToolbar() : this.isUpdatePanel || o.reportPanel.showToolbar()
            }))
        }, t.addParameters = function() {
            var A = this.jsObject.copyObject(t.jsObject.options.paramsVariables),
                e = this.jsObject.getCountObjects(A),
                o = e <= 5 ? 1 : t.jsObject.options.appearance.parametersPanelColumnsCount,
                i = parseInt(e / o);
            i * o < e && i++;
            var s = document.createElement("table");
            s.cellPadding = 0, s.cellSpacing = 0, s.style.border = 0;
            var n = document.createElement("tbody");
            s.appendChild(n), this.container.appendChild(s);
            for (var a = {}, r = 0; r < i + 1; r++) {
                var l = document.createElement("tr");
                for (n.appendChild(l), c = 0; c < o; c++) {
                    var h = document.createElement("td");
                    h.style.padding = "0 10px 0 " + (c > 0 ? "30px" : 0), l.appendChild(h);
                    var p = document.createElement("td");
                    p.style.padding = 0, l.appendChild(p), a[r + ";" + c + "name"] = h, a[r + ";" + c + "controls"] = p
                }
            }
            for (var c = 0, r = 0, g = 0; g < e; g++) {
                var u = a[r + ";" + c + "name"];
                u.style.whiteSpace = "nowrap", u.innerHTML = A[g].alias, "Range" == A[g].basicType && "Left" == t.jsObject.options.appearance.parametersPanelPosition && (u.style.verticalAlign = "top", u.style.paddingTop = t.jsObject.options.isTouchDevice ? "11px" : "9px"), a[r + ";" + c + "controls"].appendChild(t.jsObject.CreateParameter(A[g])), r++, g == e - 1 && a[r + ";" + c + "controls"].appendChild(t.mainButtons), r == i && (r = 0, c++)
            }
        }, t.clearParameters = function() {
            while (t.container.childNodes[0]) t.container.removeChild(t.container.childNodes[0])
        }, t.getParametersValues = function() {
            parametersValues = {};
            for (var A in t.jsObject.options.parameters) {
                var e = t.jsObject.options.parameters[A];
                parametersValues[A] = e.getValue()
            }
            return parametersValues
        }, t.hideAllMenus = function() {
            t.jsObject.options.currentMenu && t.jsObject.options.currentMenu.changeVisibleState(!1), t.jsObject.options.currentDatePicker && t.jsObject.options.currentDatePicker.changeVisibleState(!1)
        }, this.options.parameters = {}, t.addParameters(), t.changeVisibleState(A)
    }, StiJsViewer.prototype.ParameterButton = function(A, t) {
        var e = this.SmallButton(null, null, A + ".png", null, null, "stiJsViewerFormButton");
        return e.style.height = this.options.isTouchDevice ? "26px" : "21px", e.style.height = this.options.isTouchDevice ? "26px" : "21px", e.innerTable.style.width = "100%", e.imageCell.style.textAlign = "center", e.parameter = t, e.buttonType = A, e
    }, StiJsViewer.prototype.ParameterTextBox = function(A) {
        var t = this.TextBox(null, null, null, !0);
        t.parameter = A, "Char" == A.params.type && (t.maxLength = 1);
        var e = "210px";
        return "Range" == A.params.basicType ? (e = "140px", "Guid" != A.params.type && "String" != A.params.type || (e = "190px"), "DateTime" == A.params.type && (e = "235px"), "Char" == A.params.type && (e = "60px")) : e = "Guid" == A.params.type ? "265px" : "210px", t.style.width = e, "DateTime" == A.params.type && (t.action = function() {
            if (this.oldValue == this.value) return;
            try {
                var A = (new Date).toLocaleTimeString(),
                    e = A.toLowerCase().indexOf("am") >= 0 || A.toLowerCase().indexOf("pm") >= 0,
                    o = e ? "MM/dd/yyyy" : "dd.MM.yyyy",
                    i = o + (e ? " h:mm:ss tt" : " hh:mm:ss");
                "Date" == t.parameter.params.dateTimeType && (i = o), "Time" == t.parameter.params.dateTimeType && (i = "hh:mm:ss");
                var s = t.jsObject.GetDateTimeFromString(this.value, i),
                    n = t.jsObject.getDateTimeObject(s);
                t.parameter.params[t.parameter.controls.secondTextBox == t ? "keyTo" : "key"] = n, t.value = t.jsObject.dateTimeObjectToString(n, t.parameter.params.dateTimeType)
            } catch (A) {
                alert(A)
            }
        }), t
    },
    StiJsViewer.prototype.ParameterCheckBox = function(A, t) {
        var e = this.CheckBox(null, t);
        return e.parameter = A, e
    }, StiJsViewer.prototype.ParameterMenu = function(A) {
        var t = this.BaseMenu(null, A.controls.dropDownButton, "Down", "stiJsViewerDropdownMenu");
        t.parameter = A, t.changeVisibleState = function(t, e) {
            var o = "stiJsViewerMainPanel";
            if (e && (this.parentButton = e, e.haveMenu = !0), t) {
                this.onshow(), this.style.display = "", this.visible = !0, this.style.overflow = "hidden", this.parentButton.setSelected(!0), this.jsObject.options.currentMenu = this, this.style.width = this.innerContent.offsetWidth + "px", this.style.height = this.innerContent.offsetHeight + "px", this.style.left = this.jsObject.FindPosX(A, o) + "px";
                var i = this.animationDirection,
                    s = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                this.parentButton && "Down" == i && this.jsObject.FindPosY(this.parentButton) + this.parentButton.offsetHeight + this.innerContent.offsetHeight > s && this.jsObject.FindPosY(this.parentButton) - this.innerContent.offsetHeight > 0 && (i = "Up"), this.style.top = "Down" == i ? this.jsObject.FindPosY(this.parentButton, o) + this.parentButton.offsetHeight + 2 + "px" : this.jsObject.FindPosY(this.parentButton, o) - this.offsetHeight + "px", this.innerContent.style.top = ("Down" == i ? -1 : 1) * this.innerContent.offsetHeight + "px", A.menu = this, d = new Date;
                var n = d.getTime();
                this.jsObject.options.toolbar.menuAnimation && (n += this.jsObject.options.menuAnimDuration), this.jsObject.ShowAnimationVerticalMenu(this, "Down" == i ? 0 : -1, n)
            } else this.onHide(), clearTimeout(this.innerContent.animationTimer), this.visible = !1, this.parentButton.setSelected(!1), this.style.display = "none", this.jsObject.controls.mainPanel.removeChild(this), A.menu = null, this.jsObject.options.currentMenu == this && (this.jsObject.options.currentMenu = null)
        };
        var e = this.CreateHTMLTable();
        return e.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (e.style.color = this.options.toolbar.fontColor), e.style.fontSize = "12px", e.style.width = A.offsetWidth - 5 + "px", e.className = "stiJsViewerClearAllStyles stiJsViewerParametersMenuInnerTable", t.innerContent.appendChild(e), t.innerTable = e, t
    }, StiJsViewer.prototype.parameterMenuItem = function(A) {
        var t = document.createElement("div");
        t.jsObject = this, t.parameter = A, t.isOver = !1, t.className = "stiJsViewerParametersMenuItem", t.style.height = this.options.isTouchDevice ? "30px" : "24px";
        var e = this.CreateHTMLTable();
        return e.className = "stiJsViewerClearAllStyles stiJsViewerParametersMenuItemInnerTable", t.appendChild(e), t.onmouseover = function() {
            this.jsObject.options.isTouchDevice || this.onmouseenter()
        }, t.onmouseout = function() {
            this.jsObject.options.isTouchDevice || this.onmouseleave()
        }, t.onmouseenter = function() {
            this.className = "stiJsViewerParametersMenuItemOver", this.isOver = !0
        }, t.onmouseleave = function() {
            this.className = "stiJsViewerParametersMenuItem", this.isOver = !1
        }, t.onmousedown = function() {
            if (this.isTouchStartFlag) return;
            this.className = "stiJsViewerParametersMenuItemPressed"
        }, t.ontouchstart = function() {
            var A = this;
            this.isTouchStartFlag = !0, clearTimeout(this.isTouchStartTimer), this.parameter.jsObject.options.fingerIsMoved = !1, this.isTouchStartTimer = setTimeout(function() {
                A.isTouchStartFlag = !1
            }, 1e3)
        }, t.onmouseup = function() {
            if (this.isTouchEndFlag) return;
            this.parameter.jsObject.TouchEndMenuItem(this.id, !1)
        }, t.ontouchend = function() {
            var A = this;
            this.isTouchEndFlag = !0, clearTimeout(this.isTouchEndTimer), this.parameter.jsObject.TouchEndMenuItem(this.id, !0), this.isTouchEndTimer = setTimeout(function() {
                A.isTouchEndFlag = !1
            }, 1e3)
        }, t.innerContainer = e.addCell(), t.innerContainer.style.padding = "0 5px 0 5px", t
    }, StiJsViewer.prototype.TouchEndMenuItem = function(A, t) {
        var e = document.getElementById(A);
        if (!e || e.parameter.jsObject.options.fingerIsMoved) return;
        if (t) return e.className = "stiJsViewerParametersMenuItemPressed", "undefined" != typeof event && "preventDefault" in event && event.preventDefault(), void setTimeout("js" + e.parameter.jsObject.controls.viewer.id + ".TouchEndMenuItem('" + e.id + "', false)", 200);
        e.className = e.isOver ? "stiJsViewerParametersMenuItemOver" : "stiJsViewerParametersMenuItem", null != e.action && e.action()
    }, StiJsViewer.prototype.parameterMenuSeparator = function() {
        var A = document.createElement("Div");
        return A.className = "stiJsViewerParametersMenuSeparator", A
    }, StiJsViewer.prototype.parameterMenuForValue = function(A) {
        var t = this.ParameterMenu(A);
        for (var e in A.params.items) {
            var o = t.innerTable.addCellInNextRow(),
                i = this.parameterMenuItem(A);
            o.appendChild(i), i.id = A.jsObject.controls.viewer.id + A.params.name + "Item" + e, i.parameter = A, i.key = A.params.items[e].key, i.value = A.params.items[e].value, i.innerContainer.innerHTML = "" != i.value && "DateTime" != A.params.type && "TimeSpan" != A.params.type && "Bool" != A.params.type ? i.value : this.getStringKey(i.key, i.parameter), i.action = function() {
                if (this.parameter.params.key = this.key, "Bool" != this.parameter.params.type ? this.parameter.controls.firstTextBox.value = "DateTime" == this.parameter.params.type || "TimeSpan" == this.parameter.params.type ? this.parameter.jsObject.getStringKey(this.key, this.parameter) : this.parameter.params.allowUserValues ? this.key : "" != this.value ? this.value : this.key : this.parameter.controls.boolCheckBox.setChecked("True" == this.key), this.parameter.changeVisibleStateMenu(!1), this.parameter.params.binding) {
                    var A = {
                        action: "InitVars",
                        variables: this.jsObject.controls.parametersPanel.getParametersValues()
                    };
                    this.jsObject.postInteraction(A)
                }
            }
        }
        return t
    }, StiJsViewer.prototype.parameterMenuForRange = function(A) {
        var t = this.ParameterMenu(A);
        for (var e in A.params.items) {
            var o = t.innerTable.addCellInNextRow(),
                i = this.parameterMenuItem(A);
            o.appendChild(i), i.id = A.jsObject.controls.viewer.id + A.params.name + "Item" + e, i.parameter = A, i.value = A.params.items[e].value, i.key = A.params.items[e].key, i.keyTo = A.params.items[e].keyTo, i.innerContainer.innerHTML = i.value + " [" + this.getStringKey(i.key, i.parameter) + " - " + this.getStringKey(i.keyTo, i.parameter) + "]", i.action = function() {
                this.parameter.params.key = this.key, this.parameter.params.keyTo = this.keyTo, this.parameter.controls.firstTextBox.value = this.parameter.jsObject.getStringKey(this.key, this.parameter), this.parameter.controls.secondTextBox.value = this.parameter.jsObject.getStringKey(this.keyTo, this.parameter), this.parameter.changeVisibleStateMenu(!1)
            }
        }
        return t
    }, StiJsViewer.prototype.parameterMenuForNotEditList = function(A) {
        var t = this.ParameterMenu(A);
        t.menuItems = {};
        var e = !0,
            o = this.CheckBox(null, this.collections.loc.SelectAll);
        t.checkBoxSelectAll = o, o.style.margin = "8px 7px 8px 7px", t.innerTable.addCellInNextRow(o), t.innerTable.addCellInNextRow(this.parameterMenuSeparator()), o.setChecked(e), o.action = function() {
            var e = this.isChecked;
            for (var o in A.params.items) t.menuItems[o].checkBox.setChecked(e, !0);
            t.updateItems()
        }, t.updateItems = function() {
            A.params.items = {}, A.controls.firstTextBox.value = "";
            var t = !0;
            for (var e in this.menuItems) A.params.items[e] = {}, A.params.items[e].key = this.menuItems[e].key, A.params.items[e].value = this.menuItems[e].value, A.params.items[e].isChecked = this.menuItems[e].checkBox.isChecked, t && !this.menuItems[e].checkBox.isChecked && (t = !1), A.params.items[e].isChecked && ("" != A.controls.firstTextBox.value && (A.controls.firstTextBox.value += ";"), A.controls.firstTextBox.value += "" != this.menuItems[e].value ? this.menuItems[e].value : A.jsObject.getStringKey(this.menuItems[e].key, A));
            this.checkBoxSelectAll.setChecked(t)
        };
        for (var i in A.params.items) {
            var s = t.innerTable.addCellInNextRow();
            menuItem = this.parameterMenuItem(A), s.appendChild(menuItem), menuItem.id = A.jsObject.controls.viewer.id + A.params.name + "Item" + i, menuItem.parameter = A, menuItem.value = A.params.items[i].value, menuItem.key = A.params.items[i].key, t.menuItems[i] = menuItem;
            var n = this.CreateHTMLTable();
            n.style.width = "100%", menuItem.innerContainer.appendChild(n);
            var a = n.addCell(),
                r = this.ParameterCheckBox(A, "" != menuItem.value ? menuItem.value : this.getStringKey(menuItem.key, menuItem.parameter));
            r.style.marginRight = "5px", r.style.width = "100%", r.imageBlock.parentElement.style.width = "1px", a.appendChild(r), r.menuParent = t, r.setChecked(A.params.items[i].isChecked), menuItem.checkBox = r, r.isChecked || (e = !1), r.onChecked = function() {
                t.updateItems()
            }
        }
        var l = this.parameterMenuItem(A);
        return l.id = A.jsObject.controls.viewer.id + A.params.name + "ItemClose", l.innerContainer.innerHTML = this.collections.loc.Close, l.innerContainer.style.paddingLeft = "13px", l.action = function() {
            this.parameter.changeVisibleStateMenu(!1)
        }, t.innerTable.addCellInNextRow(this.parameterMenuSeparator()), t.innerTable.addCellInNextRow(l), t
    }, StiJsViewer.prototype.parameterMenuForEditList = function(A) {
        var t = this.ParameterMenu(A);
        t.newItem = function(A, e) {
            var o = e.jsObject.parameterMenuItem(e);
            o.id = e.jsObject.controls.viewer.id + e.params.name + "Item" + e.jsObject.newGuid().replace(/-/g, ""), o.onmouseover = null, o.onmousedown = null, o.ontouchend = null, o.action = null, o.parameter = e, o.value = A.value, o.key = A.key;
            var i = o.jsObject.CreateHTMLTable();
            o.innerContainer.appendChild(i);
            var s = e.jsObject.ParameterTextBox(e);
            if (o.textBox = s, s.value = e.jsObject.getStringKey(o.key, o.parameter), s.thisMenu = t, i.addCell(s).style.padding = "0 1px 0 0", "DateTime" == e.params.type) {
                var n = e.jsObject.ParameterButton("DateTimeButton", e);
                n.id = o.id + "DateTimeButton", n.parameter = e, n.thisItem = o, i.addCell(n).style.padding = "0 1px 0 1px", n.action = function() {
                    var A = n.jsObject.controls.datePicker;
                    A.ownerValue = this.thisItem.key, A.parentDataControl = this.thisItem.textBox, A.parentButton = this, A.changeVisibleState(!A.visible)
                }
            }
            if ("Guid" == e.params.type) {
                var a = e.jsObject.ParameterButton("GuidButton", e);
                a.id = o.id + "GuidButton", a.thisItem = o, a.thisMenu = t, i.addCell(a).style.padding = "0 1px 0 1px", a.action = function() {
                    this.thisItem.textBox.value = this.parameter.jsObject.newGuid(), this.thisMenu.updateItems()
                }
            }
            var r = e.jsObject.ParameterButton("RemoveItemButton", e);
            return r.id = o.id + "RemoveButton", r.itemsContainer = this.itemsContainer, r.thisItem = o, r.thisMenu = t, i.addCell(r).style.padding = "0 1px 0 1px", r.action = function() {
                this.itemsContainer.removeChild(this.thisItem), this.thisMenu.updateItems()
            }, o
        }, t.updateItems = function() {
            for (this.parameter.params.items = {}, this.parameter.controls.firstTextBox.value = "", i = 0; i < this.itemsContainer.childNodes.length; i++) itemMenu = this.itemsContainer.childNodes[i], this.parameter.params.items[i] = {}, this.parameter.params.items[i].key = "DateTime" == this.parameter.params.type ? itemMenu.key : itemMenu.textBox.value, this.parameter.params.items[i].value = itemMenu.value, "" != this.parameter.controls.firstTextBox.value && (this.parameter.controls.firstTextBox.value += ";"), this.parameter.controls.firstTextBox.value += this.parameter.jsObject.getStringKey(this.parameter.params.items[i].key, this.parameter);
            this.parameter.menu.innerTable.offsetHeight > 400 ? this.parameter.menu.style.height = "350px;" : this.parameter.menu.style.height = this.parameter.menu.innerTable.offsetHeight + "px"
        };
        var e = this.parameterMenuItem(A);
        t.innerTable.addCell(e), e.id = A.jsObject.controls.viewer.id + A.params.name + "ItemNew", e.innerContainer.innerHTML = this.collections.loc.NewItem, e.thisMenu = t, e.action = function() {
            var A = {};
            "DateTime" == this.parameter.params.type ? (A.key = this.parameter.jsObject.getDateTimeObject(), A.value = this.parameter.jsObject.dateTimeObjectToString(A.key, this.parameter)) : "TimeSpan" == this.parameter.params.type ? (A.key = "00:00:00", A.value = "00:00:00") : "Bool" == this.parameter.params.type ? (A.key = "False", A.value = "False") : (A.key = "", A.value = "");
            var t = this.thisMenu.newItem(A, this.parameter);
            this.thisMenu.itemsContainer.appendChild(t), "textBox" in t && t.textBox.focus(), this.thisMenu.updateItems()
        };
        var o = t.innerTable.addCellInNextRow();
        t.itemsContainer = o;
        for (var i in A.params.items) o.appendChild(t.newItem(A.params.items[i], A));
        var s = t.innerTable.addCellInNextRow(),
            n = this.parameterMenuItem(A);
        s.appendChild(n), n.id = A.jsObject.controls.viewer.id + A.params.name + "ItemRemoveAll", n.innerContainer.innerHTML = this.collections.loc.RemoveAll, n.thisMenu = t, n.action = function() {
            while (this.thisMenu.itemsContainer.childNodes[0]) this.thisMenu.itemsContainer.removeChild(this.thisMenu.itemsContainer.childNodes[0]);
            this.thisMenu.updateItems()
        }, s.appendChild(this.parameterMenuSeparator());
        var a = this.parameterMenuItem(A);
        return s.appendChild(a), a.id = A.jsObject.controls.viewer.id + A.params.name + "ItemClose", a.innerContainer.innerHTML = this.collections.loc.Close, a.action = function() {
            this.parameter.changeVisibleStateMenu(!1)
        }, t.onHide = function() {
            this.updateItems()
        }, t
    }, StiJsViewer.prototype.ReplaceMonths = function(A) {
        for (var t = 1; t <= 12; t++) {
            var e = "",
                o = "";
            switch (t) {
                case 1:
                    e = "January", o = this.collections.loc.MonthJanuary;
                    break;
                case 2:
                    e = "February", o = this.collections.loc.MonthFebruary;
                    break;
                case 3:
                    e = "March", o = this.collections.loc.MonthMarch;
                    break;
                case 4:
                    e = "April", o = this.collections.loc.MonthApril;
                    break;
                case 5:
                    e = "May", o = this.collections.loc.MonthMay;
                    break;
                case 6:
                    e = "June", o = this.collections.loc.MonthJune;
                    break;
                case 7:
                    e = "July", o = this.collections.loc.MonthJuly;
                    break;
                case 8:
                    e = "August", o = this.collections.loc.MonthAugust;
                    break;
                case 9:
                    e = "September", o = this.collections.loc.MonthSeptember;
                    break;
                case 10:
                    e = "October", o = this.collections.loc.MonthOctober;
                    break;
                case 11:
                    e = "November", o = this.collections.loc.MonthNovember;
                    break;
                case 12:
                    e = "December", o = this.collections.loc.MonthDecember;
                    break
            }
            var i = e.substring(0, 3),
                s = o.substring(0, 3);
            A = A.replace(e, t).replace(e.toLowerCase(), t).replace(i, t).replace(i.toLowerCase(), t), A = A.replace(o, t).replace(o.toLowerCase(), t).replace(s, t).replace(s.toLowerCase(), t)
        }
        return A
    }, StiJsViewer.prototype.GetDateTimeFromString = function(A, t) {
        var e = function(A) {
            return "0123456789".indexOf(A) >= 0
        };
        if (!A) return new Date;
        A = this.ReplaceMonths(A);
        var o = new Date;
        null == t && (t = "dd.MM.yyyy hh:mm:ss");
        var i = 1970,
            s = 1,
            n = 1,
            a = 0,
            r = 0,
            l = 0,
            h = 0,
            p = "",
            c = 0,
            g = [];
        while (c < A.length) {
            if (p = A.charAt(c), e(p)) {
                g.push(p), c++;
                while (c < A.length && e(A.charAt(c))) g[g.length - 1] += A.charAt(c), c++;
                g[g.length - 1] = this.StrToInt(g[g.length - 1])
            }
            c++
        }
        c = 0;
        var u = 0,
            d = -1,
            m = !1;
        while (c < t.length) {
            if (p = t.charAt(c), u = 0, "Y" == p || "y" == p || "M" == p || "d" == p || "h" == p || "H" == p || "m" == p || "s" == p || "f" == p || "F" == p || "t" == p || "z" == p) {
                d++;
                while (c < t.length && t.charAt(c) == p) c++, u++
            }
            switch (p) {
                case "Y":
                    i = g[d];
                    break;
                case "y":
                    i = g[d] < 1e3 ? 2e3 + g[d] : g[d];
                    break;
                case "M":
                    s = g[d];
                    break;
                case "d":
                    n = g[d];
                    break;
                case "h":
                    m = !0;
                case "H":
                    a = g[d];
                    break;
                case "m":
                    r = g[d];
                    break;
                case "s":
                    l = g[d];
                    break;
                case "f":
                case "F":
                    h = g[d];
                    break;
                case "t":
                    A.toLowerCase().indexOf("am") >= 0 && 12 == a && (a = 0), A.toLowerCase().indexOf("pm") >= 0 && a < 12 && (a += 12);
                    break;
                default:
                    c++;
                    break
            }
        }
        return o = new Date(i, s - 1, n, a, r, l, h)
    }, StiJsViewer.prototype.InitializeProcessImage = function() {
        var A = this.Progress();
        return A.jsObject = this, A.style.display = "none", this.controls.processImage = A, this.controls.mainPanel.appendChild(A), A.style.left = "calc(50% - 50px)", this.options.appearance.fullScreenMode ? A.style.top = "calc(50% - 125px)" : A.style.top = "250px", A.show = function() {
            this.style.display = ""
        }, A.hide = function() {
            this.style.display = "none"
        }, A
    }, StiJsViewer.prototype.Progress = function() {
        var A = document.createElement("div");
        A.style.position = "absolute", A.style.zIndex = "1000";
        var t = document.createElement("div");
        return A.appendChild(t), t.className = "js_viewer_loader", A
    }, StiJsViewer.prototype.InitializeCenterText = function() {
        var A = document.createElement("div");
        A.style.position = "absolute", A.style.zIndex = "1000", A.style.display = "none", A.style.opacity = 0, A.style.transitionProperty = "opacity", A.style.transitionDuration = "300ms", A.style.fontFamily = this.options.toolbarFontFamily, A.style.color = this.options.toolbarFontColor, A.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", A.style.fontSize = "100px";
        var t = document.createElement("div");
        return A.jsObject = this, A.text = t, A.appendChild(t), this.controls.centerText = A, this.controls.mainPanel.appendChild(A), A.show = function() {
            this.isAnimationProcess = !0, this.toolbarHideTimer = null, this.style.display = "", this.jsObject.setObjectToCenter(this), setTimeout(function() {
                A.style.opacity = 1
            }), this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function() {
                A.hide()
            }, 2e3)
        }, A.hide = function() {
            this.style.opacity = 0, this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function() {
                A.style.display = "none"
            }, 300)
        }, A.setText = function(t) {
            A.text.innerHTML = t, A.show()
        }, A
    }, StiJsViewer.prototype.RadioButton = function(A, t, e, o) {
        var i = this.CreateHTMLTable();
        return i.style.fontFamily = this.options.toolbar.fontFamily, i.jsObject = this, i.name = A, i.isEnabled = !0, i.isChecked = !1, i.groupName = t, i.className = "stiJsViewerRadioButton", i.captionText = e, o && i.setAttribute("title", o), A && (this.controls.radioButtons || (this.controls.radioButtons = {}), this.controls.radioButtons[A] = i), i.outCircle = document.createElement("div"), i.outCircle.className = "stiJsViewerRadioButtonOutCircle", i.circleCell = i.addCell(i.outCircle), i.innerCircle = document.createElement("div"), i.innerCircle.style.visibility = "hidden", i.innerCircle.className = "stiJsViewerRadioButtonInnerCircle", i.innerCircle.style.margin = this.options.isTouchDevice ? "4px" : "3px", i.innerCircle.style.width = this.options.isTouchDevice ? "9px" : "7px", i.innerCircle.style.height = this.options.isTouchDevice ? "9px" : "7px", i.outCircle.appendChild(i.innerCircle), null != e && (i.captionCell = i.addCell(), i.captionCell.style.paddingLeft = "4px", i.captionCell.style.whiteSpace = "nowrap", i.captionCell.innerHTML = e), i.lastCell = i.addCell(), i.onmouseover = function() {
            this.jsObject.options.isTouchDevice || this.onmouseenter()
        }, i.onmouseout = function() {
            this.jsObject.options.isTouchDevice || this.onmouseleave()
        }, i.onmouseenter = function() {
            if (!this.isEnabled) return;
            this.outCircle.className = "stiJsViewerRadioButtonOutCircleOver"
        }, i.onmouseleave = function() {
            if (!this.isEnabled) return;
            this.outCircle.className = "stiJsViewerRadioButtonOutCircle"
        }, i.onclick = function() {
            if (this.isTouchEndFlag || !this.isEnabled || this.jsObject.options.isTouchClick) return;
            i.setChecked(!0), i.action()
        }, i.ontouchend = function() {
            if (!this.isEnabled || this.jsObject.options.fingerIsMoved) return;
            this.outCircle.className = "stiJsViewerRadioButtonOutCircleOver";
            var A = this;
            this.isTouchEndFlag = !0, clearTimeout(this.isTouchEndTimer), setTimeout(function() {
                A.outCircle.className = "stiJsViewerRadioButtonOutCircle", A.setChecked(!0), A.action()
            }, 150), this.isTouchEndTimer = setTimeout(function() {
                A.isTouchEndFlag = !1
            }, 1e3)
        }, i.ontouchstart = function() {
            this.jsObject.options.fingerIsMoved = !1
        }, i.setEnabled = function(A) {
            this.innerCircle.style.opacity = A ? "1" : "0.5", this.isEnabled = A, this.className = A ? "stiJsViewerRadioButton" : "stiJsViewerRadioButtonDisabled", this.outCircle.className = A ? "stiJsViewerRadioButtonOutCircle" : "stiJsViewerRadioButtonOutCircleDisabled"
        }, i.setChecked = function(A) {
            if (this.groupName && A)
                for (var t in this.jsObject.controls.radioButtons) this.groupName == this.jsObject.controls.radioButtons[t].groupName && this.jsObject.controls.radioButtons[t].setChecked(!1);
            this.innerCircle.style.visibility = A ? "visible" : "hidden", this.isChecked = A, this.onChecked()
        }, i.onChecked = function() {}, i.action = function() {}, i
    }, StiJsViewer.prototype.InitializeReportPanel = function() {
        var A = document.createElement("div");
        A.id = this.controls.viewer.id + "ReportPanel", A.jsObject = this, this.controls.reportPanel = A, this.controls.mainPanel.appendChild(A), A.style.textAlign = "default" == this.options.appearance.pageAlignment ? "center" : this.options.appearance.pageAlignment, A.className = "stiJsViewerReportPanel", A.style.bottom = "0", A.pages = [], A.touchesLength = 0, this.options.isMobileDevice && (A.style.transition = "margin 200ms ease"), A.correctMargins = function() {
            "Separated" == this.jsObject.options.toolbar.displayMode && (this.jsObject.options.isMobileDevice ? this.style.marginBottom = this.jsObject.options.toolbar.autoHide ? "0" : "0.5in" : this.style.marginBottom = "Percentage" != this.jsObject.options.viewerHeightType || this.jsObject.options.appearance.fullScreenMode || this.jsObject.options.appearance.scrollbarsMode ? "35px" : "0")
        }, A.addPage = function(t) {
            if (!t) return null;
            var e = document.createElement("div");
            e.jsObject = this.jsObject, A.appendChild(e), A.pages.push(e), e.loadContent = function(A) {
                e.style.display = "inline-block";
                var t = A[0];
                e.style.background = "Transparent" == t.background ? "White" : t.background, e.innerHTML = t.content
            }, e.className = this.jsObject.options.appearance.showPageShadow ? "stiJsViewerPageShadow" : "stiJsViewerPage";
            for (var o = t.sizes.split(";"), i = t.margins.split(" "), s = [], n = 0; n < i.length; n++) s.push(parseInt(i[n].replace("px", "")));
            e.margins = s, e.pageWidth = parseInt(o[0]), e.pageHeight = parseInt(o[1]), e.style.overflow = "hidden", e.style.margin = "Continuous" == this.jsObject.reportParams.viewMode ? "10px auto 10px auto" : "10px", e.style.display = "Continuous" == this.jsObject.reportParams.viewMode ? "table" : "inline-block", e.style.verticalAlign = "top", e.style.padding = t.margins, e.style.border = "1px solid " + this.jsObject.options.appearance.pageBorderColor, e.style.color = "#000000", e.style.background = "Transparent" == t.background ? "White" : t.background, e.style.boxSizing = "content-box", e.innerHTML = t.content, this.jsObject.reportParams.pagesWidth = e.offsetWidth || e.pageWidth, this.jsObject.reportParams.pagesHeight = e.offsetHeight || e.pageHeight, t.content || (e.style.width = e.pageWidth + "px", e.style.height = e.pageHeight + "px");
            for (var n = 0; n < e.childNodes.length; n++)
                if (e.childNodes[n].style && e.childNodes[n].style.backgroundImage) {
                    e.style.backgroundImage = e.childNodes[n].style.backgroundImage, e.style.backgroundRepeat = "no-repeat", e.style.backgroundSize = "contain", e.childNodes[n].style.backgroundImage = "", e.childNodes[n].style.backgroundColor = "";
                    break
                }
            if ("Div" == this.jsObject.options.appearance.reportDisplayMode || "Span" == this.jsObject.options.appearance.reportDisplayMode) {
                var a = e.getElementsByClassName("StiPageContainer");
                if (a && a.length > 0) {
                    a[0].style.position = "relative", e.style.width = e.pageWidth - e.margins[1] - e.margins[3] + "px", e.style.height = e.pageHeight - e.margins[0] - e.margins[2] + "px"
                }
            }
            var r = e.offsetHeight - s[0] - s[2];
            return (null == A.maxHeights[o[1]] || r > A.maxHeights[o[1]]) && (A.maxHeights[o[1]] = r), this.jsObject.InitializeInteractions(e), e.touchesLength = 0, e.lastTouches = [{
                x: 0,
                y: 0,
                time: 0
            }, {
                x: 0,
                y: 0,
                time: 0
            }], e.translateX = function(A) {
                var t = this;
                this.style.transitionDuration = "300ms", this.style.transform = 0 == A ? "" : "translateX(" + A + "px)", setTimeout(function() {
                    t.style.transitionDuration = ""
                }, 300)
            }, e.eventTouchStart = function(t) {
                this.touchAllowPageAction = 0 == this.touchesLength && Math.abs(A.offsetWidth - A.scrollWidth) <= 10, this.touchesLength++, this.touchAllowPageAction && (this.touchStartX = parseInt(t.changedTouches[0].clientX), this.touchStartScrollY = A.scrollTop)
            }, e.eventTouchMove = function(t) {
                this.touchAllowPageAction && (this.lastTouches.shift(), this.lastTouches.push({
                    x: t.changedTouches[0].clientX,
                    y: t.changedTouches[0].clientY,
                    time: (new Date).getTime()
                }), A.offsetWidth == A.scrollWidth && this.touchStartScrollY == A.scrollTop && (this.touchPosX = parseInt(this.lastTouches[1].x - this.touchStartX), 0 == scrollX && (this.style.transform = "translateX(" + this.touchPosX + "px)")))
            }, e.eventTouchEnd = function(t) {
                if (this.touchesLength > 0 && this.touchesLength--, this.touchAllowPageAction && 0 == this.touchesLength) {
                    var e = this.lastTouches[1].x - this.lastTouches[0].x,
                        o = (new Date).getTime() - this.lastTouches[1].time;
                    this.touchStartScrollY != A.scrollTop || e <= 0 && this.jsObject.reportParams.pageNumber >= this.jsObject.reportParams.pagesCount - 1 || e >= 0 && this.jsObject.reportParams.pageNumber <= 0 ? this.translateX(0) : e < -5 && o <= 14 && this.lastTouches[1].x < this.touchStartX || e < 0 && this.touchPosX < -this.pageWidth / 3 ? (this.jsObject.postAction("NextPage"), this.translateX(-this.pageWidth)) : e > 5 && o <= 14 && this.lastTouches[1].x > this.touchStartX || e > 0 && this.touchPosX > this.pageWidth / 3 ? (this.jsObject.postAction("PrevPage"), this.translateX(this.pageWidth)) : this.translateX(0)
                }
            }, this.jsObject.options.isMobileDevice && (e.addEventListener("touchstart", e.eventTouchStart), e.addEventListener("touchmove", e.eventTouchMove), e.addEventListener("touchend", e.eventTouchEnd)), e
        }, A.eventTouchStart = function(t) {
            A.touchesLength++, A.touchStartX = parseInt(t.changedTouches[0].clientX), A.jsObject.options.appearance.allowTouchZoom && 1 == A.touchesLength && (A.touchZoomFirstDistance = 0, A.touchZoomSecondDistance = 0, A.touchZoomValue = 0)
        }, A.eventTouchMove = function(t) {
            if (A.jsObject.options.appearance.allowTouchZoom && t.touches.length > 1) {
                "preventDefault" in t && t.preventDefault(), A.touchZoomSecondDistance = Math.sqrt(Math.pow(t.touches[0].pageX - t.touches[1].pageX, 2) + Math.pow(t.touches[0].pageY - t.touches[1].pageY, 2)), 0 == A.touchZoomFirstDistance && (A.touchZoomFirstDistance = Math.sqrt(Math.pow(t.touches[0].pageX - t.touches[1].pageX, 2) + Math.pow(t.touches[0].pageY - t.touches[1].pageY, 2)));
                var e = parseInt((A.touchZoomSecondDistance - A.touchZoomFirstDistance) / 2.5);
                Math.abs(e) >= 5 && (A.touchZoomValue = 5 * parseInt((A.jsObject.reportParams.zoom + e) / 5), A.touchZoomValue = Math.min(Math.max(A.touchZoomValue, 20), 200), A.jsObject.controls.centerText.setText(A.touchZoomValue))
            }
        }, A.eventTouchEnd = function(t) {
            A.touchesLength > 0 && A.touchesLength--, A.jsObject.options.isMobileDevice && A.jsObject.options.toolbar.autoHide && (0 != parseInt(A.touchStartX - t.changedTouches[0].clientX) ? A.keepToolbar() : A.isToolbarHidden ? A.showToolbar() : A.hideToolbar()), A.jsObject.options.appearance.allowTouchZoom && 0 != A.touchZoomValue && (A.jsObject.controls.centerText.hide(), A.jsObject.reportParams.zoom = A.touchZoomValue, A.jsObject.postAction("Refresh"))
        }, A.showToolbar = function() {
            if (!this.jsObject.options.isMobileDevice || !this.jsObject.options.toolbar.autoHide) return;
            this.toolbarHideTimer && clearTimeout(this.toolbarHideTimer), this.jsObject.controls.toolbar.style.opacity = this.jsObject.controls.navigatePanel.style.opacity = .9, this.jsObject.controls.toolbar.style.marginTop = this.jsObject.controls.navigatePanel.style.marginBottom = "0", setTimeout(function() {
                A.isToolbarHidden = !1, A.keepToolbar()
            }, 300)
        }, A.hideToolbar = function() {
            if (!this.jsObject.options.isMobileDevice || !this.jsObject.options.toolbar.autoHide) return;
            this.toolbarHideTimer && clearTimeout(this.toolbarHideTimer), this.toolbarHideTimer = null, this.jsObject.controls.toolbar.style.opacity = this.jsObject.controls.navigatePanel.style.opacity = 0, this.jsObject.controls.toolbar.style.marginTop = this.jsObject.controls.navigatePanel.style.marginBottom = "-0.55in", setTimeout(function() {
                A.isToolbarHidden = !0
            }, 300)
        }, A.keepToolbar = function() {
            if (!this.jsObject.options.isMobileDevice || !this.jsObject.options.toolbar.autoHide || this.isToolbarHidden) return;
            this.toolbarHideTimer && clearTimeout(this.toolbarHideTimer), clearTimeout(this.toolbarHideTimer), this.toolbarHideTimer = setTimeout(function() {
                A.hideToolbar()
            }, 4e3)
        }, A.getZoomByPageWidth = function() {
            if (0 == this.jsObject.reportParams.pagesWidth) return 100;
            return (this.offsetWidth - 35) * this.jsObject.reportParams.zoom / this.jsObject.reportParams.pagesWidth
        }, A.getZoomByPageHeight = function() {
            if (0 == this.jsObject.reportParams.pagesHeight) return 100;
            var A = this.jsObject.options.appearance.scrollbarsMode ? Math.min(this.jsObject.controls.viewer.offsetHeight, window.innerHeight) : window.innerHeight;
            return !this.jsObject.controls.toolbar || this.jsObject.options.isMobileDevice && this.jsObject.options.toolbar.autoHide || (A -= this.jsObject.controls.toolbar.offsetHeight), this.jsObject.controls.findPanel && (A -= this.jsObject.controls.findPanel.offsetHeight), this.jsObject.controls.drillDownPanel && (A -= this.jsObject.controls.drillDownPanel.offsetHeight), this.jsObject.controls.parametersPanel && "Top" == this.jsObject.options.appearance.parametersPanelPosition && (A -= this.jsObject.controls.parametersPanel.offsetHeight), !this.jsObject.controls.navigatePanel || this.jsObject.options.isMobileDevice && this.jsObject.options.toolbar.autoHide || (A -= this.jsObject.controls.navigatePanel.offsetHeight), (A - 25) * this.jsObject.reportParams.zoom / this.jsObject.reportParams.pagesHeight
        }, A.addPages = function() {
            if (null == this.jsObject.reportParams.pagesArray) return;
            A.style.top = this.jsObject.options.isMobileDevice && this.jsObject.options.toolbar.autoHide ? "0" : this.jsObject.options.toolbar.visible && ("Percentage" != this.jsObject.options.viewerHeightType || this.jsObject.options.appearance.scrollbarsMode) ? this.jsObject.controls.toolbar.offsetHeight + "px" : "0", this.clear(), this.maxHeights = {};
            var t = this.jsObject.reportParams.pagesArray.length;
            this.jsObject.controls.css || (this.jsObject.controls.css = document.getElementById(this.jsObject.options.viewerId + "Styles")), this.jsObject.controls.css || (this.jsObject.controls.css = document.createElement("STYLE"), this.jsObject.controls.css.id = this.jsObject.options.viewerId + "Styles", this.jsObject.controls.css.setAttribute("type", "text/css"), this.jsObject.controls.head.appendChild(this.jsObject.controls.css)), this.jsObject.controls.css.styleSheet ? this.jsObject.controls.css.styleSheet.cssText = this.jsObject.reportParams.pagesArray[t - 2] : this.jsObject.controls.css.innerHTML = this.jsObject.reportParams.pagesArray[t - 2];
            var e = document.getElementById(this.jsObject.options.viewerId + "chartScriptJsViewer");
            if (e && this.jsObject.controls.head.removeChild(e), this.jsObject.reportParams.pagesArray[t - 1]) {
                var o = document.createElement("Script");
                o.setAttribute("type", "text/javascript"), o.id = this.jsObject.options.viewerId + "chartScriptJsViewer", o.textContent = this.jsObject.reportParams.pagesArray[t - 1], this.jsObject.controls.head.appendChild(o)
            }
            for (num = 0; num <= t - 3; num++) var i = this.addPage(this.jsObject.reportParams.pagesArray[num]);
            A.correctHeights(), "function" == typeof stiEvalCharts && stiEvalCharts(), this.jsObject.options.editableMode && this.jsObject.ShowAllEditableFields(), this.jsObject.UpdateAllHyperLinks()
        }, A.clear = function() {
            while (this.childNodes[0]) this.removeChild(this.childNodes[0]);
            A.pages = []
        }, A.correctHeights = function() {
            for (var t in this.childNodes)
                if (null != this.childNodes[t].pageHeight) {
                    var e = A.maxHeights[this.childNodes[t].pageHeight.toString()];
                    e && (this.childNodes[t].style.height = e + "px")
                }
        }, A.pagesNavigationIsActive = function() {
            return (this.jsObject.options.appearance.fullScreenMode || this.jsObject.options.appearance.scrollbarsMode) && "Continuous" == this.jsObject.reportParams.viewMode
        }, A.updateToolbarStateByPagePosition = function() {
            var t = this.jsObject.reportParams,
                e = 0,
                o = 0;
            for (o = 0; o < A.pages.length; o++)
                if ((e += A.pages[o].offsetHeight + 20) > A.scrollTop) break;
            o < t.pagesCount && o >= 0 && o != t.pageNumber && (this.jsObject.reportParams.pageNumber = o, this.jsObject.controls.toolbar && this.jsObject.controls.toolbar.changeToolBarState())
        }, A.onscroll = function() {
            if (A.pagesNavigationIsActive()) {
                clearTimeout(A.scrollTimer);
                var t = this;
                A.scrollTimer = setTimeout(function() {
                    A.updateToolbarStateByPagePosition()
                }, 300)
            }
        }, A.addEventListener("touchstart", A.eventTouchStart), A.addEventListener("touchmove", A.eventTouchMove), A.addEventListener("touchend", A.eventTouchEnd)
    }, StiJsViewer.prototype.SmallButton = function(A, t, e, o, i, s) {
        var n = document.createElement("div");
        n.style.fontFamily = this.options.toolbar.fontFamily, n.jsObject = this, n.name = A, n.styleName = s || "stiJsViewerStandartSmallButton", n.isEnabled = !0, n.isSelected = !1, n.isOver = !1, n.className = n.styleName + " " + n.styleName + "Default", n.toolTip = o, n.style.height = this.options.isTouchDevice ? "28px" : "23px", n.style.boxSizing = "content-box", A && (this.controls.buttons || (this.controls.buttons = {}), this.controls.buttons[A] = n);
        var a = this.CreateHTMLTable();
        return n.innerTable = a, a.style.height = "100%", n.appendChild(a), null != e && (n.image = document.createElement("img"), this.collections.images[e] && (n.image.src = this.collections.images[e]), n.imageCell = a.addCell(n.image), n.imageCell.style.lineHeight = "0", n.imageCell.style.padding = this.options.isTouchDevice && null == t ? "0 7px" : "0 3px"), null != t && (n.caption = a.addCell(), n.caption.style.padding = (i ? "1px 0 " : "1px 5px ") + (e ? "0 0" : "0 5px"), n.caption.style.whiteSpace = "nowrap", n.caption.style.textAlign = "left", n.caption.innerHTML = t), null != i && (n.arrow = document.createElement("img"), n.arrow.src = this.collections.images["ButtonArrow" + i + ".png"], a.addCell(n.arrow).style.padding = t ? "0 5px 0 5px" : this.options.isTouchDevice ? "0 7px 0 0" : "0 5px 0 2px", n.arrow.style.marginTop = "1px", n.arrow.style.verticalAlign = "baseline"), o && "object" != typeof o && n.setAttribute("title", o), n.onmouseoverAction = function() {
            if (!this.isEnabled || this.jsObject.options.isTouchClick || this.haveMenu && this.isSelected) return;
            this.className = this.styleName + " " + this.styleName + "Over", this.isOver = !0, !this.jsObject.options.isTouchDevice && this.jsObject.options.appearance.showTooltips && this.toolTip && "object" == typeof this.toolTip && this.jsObject.controls.toolTip.showWithDelay(this.toolTip[0], this.toolTip[1], 3 == this.toolTip.length && this.toolTip[2].left ? this.toolTip[2].left : this.jsObject.FindPosX(this, "stiJsViewerMainPanel"), 3 == this.toolTip.length && this.toolTip[2].top ? this.toolTip[2].top : this.jsObject.controls.toolbar.offsetHeight, 3 == this.toolTip.length && this.toolTip[2].rightToLeft ? this.offsetWidth : null)
        }, n.onmouseoutAction = function() {
            if (this.isOver = !1, !this.isEnabled) return;
            this.className = this.styleName + " " + this.styleName + (this.isSelected ? "Selected" : "Default"), this.jsObject.options.appearance.showTooltips && this.toolTip && "object" == typeof this.toolTip && this.jsObject.controls.toolTip.hideWithDelay()
        }, n.onmouseover = function() {
            this.jsObject.options.isTouchDevice || this.onmouseenter()
        }, n.onmouseout = function() {
            this.jsObject.options.isTouchDevice || this.onmouseleave()
        }, n.onmouseenter = function() {
            this.onmouseoverAction()
        }, n.onmouseleave = function() {
            this.onmouseoutAction()
        }, n.onmousedown = function() {
            if (this.isTouchStartFlag || !this.isEnabled) return;
            this.jsObject.options.buttonPressed = this
        }, n.onclick = function() {
            if (this.isTouchEndFlag || !this.isEnabled || this.jsObject.options.isTouchClick) return;
            this.jsObject.options.appearance.showTooltips && this.toolTip && "object" == typeof this.toolTip && this.jsObject.controls.toolTip.hide(), this.action()
        }, n.ontouchend = function() {
            if (!this.isEnabled || this.jsObject.options.fingerIsMoved) return;
            var A = this;
            this.isTouchEndFlag = !0, clearTimeout(this.isTouchEndTimer);
            var t = setTimeout(function(t) {
                A.jsObject.options.buttonsTimer = null, A.className = A.styleName + " " + A.styleName + "Default", A.action()
            }, 150);
            this.jsObject.options.buttonsTimer = [this, this.className, t], this.className = this.styleName + " " + this.styleName + "Over", this.isTouchEndTimer = setTimeout(function() {
                A.isTouchEndFlag = !1
            }, 1e3)
        }, n.ontouchstart = function() {
            var A = this;
            this.isTouchStartFlag = !0, clearTimeout(this.isTouchStartTimer), this.jsObject.options.fingerIsMoved = !1, this.jsObject.options.buttonPressed = this, this.isTouchStartTimer = setTimeout(function() {
                A.isTouchStartFlag = !1
            }, 1e3)
        }, n.setEnabled = function(A) {
            this.image && (this.image.style.opacity = A ? "1" : "0.5"), this.arrow && (this.arrow.style.opacity = A ? "1" : "0.5"), this.isEnabled = A, A || this.isOver || (this.isOver = !1), this.className = this.styleName + " " + (A ? this.styleName + (this.isOver ? "Over" : "Default") : this.styleName + "Disabled")
        }, n.setSelected = function(A) {
            this.isSelected = A, this.className = this.styleName + " " + this.styleName + (A ? "Selected" : this.isEnabled ? this.isOver ? "Over" : "Default" : "Disabled")
        }, n.action = function() {
            this.jsObject.postAction(this.name)
        }, n
    }, StiJsViewer.prototype.TextArea = function(A, t, e) {
        var o = document.createElement("textarea");
        o.style.width = t + "px", o.style.height = e + "px", o.style.minWidth = t + "px", o.style.minHeight = e + "px", o.style.paddingTop = "3px", o.style.fontFamily = "Arial", o.jsObject = this, o.name = A, o.isEnabled = !0, o.isSelected = !1, o.isOver = !1;
        var i = "stiJsViewerTextBox";
        return o.className = i + " " + i + "Default", A && (this.controls.textBoxes || (this.controls.textBoxes = {}), this.controls.textBoxes[A] = o), o.setEnabled = function(A) {
            this.isEnabled = A, this.disabled = !A, this.className = i + " " + i + (A ? "Default" : "Disabled")
        }, o.onmouseover = function() {
            this.jsObject.options.isTouchDevice || this.onmouseenter()
        }, o.onmouseout = function() {
            this.jsObject.options.isTouchDevice || this.onmouseleave()
        }, o.onmouseenter = function() {
            if (!this.isEnabled || this.readOnly) return;
            this.isOver = !0, this.isSelected || this.isFocused || (this.className = i + " " + i + "Over")
        }, o.onfocus = function() {
            this.jsObject.options.controlsIsFocused = !0
        }, o.onmouseleave = function() {
            if (!this.isEnabled || this.readOnly) return;
            this.isOver = !1, this.isSelected || this.isFocused || (this.className = i + " " + i + "Default")
        }, o.setSelected = function(A) {
            this.isSelected = A, this.className = i + " " + i + (A ? "Over" : this.isEnabled ? this.isOver ? "Over" : "Default" : "Disabled")
        }, o.onblur = function() {
            this.jsObject.options.controlsIsFocused = !1, this.action()
        }, o.action = function() {}, o
    }, StiJsViewer.prototype.TextBox = function(A, t, e, o) {
        var i = document.createElement("input");
        if (i.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (i.style.color = this.options.toolbar.fontColor), t && (i.style.width = t + "px"), i.jsObject = this, i.name = A, i.isEnabled = !0, i.isSelected = !1, i.isFocused = !1, i.isOver = !1, i.actionLostFocus = o, e) try {
            i.setAttribute("title", e)
        } catch (A) {}
        i.style.height = this.options.isTouchDevice ? "26px" : "21px", i.style.lineHeight = i.style.height, i.style.boxSizing = "content-box";
        var s = "stiJsViewerTextBox";
        return i.className = s + " " + s + "Default", A && (this.controls.textBoxes || (this.controls.textBoxes = {}), this.controls.textBoxes[A] = i), i.setEnabled = function(A) {
            this.isEnabled = A, this.disabled = !A, this.className = s + " " + s + (A ? "Default" : "Disabled")
        }, i.onmouseover = function() {
            this.jsObject.options.isTouchDevice || this.onmouseenter()
        }, i.onmouseout = function() {
            this.jsObject.options.isTouchDevice || this.onmouseleave()
        }, i.onmouseenter = function() {
            if (!this.isEnabled || this.readOnly) return;
            this.isOver = !0, this.isSelected || this.isFocused || (this.className = s + " " + s + "Over")
        }, i.onmouseleave = function() {
            if (!this.isEnabled || this.readOnly) return;
            this.isOver = !1, this.isSelected || this.isFocused || (this.className = s + " " + s + "Default")
        }, i.setSelected = function(A) {
            this.isSelected = A, this.className = s + " " + s + (A ? "Over" : this.isEnabled ? this.isOver ? "Over" : "Default" : "Disabled")
        }, i.setReadOnly = function(A) {
            this.style.cursor = A ? "default" : "", this.readOnly = A;
            try {
                this.setAttribute("unselectable", A ? "on" : "off"), this.setAttribute("onselectstart", A ? "return false" : "")
            } catch (A) {}
        }, i.onfocus = function() {
            this.isFocused = !0, this.setSelected(!0), this.oldValue = this.value
        }, i.onblur = function() {
            this.isFocused = !1, this.setSelected(!1), this.action()
        }, i.onkeypress = function(A) {
            if (this.readOnly) return !1;
            if (A && 13 == A.keyCode) return "blur" in this && this.actionLostFocus ? this.blur() : this.action(), !1
        }, i.action = function() {}, i
    }, StiJsViewer.prototype.InitializeToolBar = function() {
        var A = document.createElement("div");
        A.controls = {}, A.shortType = !1, A.minWidth = 0, this.controls.toolbar = A, this.controls.mainPanel.appendChild(A), A.jsObject = this, A.className = "stiJsViewerToolBar", "Separated" == this.options.toolbar.displayMode && (A.className += " stiJsViewerToolBarSeparated"), this.options.isMobileDevice && (A.style.transition = "margin 300ms ease, opacity 300ms ease", this.options.toolbar.autoHide && (A.style.position = "absolute", A.style.zIndex = 5)), this.options.toolbar.visible || (A.style.height = "0px", A.style.width = "0px");
        var t = document.createElement("div");
        A.innerContent = t, A.appendChild(t), "Simple" == this.options.toolbar.displayMode && (t.style.paddingTop = "2px");
        var e = this.CreateHTMLTable();
        t.appendChild(e), e.className = "stiJsViewerToolBarTable", "Separated" == this.options.toolbar.displayMode && (e.style.border = "0px"), e.style.margin = 0, e.style.boxSizing = "border-box", "" != this.options.toolbar.backgroundColor && (e.style.background = this.options.toolbar.backgroundColor), "" != this.options.toolbar.borderColor && (e.style.border = "1px solid " + this.options.toolbar.borderColor), "" != this.options.toolbar.fontColor && (e.style.color = this.options.toolbar.fontColor), e.style.fontFamily = this.options.toolbar.fontFamily;
        var o = e.addCell(),
            i = e.addCell(),
            s = this.options.appearance.rightToLeft ? i : o,
            n = this.options.appearance.rightToLeft ? o : i;
        s.style.width = "100%";
        var a = this.CreateHTMLTable(),
            r = this.CreateHTMLTable();
        A.dopTable = r, s.appendChild(a), n.appendChild(r), a.setAttribute("align", this.options.appearance.rightToLeft ? "right" : "default" == this.options.toolbar.alignment ? "left" : this.options.toolbar.alignment), a.style.margin = "1px", r.style.margin = "1px", this.options.exports.showExportToPowerPoint || this.options.exports.showExportToPdf || this.options.exports.showExportToXps || this.options.exports.showExportToOpenDocumentWriter || this.options.exports.showExportToOpenDocumentCalc || this.options.exports.showExportToText || this.options.exports.showExportToRtf || this.options.exports.showExportToWord2007 || this.options.exports.showExportToCsv || this.options.exports.showExportToDbf || this.options.exports.showExportToXml || this.options.exports.showExportToDif || this.options.exports.showExportToSylk || this.options.exports.showExportToExcel || this.options.exports.showExportToExcel2007 || this.options.exports.showExportToExcelXml || this.options.exports.showExportToHtml || this.options.exports.showExportToHtml5 || this.options.exports.showExportToMht || this.options.exports.showExportToImageBmp || this.options.exports.showExportToImageGif || this.options.exports.showExportToImageJpeg || this.options.exports.showExportToImageMetafile || this.options.exports.showExportToImagePcx || this.options.exports.showExportToImagePng || this.options.exports.showExportToImageTiff || this.options.exports.showExportToImageSvg || this.options.exports.showExportToImageSvgz || (this.options.exports.showExportToDocument || (this.options.toolbar.showSaveButton = !1), this.options.toolbar.showSendEmailButton = !1);
        var l = !0,
            h = [];
        this.options.toolbar.showAboutButton && h.push(["About", null, "About.png", !1]), this.options.toolbar.showAboutButton && this.options.toolbar.showDesignButton && h.push(["Separator0"]), this.options.toolbar.showDesignButton && h.push(["Design", this.collections.loc.Design, "Design.png", !1]), this.options.toolbar.showPinToolbarButton && this.options.toolbar.showDesignButton && h.push(["Separator1"]), this.options.toolbar.showPinToolbarButton && h.push(["Pin", null, "Pin.png", !1]), this.options.toolbar.showPrintButton && (h.push(["Print", this.collections.loc.Print, "Print.png", !0]), l = !1), this.options.toolbar.showOpenButton && (h.push(["Open", this.collections.loc.Open, "Open.png", !0]), l = !1), this.options.toolbar.showSaveButton && (h.push(["Save", this.collections.loc.Save, "Save.png", !0]), l = !1), this.options.toolbar.showSendEmailButton && (h.push(["SendEmail", this.collections.loc.SendEmail, "SendEmail.png", !0]), l = !1), (this.options.toolbar.showBookmarksButton || this.options.toolbar.showParametersButton) && (l || h.push(["Separator2"]), l = !1), this.options.toolbar.showBookmarksButton && (h.push(["Bookmarks", "Separated" == this.options.toolbar.displayMode ? this.collections.loc.Bookmarks : null, "Separated" == this.options.toolbar.displayMode ? "Bookmarks20.png" : "Bookmarks.png", !0]), l = !1), this.options.toolbar.showParametersButton && (h.push(["Parameters", "Separated" == this.options.toolbar.displayMode ? this.collections.loc.Parameters : null, "Separated" == this.options.toolbar.displayMode ? "Parameters20.png" : "Parameters.png", !0]), l = !1), (this.options.toolbar.showFindButton || this.options.toolbar.showEditorButton) && (l || h.push(["Separator2_1"]), l = !1), this.options.toolbar.showFindButton && (h.push(["Find", null, "Find.png", !0]), l = !1), this.options.toolbar.showEditorButton && (h.push(["Editor", null, "Editor.png", !0]), l = !1), "Separated" != this.options.toolbar.displayMode && ((this.options.toolbar.showFirstPageButton || this.options.toolbar.showPreviousPageButton || this.options.toolbar.showNextPageButton || this.options.toolbar.showLastPageButton || this.options.toolbar.showCurrentPageControl) && (l || h.push(["Separator3"]), l = !1), this.options.toolbar.showFirstPageButton && (h.push(["FirstPage", null, this.options.appearance.rightToLeft ? "LastPage.png" : "FirstPage.png", !0]), l = !1), this.options.toolbar.showPreviousPageButton && (h.push(["PrevPage", null, this.options.appearance.rightToLeft ? "NextPage.png" : "PrevPage.png", !0]), l = !1), this.options.toolbar.showCurrentPageControl && (h.push(["PageControl"]), l = !1), this.options.toolbar.showNextPageButton && (h.push(["NextPage", null, this.options.appearance.rightToLeft ? "PrevPage.png" : "NextPage.png", !0]), l = !1), this.options.toolbar.showLastPageButton && (h.push(["LastPage", null, this.options.appearance.rightToLeft ? "FirstPage.png" : "LastPage.png", !0]), l = !1), (this.options.toolbar.showViewModeButton || this.options.toolbar.showZoomButton) && (l || h.push(["Separator4"]), l = !1)), this.options.toolbar.showFullScreenButton && (h.push(["FullScreen", null, "FullScreen.png", !0]), h.push(["Separator5"]), l = !1), this.options.toolbar.showZoomButton && "Separated" != this.options.toolbar.displayMode && (h.push(["Zoom", "100%", "Zoom.png", !0]), l = !1), this.options.toolbar.showViewModeButton && (h.push(["ViewMode", this.collections.loc.SinglePage, "SinglePage.png", !0]), l = !1), void 0 !== this.options.toolbar.multiPageWidthCount && (this.reportParams.multiPageWidthCount = this.options.toolbar.multiPageWidthCount), void 0 !== this.options.toolbar.multiPageHeightCount && (this.reportParams.multiPageHeightCount = this.options.toolbar.multiPageHeightCount), !this.options.appearance.rightToLeft && "right" == this.options.toolbar.alignment && (this.options.toolbar.showPinToolbarButton || this.options.toolbar.showAboutButton || this.options.toolbar.showDesignButton) && h.push(["Separator6"]);
        for (var p = 0; p < h.length; p++) {
            var c = this.options.appearance.rightToLeft ? h.length - 1 - p : p,
                g = h[c][0],
                u = "Pin" == g || "About" == g || "Design" == g || "Separator0" == g || "Separator1" == g ? r : a;
            if (0 == g.indexOf("Separator")) {
                u.addCell(this.ToolBarSeparator());
                continue
            }
            var d = "Print" == g && "Default" == this.options.toolbar.printDestination || "Save" == g || "SendEmail" == g || "Zoom" == g || "ViewMode" == g ? "Down" : null;
            this.options.isMobileDevice && (d = null);
            var m = "PageControl" != g ? this.SmallButton(g, h[c][1], h[c][2], h[c][3] ? [this.collections.loc[g + "ToolTip"], this.helpLinks[g]] : null, d) : this.PageControl();
            m.caption && (m.caption.style.display = this.options.toolbar.showButtonCaptions ? "" : "none"), "Editor" == g && (m.style.display = "none"), "Separated" == this.options.toolbar.displayMode && "PageControl" != g && (m.style.height = "28px", this.options.isMobileDevice && (m.imageCell.style.textAlign = "center", m.innerTable.style.width = "100%", m.style.width = "0.4in", m.style.height = "0.5in"), "Find" != g && "Editor" != g && "FullScreen" != g || (m.style.width = "28px", m.innerTable.style.width = "100%", m.imageCell.style.textAlign = "center")), m.style.margin = "Design" == g ? "1px 5px 1px 5px" : "1px", A.controls[g] = m, u.addCell(m)
        }
        if ("Hover" == this.options.toolbar.showMenuMode)
            for (var B = ["Print", "Save", "SendEmail", "Zoom", "ViewMode"], p = 0; p < B.length; p++) {
                var T = A.controls[B[p]];
                T && (T.onmouseover = function() {
                    var A = this.jsObject.lowerFirstChar(this.name) + "Menu";
                    if (clearTimeout(this.jsObject.options.toolbar["hideTimer" + this.name + "Menu"]), this.jsObject.options.isTouchDevice || !this.isEnabled || this.haveMenu && this.isSelected) return;
                    this.className = this.styleName + " " + this.styleName + "Over", this.jsObject.controls.menus[A].changeVisibleState(!0)
                }, T.onmouseout = function() {
                    var A = this.jsObject.lowerFirstChar(this.name) + "Menu";
                    this.jsObject.options.toolbar["hideTimer" + this.name + "Menu"] = setTimeout(function() {
                        T.jsObject.controls.menus[A].changeVisibleState(!1)
                    }, this.jsObject.options.menuHideDelay)
                })
            }
        A.haveScroll = function() {
            return A.scrollWidth > A.offsetWidth
        }, A.getMinWidth = function() {
            var A = s.offsetWidth,
                t = a.offsetWidth;
            return e.offsetWidth - (A - t) + 50
        }, A.minWidth = A.getMinWidth(), A.changeToolBarState = function() {
            var t = A.jsObject.reportParams,
                e = A.controls,
                o = A.jsObject.collections;
            if (e.FirstPage && e.FirstPage.setEnabled(t.pageNumber > 0 && "MultiplePages" != t.viewMode), e.PrevPage && e.PrevPage.setEnabled(t.pageNumber > 0 && "MultiplePages" != t.viewMode), e.NextPage && e.NextPage.setEnabled(t.pageNumber < t.pagesCount - 1 && "MultiplePages" != t.viewMode), e.LastPage && e.LastPage.setEnabled(t.pageNumber < t.pagesCount - 1 && "MultiplePages" != t.viewMode), e.ViewMode && (e.ViewMode.caption.innerHTML = o.loc[t.viewMode], e.ViewMode.image.src = o.images[t.viewMode + ".png"]), e.Zoom && (e.Zoom.caption.innerHTML = t.zoom + "%"), e.PageControl && (e.PageControl.countLabel.innerHTML = t.pagesCount, e.PageControl.textBox.value = t.pageNumber + 1, e.PageControl.setEnabled(!(t.pagesCount <= 1 || "MultiplePages" == t.viewMode))), A.jsObject.controls.menus.zoomMenu) {
                var i = A.jsObject.controls.menus.zoomMenu.items;
                for (var s in i) {
                    if (null == i[s].image) continue;
                    "ZoomOnePage" != i[s].name && "ZoomPageWidth" != i[s].name && (i[s].setSelected(i[s].name == "Zoom" + t.zoom), i[s].image.style.visibility = "hidden")
                }
            }
        }, A.changePinState = function(t) {
            A.jsObject.options.toolbar.autoHide = t, A.jsObject.options.isMobileDevice && (t ? (A.style.position = "absolute", A.style.zIndex = 5, A.jsObject.controls.reportPanel.style.marginBottom = "0", A.jsObject.controls.navigatePanel && (A.jsObject.controls.navigatePanel.style.zIndex = 5), setTimeout(function() {
                A.jsObject.controls.reportPanel.hideToolbar()
            }, 200)) : (A.style.position = "relative", A.style.zIndex = 2, A.style.opacity = 1, A.jsObject.controls.reportPanel.style.marginBottom = "0.5in", A.jsObject.controls.navigatePanel && (A.jsObject.controls.navigatePanel.style.zIndex = 2, A.jsObject.controls.navigatePanel.style.opacity = 1)), A.jsObject.controls.reportPanel.addPages(), A.jsObject.controls.parametersPanel && A.jsObject.InitializeParametersPanel(), A.jsObject.controls.bookmarksPanel && A.jsObject.InitializeBookmarksPanel())
        }, A.changeShortType = function() {
            if (A.shortType && A.jsObject.controls.viewer.offsetWidth < A.minWidth) return;
            A.shortType = A.jsObject.controls.viewer.offsetWidth < A.minWidth, shortButtons = ["Print", "Save", "Zoom", "ViewMode", "Design"];
            for (var t in shortButtons)(T = A.controls[shortButtons[t]]) && T.caption && (T.caption.style.display = A.shortType ? "none" : "")
        }, A.setEnabled = function(t) {
            t ? A.disabledPanel && (A.removeChild(A.disabledPanel), A.disabledPanel = null) : A.disabledPanel || (A.disabledPanel = document.createElement("div"), A.disabledPanel.className = "stiJsViewerDisabledPanel", A.appendChild(A.disabledPanel))
        }, window.onresize = function() {}, A.controls.Bookmarks && A.controls.Bookmarks.setEnabled(!1), A.controls.Parameters && A.controls.Parameters.setEnabled(!1)
    }, StiJsViewer.prototype.ToolBarSeparator = function() {
        var A = document.createElement("div");
        return A.style.width = "1px", this.options.isMobileDevice ? A.style.height = "0.4in" : this.options.isTouchDevice ? A.style.height = "26px" : A.style.height = "21px", A.className = "stiJsViewerToolBarSeparator", A
    }, StiJsViewer.prototype.PageControl = function() {
        var A = this.CreateHTMLTable(),
            t = A.addCell();
        t.style.padding = "0 2px 0 2px", t.innerHTML = this.collections.loc.Page;
        var e = null;
        this.options.isMobileDevice ? (e = document.createElement("span"), Object.defineProperty(e, "value", {
            get: function() {
                return parseInt(this.innerHTML)
            },
            set: function(A) {
                this.innerHTML = A
            }
        }), A.setEnabled = function(A) {}) : (e = this.TextBox("PageControl", 45), A.setEnabled = function(A) {
            this.textBox.setEnabled(A), this.style.opacity = A ? "1" : "0.5"
        }), A.addCell(e), A.textBox = e, e.action = function() {
            e.jsObject.options.pageNumber != e.getCorrectValue() - 1 && e.jsObject.postAction("GoToPage")
        }, e.getCorrectValue = function() {
            return value = parseInt(this.value), (value < 1 || !value) && (value = 1), value > e.jsObject.reportParams.pagesCount && (value = e.jsObject.reportParams.pagesCount), value
        };
        var o = A.addCell();
        o.style.padding = "0 2px 0 2px", o.innerHTML = this.collections.loc.PageOf;
        var i = A.addCell();
        return A.countLabel = i, i.style.padding = "0 2px 0 0", i.innerHTML = "?", A
    }, StiJsViewer.prototype.InitializeToolTip = function() {
        var A = document.createElement("div");
        A.id = this.controls.viewer.id + "ToolTip", A.jsObject = this, this.controls.toolTip = A, this.controls.mainPanel.appendChild(A), A.className = "stiJsViewerToolTip", A.style.display = "none", A.showTimer = null, A.hideTimer = null, A.visible = !1, A.innerTable = this.CreateHTMLTable(), A.appendChild(A.innerTable), A.textCell = A.innerTable.addCell(), A.textCell.className = "stiJsViewerToolTipTextCell", this.options.appearance.showTooltipsHelp ? (A.helpButton = this.SmallButton(null, this.collections.loc.TellMeMore, "HelpIcon.png", null, null, "stiJsViewerHyperlinkButton"), A.innerTable.addCellInNextRow(A.helpButton), A.helpButton.style.margin = "4px 8px 4px 8px") : A.textCell.style.border = 0, A.show = function(A, t, e, o, i) {
            if (this.visible && A == this.textCell.innerHTML || this.jsObject.options.isTouchDevice) return;
            this.hide(), this.jsObject.options.appearance.showTooltipsHelp && (this.helpButton.helpUrl = t, this.helpButton.action = function() {
                this.jsObject.showHelpWindow(this.helpUrl)
            }), this.textCell.innerHTML = A;
            var s = new Date,
                n = s.getTime() + 300;
            this.style.opacity = 1 / 100, this.style.display = "", this.style.left = (null != i ? e - this.offsetWidth + i : e) + "px", this.style.top = ("isNavigatePanelTooltip" == o ? this.jsObject.controls.reportPanel.offsetHeight + (this.jsObject.options.toolbar.visible ? this.jsObject.controls.toolbar.offsetHeight : 0) + (this.jsObject.controls.findPanel ? this.jsObject.controls.findPanel.offsetHeight : 0) + (this.jsObject.controls.drillDownPanel ? this.jsObject.controls.drillDownPanel.offsetHeight : 0) + (this.jsObject.controls.parametersPanel && "Top" == this.jsObject.options.appearance.parametersPanelPosition ? this.jsObject.controls.parametersPanel.offsetHeight : 0) - this.offsetHeight - 2 : o) + "px", this.visible = !0, this.jsObject.ShowAnimationForm(this, n)
        }, A.showWithDelay = function(A, t, e, o, i) {
            clearTimeout(this.showTimer), clearTimeout(this.hideTimer);
            var s = this;
            this.showTimer = setTimeout(function() {
                s.show(A, t, e, o, i)
            }, 300)
        }, A.hide = function() {
            this.visible = !1, clearTimeout(this.showTimer), this.style.display = "none"
        }, A.hideWithDelay = function() {
            clearTimeout(this.showTimer), clearTimeout(this.hideTimer);
            var A = this;
            this.hideTimer = setTimeout(function() {
                A.hide()
            }, 500)
        }, A.onmouseover = function() {
            clearTimeout(this.showTimer), clearTimeout(this.hideTimer)
        }, A.onmouseout = function() {
            this.hideWithDelay()
        }
    }, StiJsViewer.prototype.BaseForm = function(A, t, e) {
        var o = document.createElement("div");
        o.name = A, o.id = this.generateKey(), o.className = "stiJsViewerForm", o.jsObject = this, o.level = e, o.caption = null, o.visible = !1, o.style.display = "none", null == e && (e = 1), o.style.zIndex = 10 * e + 1, A && (this.controls.forms || (this.controls.forms = {}), null != this.controls.forms[A] && (this.controls.forms[A].changeVisibleState(!1), this.controls.mainPanel.removeChild(this.controls.forms[A])), this.controls.forms[A] = o), this.controls.mainPanel.appendChild(o), o.header = document.createElement("div"), o.header.thisForm = o, o.appendChild(o.header), o.header.className = "stiJsViewerFormHeader";
        var i = this.CreateHTMLTable();
        i.style.width = "100%", o.header.appendChild(i), o.caption = i.addCell(), null != t && (t && (o.caption.innerHTML = t), o.caption.style.textAlign = "left", o.caption.style.padding = "5px 10px 8px 15px"), o.buttonClose = this.SmallButton(null, null, "CloseForm.png"), o.buttonClose.style.display = "inline-block", o.buttonClose.form = o, o.buttonClose.action = function() {
            this.form.changeVisibleState(!1)
        };
        var s = i.addCell(o.buttonClose);
        s.style.verticalAlign = "top", s.style.width = "30px", s.style.textAlign = "right", s.style.padding = "2px 1px 1px 1px", o.container = document.createElement("div"), o.appendChild(o.container), o.container.className = "stiJsViewerFormContainer", o.buttonsSeparator = this.FormSeparator(), o.appendChild(o.buttonsSeparator), o.buttonsPanel = document.createElement("div"), o.appendChild(o.buttonsPanel), o.buttonsPanel.className = "stiJsViewerFormButtonsPanel";
        var n = this.CreateHTMLTable();
        return o.buttonsPanel.appendChild(n), o.buttonOk = this.FormButton(null, this.collections.loc.ButtonOk), o.buttonOk.action = function() {
            o.action()
        }, n.addCell(o.buttonOk).style.padding = "8px", o.buttonCancel = this.FormButton(null, this.collections.loc.ButtonCancel), o.buttonCancel.action = function() {
            o.changeVisibleState(!1)
        }, n.addCell(o.buttonCancel).style.padding = "8px 8px 8px 0", o.changeVisibleState = function(A) {
            if (A) {
                this.style.display = "", this.onshow(), this.jsObject.setObjectToCenter(this, 150), this.jsObject.controls.disabledPanels[this.level].changeVisibleState(!0), this.visible = !0, d = new Date;
                var t = d.getTime() + this.jsObject.options.formAnimDuration;
                this.flag = !1, this.jsObject.ShowAnimationForm(this, t)
            } else clearTimeout(this.animationTimer), this.visible = !1, this.style.display = "none", this.onhide(), this.jsObject.controls.disabledPanels[this.level].changeVisibleState(!1)
        }, o.action = function() {}, o.onshow = function() {}, o.onhide = function() {}, o.onmousedown = function() {
            if (this.isTouchStartFlag) return;
            this.ontouchstart(!0)
        }, o.ontouchstart = function(A) {
            var t = this;
            this.isTouchStartFlag = !A, clearTimeout(this.isTouchStartTimer), this.jsObject.options.formPressed = this, this.isTouchStartTimer = setTimeout(function() {
                t.isTouchStartFlag = !1
            }, 1e3)
        }, o.header.onmousedown = function(A) {
            if (!A || this.isTouchStartFlag) return;
            var t = A.clientX,
                e = A.clientY,
                o = this.thisForm.jsObject.FindPosX(this.thisForm, "stiJsViewerMainPanel"),
                i = this.thisForm.jsObject.FindPosY(this.thisForm, "stiJsViewerMainPanel");
            this.thisForm.jsObject.options.formInDrag = [t, e, o, i, this.thisForm]
        }, o.header.ontouchstart = function(A) {
            var t = this;
            this.isTouchStartFlag = !0, clearTimeout(this.isTouchStartTimer);
            var e = A.touches[0].pageX,
                o = A.touches[0].pageY,
                i = this.thisForm.jsObject.FindPosX(this.thisForm, "stiJsViewerMainPanel"),
                s = this.thisForm.jsObject.FindPosY(this.thisForm, "stiJsViewerMainPanel");
            this.thisForm.jsObject.options.formInDrag = [e, o, i, s, this.thisForm], this.isTouchStartTimer = setTimeout(function() {
                t.isTouchStartFlag = !1
            }, 1e3)
        }, o.header.ontouchmove = function(A) {
            if (A.preventDefault(), this.thisForm.jsObject.options.formInDrag) {
                var t = this.thisForm.jsObject.options.formInDrag,
                    e = t[2],
                    o = t[3],
                    i = A.touches[0].pageX,
                    s = A.touches[0].pageY,
                    n = t[0] - i,
                    a = t[1] - s,
                    r = e - n,
                    l = o - a;
                t[4].style.left = r + "px", t[4].style.top = l + "px"
            }
        }, o.header.ontouchend = function() {
            event.preventDefault(), this.thisForm.jsObject.options.formInDrag = !1
        }, o.move = function(A) {
            var t = this.jsObject.options.formInDrag[2] + (A.clientX - this.jsObject.options.formInDrag[0]),
                e = this.jsObject.options.formInDrag[3] + (A.clientY - this.jsObject.options.formInDrag[1]);
            this.style.left = t > 0 ? t + "px" : 0, this.style.top = e > 0 ? e + "px" : 0
        }, o
    }, StiJsViewer.prototype.FormSeparator = function() {
        var A = document.createElement("div");
        return A.className = "stiJsViewerFormSeparator", A
    }, StiJsViewer.prototype.InitializeExportForm = function() {
        var A = this.BaseForm("exportForm", this.collections.loc.ExportFormTitle, 1);
        A.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (A.style.color = this.options.toolbar.fontColor), A.style.fontSize = "12px", A.controls = {}, A.labels = {}, A.container.style.padding = "3px", A.addControlToParentControl = function(t, e, o, i) {
            null == o.innerTable && (o.innerTable = A.jsObject.CreateHTMLTable(), o.innerTable.style.width = "100%", o.appendChild(o.innerTable)), e.parentRow = o.innerTable.addRow();
            var s = o.innerTable.addCellInLastRow(),
                n = null != t ? o.innerTable.addCellInLastRow() : s;
            if (null != t) {
                s.style.padding = "0 8px 0 8px", s.style.minWidth = "150px", t && (s.innerHTML = t), A.labels[i] = s;
                var a = e.getAttribute("title");
                null != a && s.setAttribute("title", a)
            } else n.setAttribute("colspan", "2");
            n.appendChild(e)
        };
        for (var t = "8px", e = [
                ["SavingReportGroup", null, this.GroupPanel(this.collections.loc.SavingReport, !0, 390, "4px 0 4px 0"), null, "4px"],
                ["SaveReportMdc", null, this.RadioButton(A.name + "SaveReportMdc", A.name + "SavingReportGroup", this.collections.loc.SaveReportMdc, null), "SavingReportGroup.container", "6px " + t + " 3px " + t],
                ["SaveReportMdz", null, this.RadioButton(A.name + "SaveReportMdz", A.name + "SavingReportGroup", this.collections.loc.SaveReportMdz, null), "SavingReportGroup.container", "3px " + t + " 3px " + t],
                ["SaveReportMdx", null, this.RadioButton(A.name + "SaveReportMdx", A.name + "SavingReportGroup", this.collections.loc.SaveReportMdx, null), "SavingReportGroup.container", "3px " + t + " 0px " + t],
                ["SaveReportPassword", this.collections.loc.PasswordSaveReport, this.TextBox(null, 140, this.collections.loc.PasswordSaveReportTooltip), "SavingReportGroup.container", "4px " + t + " 0px " + t],
                ["PageRangeGroup", null, this.GroupPanel(this.collections.loc.PagesRange, !0, 390, "4px 0 4px 0"), null, "4px"],
                ["PageRangeAll", null, this.RadioButton(A.name + "PagesRangeAll", A.name + "PageRangeGroup", this.collections.loc.PagesRangeAll, this.collections.loc.PagesRangeAllTooltip), "PageRangeGroup.container", "6px " + t + " 6px " + t],
                ["PageRangeCurrentPage", null, this.RadioButton(A.name + "PagesRangeCurrentPage", A.name + "PageRangeGroup", this.collections.loc.PagesRangeCurrentPage, this.collections.loc.PagesRangeCurrentPageTooltip), "PageRangeGroup.container", "0px " + t + " 4px " + t],
                ["PageRangePages", null, this.RadioButton(A.name + "PagesRangePages", A.name + "PageRangeGroup", this.collections.loc.PagesRangePages, this.collections.loc.PagesRangePagesTooltip), "PageRangeGroup.container", "0px " + t + " 0px " + t],
                ["PageRangePagesText", null, this.TextBox(null, 130, this.collections.loc.PagesRangePagesTooltip), "PageRangePages.lastCell", "0 0 0 30px"],
                ["SettingsGroup", null, this.GroupPanel(this.collections.loc.SettingsGroup, !0, 390, "4px 0 4px 0"), null, "4px"],
                ["ImageType", this.collections.loc.Type, this.DropDownListForExportForm(null, 160, this.collections.loc.TypeTooltip, this.GetImageTypesItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["DataType", this.collections.loc.Type, this.DropDownListForExportForm(null, 160, this.collections.loc.TypeTooltip, this.GetDataTypesItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ExcelType", this.collections.loc.Type, this.DropDownListForExportForm(null, 160, this.collections.loc.TypeTooltip, this.GetExcelTypesItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["HtmlType", this.collections.loc.Type, this.DropDownListForExportForm(null, 160, this.collections.loc.TypeTooltip, this.GetHtmlTypesItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["Zoom", this.collections.loc.ZoomHtml, this.DropDownListForExportForm(null, 160, this.collections.loc.ZoomHtmlTooltip, this.GetZoomItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ImageFormatForHtml", this.collections.loc.ImageFormatForHtml, this.DropDownListForExportForm(null, 160, this.collections.loc.ImageFormatForHtmlTooltip, this.GetImageFormatForHtmlItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ExportMode", this.collections.loc.ExportMode, this.DropDownListForExportForm(null, 160, this.collections.loc.ExportModeTooltip, this.GetExportModeItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["CompressToArchive", null, this.CheckBox(null, this.collections.loc.CompressToArchive, this.collections.loc.CompressToArchiveTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["UseEmbeddedImages", null, this.CheckBox(null, this.collections.loc.EmbeddedImageData, this.collections.loc.EmbeddedImageDataTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["AddPageBreaks", null, this.CheckBox(null, this.collections.loc.AddPageBreaks, this.collections.loc.AddPageBreaksTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["ImageResolution", this.collections.loc.ImageResolution, this.DropDownListForExportForm(null, 160, this.collections.loc.ImageResolutionTooltip, this.GetImageResolutionItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ImageCompressionMethod", this.collections.loc.ImageCompressionMethod, this.DropDownListForExportForm(null, 160, this.collections.loc.ImageCompressionMethodTooltip, this.GetImageCompressionMethodItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["AllowEditable", this.collections.loc.AllowEditable, this.DropDownListForExportForm(null, 160, this.collections.loc.AllowEditableTooltip, this.GetAllowEditableItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ImageQuality", this.collections.loc.ImageQuality, this.DropDownListForExportForm(null, 160, this.collections.loc.ImageQualityTooltip, this.GetImageQualityItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ContinuousPages", null, this.CheckBox(null, this.collections.loc.ContinuousPages, this.collections.loc.ContinuousPagesTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["StandardPdfFonts", null, this.CheckBox(null, this.collections.loc.StandardPDFFonts, this.collections.loc.StandardPDFFontsTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["EmbeddedFonts", null, this.CheckBox(null, this.collections.loc.EmbeddedFonts, this.collections.loc.EmbeddedFontsTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["UseUnicode", null, this.CheckBox(null, this.collections.loc.UseUnicode, this.collections.loc.UseUnicodeTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["Compressed", null, this.CheckBox(null, this.collections.loc.Compressed, this.collections.loc.CompressedTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["ExportRtfTextAsImage", null, this.CheckBox(null, this.collections.loc.ExportRtfTextAsImage, this.collections.loc.ExportRtfTextAsImageTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["PdfACompliance", null, this.CheckBox(null, this.collections.loc.PdfACompliance, this.collections.loc.PdfAComplianceTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["KillSpaceLines", null, this.CheckBox(null, this.collections.loc.KillSpaceLines, this.collections.loc.KillSpaceLinesTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["PutFeedPageCode", null, this.CheckBox(null, this.collections.loc.PutFeedPageCode, this.collections.loc.PutFeedPageCodeTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["DrawBorder", null, this.CheckBox(null, this.collections.loc.DrawBorder, this.collections.loc.DrawBorderTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["CutLongLines", null, this.CheckBox(null, this.collections.loc.CutLongLines, this.collections.loc.CutLongLinesTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["BorderType", this.collections.loc.BorderType + ":", this.DropDownListForExportForm(null, 160, this.collections.loc.BorderTypeTooltip, this.GetBorderTypeItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ZoomX", this.collections.loc.ZoomXY ? this.collections.loc.ZoomXY.replace(":", "") + " X: " : "", this.DropDownListForExportForm(null, 160, this.collections.loc.ZoomXYTooltip, this.GetZoomItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ZoomY", this.collections.loc.ZoomXY ? this.collections.loc.ZoomXY.replace(":", "") + " Y: " : "", this.DropDownListForExportForm(null, 160, this.collections.loc.ZoomXYTooltip, this.GetZoomItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["EncodingTextOrCsvFile", this.collections.loc.EncodingData, this.DropDownListForExportForm(null, 160, this.collections.loc.EncodingDataTooltip, this.GetEncodingDataItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ImageFormat", this.collections.loc.ImageFormat, this.DropDownListForExportForm(null, 160, this.collections.loc.ImageFormatTooltip, this.GetImageFormatItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["DitheringType", this.collections.loc.MonochromeDitheringType, this.DropDownListForExportForm(null, 160, this.collections.loc.MonochromeDitheringTypeTooltip, this.GetMonochromeDitheringTypeItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["TiffCompressionScheme", this.collections.loc.TiffCompressionScheme, this.DropDownListForExportForm(null, 160, this.collections.loc.TiffCompressionSchemeTooltip, this.GetTiffCompressionSchemeItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["CutEdges", null, this.CheckBox(null, this.collections.loc.CutEdges, this.collections.loc.CutEdgesTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["MultipleFiles", null, this.CheckBox(null, this.collections.loc.MultipleFiles, this.collections.loc.MultipleFilesTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["ExportDataOnly", null, this.CheckBox(null, this.collections.loc.ExportDataOnly, this.collections.loc.ExportDataOnlyTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["UseDefaultSystemEncoding", null, this.CheckBox(null, this.collections.loc.UseDefaultSystemEncoding, this.collections.loc.UseDefaultSystemEncodingTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["EncodingDifFile", this.collections.loc.EncodingDifFile, this.DropDownListForExportForm(null, 160, this.collections.loc.EncodingDifFileTooltip, this.GetEncodingDifFileItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["ExportModeRtf", this.collections.loc.ExportModeRtf, this.DropDownListForExportForm(null, 160, this.collections.loc.ExportModeRtfTooltip, this.GetExportModeRtfItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["UsePageHeadersAndFooters", null, this.CheckBox(null, this.collections.loc.UsePageHeadersFooters, this.collections.loc.UsePageHeadersFootersTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["RemoveEmptySpaceAtBottom", null, this.CheckBox(null, this.collections.loc.RemoveEmptySpace, this.collections.loc.RemoveEmptySpaceTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["Separator", this.collections.loc.Separator, this.TextBox(null, 160, this.collections.loc.SeparatorTooltip), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["DataExportMode", this.collections.loc.BandsFilter, this.DropDownListForExportForm(null, 160, this.collections.loc.BandsFilterTooltip, this.GetDataExportModeItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["SkipColumnHeaders", null, this.CheckBox(null, this.collections.loc.SkipColumnHeaders, this.collections.loc.SkipColumnHeadersTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["ExportObjectFormatting", null, this.CheckBox(null, this.collections.loc.ExportObjectFormatting, this.collections.loc.ExportObjectFormattingTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["UseOnePageHeaderAndFooter", null, this.CheckBox(null, this.collections.loc.UseOnePageHeaderFooter, this.collections.loc.UseOnePageHeaderFooterTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["ExportEachPageToSheet", null, this.CheckBox(null, this.collections.loc.ExportEachPageToSheet, this.collections.loc.ExportEachPageToSheetTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["ExportPageBreaks", null, this.CheckBox(null, this.collections.loc.ExportPageBreaks, this.collections.loc.ExportPageBreaksTooltip), "SettingsGroup.container", "4px " + t + " 4px " + t],
                ["EncodingDbfFile", this.collections.loc.EncodingDbfFile, this.DropDownListForExportForm(null, 160, this.collections.loc.EncodingDbfFileTooltip, this.GetEncodingDbfFileItems(), !0), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["DocumentSecurityButton", null, this.SmallButton(null, this.collections.loc.DocumentSecurityButton, null, null, "Down", "stiJsViewerFormButton"), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["DigitalSignatureButton", null, this.SmallButton(null, this.collections.loc.DigitalSignatureButton, null, null, "Down", "stiJsViewerFormButton"), "SettingsGroup.container", "2px " + t + " 2px " + t],
                ["OpenAfterExport", null, this.CheckBox(null, this.collections.loc.OpenAfterExport, this.collections.loc.OpenAfterExportTooltip), null, "4px " + t + " 4px " + t],
                ["DocumentSecurityMenu", null, this.BaseMenu(A.name + "DocumentSecurityMenu", null, "Down", "stiJsViewerDropdownPanel"), null, null],
                ["PasswordInputUser", this.collections.loc.UserPassword, this.TextBox(null, 160, this.collections.loc.UserPasswordTooltip), "DocumentSecurityMenu.innerContent", "8px " + t + " 2px " + t],
                ["PasswordInputOwner", this.collections.loc.OwnerPassword, this.TextBox(null, 160, this.collections.loc.OwnerPasswordTooltip), "DocumentSecurityMenu.innerContent", "2px " + t + " 2px " + t],
                ["PrintDocument", null, this.CheckBox(null, this.collections.loc.AllowPrintDocument, this.collections.loc.AllowPrintDocumentTooltip), "DocumentSecurityMenu.innerContent", "4px " + t + " 4px " + t],
                ["ModifyContents", null, this.CheckBox(null, this.collections.loc.AllowModifyContents, this.collections.loc.AllowModifyContentsTooltip), "DocumentSecurityMenu.innerContent", "4px " + t + " 4px " + t],
                ["CopyTextAndGraphics", null, this.CheckBox(null, this.collections.loc.AllowCopyTextAndGraphics, this.collections.loc.AllowCopyTextAndGraphicsTooltip), "DocumentSecurityMenu.innerContent", "4px " + t + " 4px " + t],
                ["AddOrModifyTextAnnotations", null, this.CheckBox(null, this.collections.loc.AllowAddOrModifyTextAnnotations, this.collections.loc.AllowAddOrModifyTextAnnotationsTooltip), "DocumentSecurityMenu.innerContent", "4px " + t + " 4px " + t],
                ["KeyLength", this.collections.loc.EncryptionKeyLength, this.DropDownListForExportForm(null, 160, this.collections.loc.EncryptionKeyLengthTooltip, this.GetEncryptionKeyLengthItems(), !0), "DocumentSecurityMenu.innerContent", "2px " + t + " 8px " + t],
                ["DigitalSignatureMenu", null, this.BaseMenu(A.name + "DigitalSignatureMenu", null, "Down", "stiJsViewerDropdownPanel"), null, null],
                ["UseDigitalSignature", null, this.CheckBox(null, this.collections.loc.UseDigitalSignature, this.collections.loc.UseDigitalSignatureTooltip), "DigitalSignatureMenu.innerContent", "8px " + t + " 4px " + t],
                ["GetCertificateFromCryptoUI", null, this.CheckBox(null, this.collections.loc.GetCertificateFromCryptoUI, this.collections.loc.GetCertificateFromCryptoUITooltip), "DigitalSignatureMenu.innerContent", "4px " + t + " 4px " + t],
                ["SubjectNameString", this.collections.loc.SubjectNameString, this.TextBox(null, 160, this.collections.loc.SubjectNameStringTooltip), "DigitalSignatureMenu.innerContent", "8px " + t + " 8px " + t]
            ], o = 0; o < e.length; o++) {
            var i = e[o][0],
                s = e[o][1],
                n = e[o][2],
                a = e[o][3];
            if (A.controls[i] = n, e[o][4] && (n.style.margin = e[o][4]), "stiJsViewerGroupPanel" == n.className && (n.container.style.paddingBottom = "6px"), "DocumentSecurityMenu" == i || "DigitalSignatureMenu" == i) continue;
            if (null != a) {
                var r = a.split("."),
                    l = A.controls[r[0]];
                if (r.length > 1)
                    for (var h = 1; h < r.length; h++) l && (l = l[r[h]]);
                l && A.addControlToParentControl(s, n, l, i);
                continue
            }
            A.addControlToParentControl(s, n, A.container, i)
        }
        A.controls.PageRangePages.lastCell.style.paddingLeft = "60px";
        try {
            A.controls.PasswordInputUser.setAttribute("type", "password"), A.controls.PasswordInputOwner.setAttribute("type", "password"), A.controls.SaveReportPassword.setAttribute("type", "password")
        } catch (A) {}
        A.controls.DocumentSecurityMenu.parentButton = A.controls.DocumentSecurityButton, A.controls.DigitalSignatureMenu.parentButton = A.controls.DigitalSignatureButton;
        for (var p = ["DocumentSecurityButton", "DigitalSignatureButton"], o = 0; o < p.length; o++) {
            var c = A.controls[p[o]];
            c.innerTable.style.width = "100%", c.style.minWidth = "220px", c.caption.style.textAlign = "center", c.caption.style.width = "100%", c.style.display = "inline-block"
        }
        A.controls.ImageType.action = function() {
            A.showControlsByExportFormat("Image" + this.key, !0)
        }, A.controls.DataType.action = function() {
            A.showControlsByExportFormat(this.key, !0)
        }, A.controls.ExcelType.action = function() {
            var t = "ExcelBinary" == this.key ? "Excel" : this.key;
            A.showControlsByExportFormat(t, !0)
        }, A.controls.HtmlType.action = function() {
            A.showControlsByExportFormat(this.key, !0)
        };
        for (var g = ["SaveReportMdc", "SaveReportMdz", "SaveReportMdx"], o = 0; o < g.length; o++) A.controls[g[o]].controlName = g[o], A.controls[g[o]].onChecked = function() {
            this.isChecked && A.controls.SaveReportPassword.setEnabled("SaveReportMdx" == this.controlName)
        };
        A.controls.PdfACompliance.onChecked = function() {
            for (var t = ["StandardPdfFonts", "EmbeddedFonts", "UseUnicode"], e = 0; e < t.length; e++) A.controls[t[e]].setEnabled(!this.isChecked)
        };
        for (var g = ["EmbeddedFonts", "UseUnicode"], o = 0; o < g.length; o++) A.controls[g[o]].onChecked = function() {
            this.isChecked && A.controls.StandardPdfFonts.setChecked(!1)
        };
        A.controls.StandardPdfFonts.onChecked = function() {
            if (!this.isChecked) return;
            for (var t = ["EmbeddedFonts", "UseUnicode"], e = 0; e < t.length; e++) A.controls[t[e]].setChecked(!1)
        }, A.controls.ImageCompressionMethod.onChange = function() {
            A.controls.ImageQuality.setEnabled("Jpeg" == this.key)
        }, A.controls.ExportDataOnly.onChecked = function() {
            A.controls.ExportObjectFormatting.setEnabled(this.isChecked), A.controls.UseOnePageHeaderAndFooter.setEnabled(!this.isChecked)
        }, A.controls.UseDefaultSystemEncoding.onChecked = function() {
            A.controls.EncodingDifFile.setEnabled(!this.isChecked)
        }, A.controls.ImageType.onChange = function() {
            A.controls.TiffCompressionScheme.setEnabled("Tiff" == this.key);
            var t = A.jsObject.GetImageFormatItems("Emf" == this.key);
            A.controls.ImageFormat.menu.addItems(t)
        }, A.controls.ImageFormat.onChange = function() {
            A.controls.DitheringType.setEnabled("Monochrome" == this.key)
        }, A.controls.DocumentSecurityButton.action = function() {
            A.jsObject.controls.menus[A.name + "DocumentSecurityMenu"].changeVisibleState(!this.isSelected)
        }, A.controls.DigitalSignatureButton.action = function() {
            A.jsObject.controls.menus[A.name + "DigitalSignatureMenu"].changeVisibleState(!this.isSelected)
        }, A.controls.UseDigitalSignature.onChecked = function() {
            A.controls.GetCertificateFromCryptoUI.setEnabled(this.isChecked), A.controls.SubjectNameString.setEnabled(this.isChecked && !A.controls.GetCertificateFromCryptoUI.isChecked)
        }, A.controls.GetCertificateFromCryptoUI.onChecked = function() {
            A.controls.SubjectNameString.setEnabled(!this.isChecked && A.controls.UseDigitalSignature.isChecked)
        }, A.setControlsValue = function(t, e) {
            var o = t || A.jsObject.getDefaultExportSettings(A.exportFormat);
            if (!o) return;
            var i = A.getExportControlNames();
            for (var s in A.controls) null != A.controls[s].setEnabled && A.controls[s].setEnabled(!0);
            var n = A.jsObject.isContainted(i, "ImageType") && "ImageTiff" != A.exportFormat;
            A.controls[n ? "PageRangeCurrentPage" : "PageRangeAll"].setChecked(!0), A.controls.PageRangeAll.setEnabled(!n);
            for (var a in o)
                if (A.jsObject.isContainted(i, a)) {
                    if ("ImageType" == a || "DataType" == a || "ExcelType" == a || "HtmlType" == a) {
                        if (e) continue;
                        switch (a) {
                            case "ImageType":
                                A.jsObject.options.exports.showExportToImageBmp || "Bmp" != o[a] || (o[a] = "Gif"), A.jsObject.options.exports.showExportToImageGif || "Gif" != o[a] || (o[a] = "Jpeg"), A.jsObject.options.exports.showExportToImageJpeg || "Jpeg" != o[a] || (o[a] = "Pcx"), A.jsObject.options.exports.showExportToImagePcx || "Pcx" != o[a] || (o[a] = "Png"), A.jsObject.options.exports.showExportToImagePng || "Png" != o[a] || (o[a] = "Tiff"), A.jsObject.options.exports.showExportToImageTiff || "Tiff" != o[a] || (o[a] = "Emf"), A.jsObject.options.exports.showExportToImageMetafile || "Emf" != o[a] || (o[a] = "Svg"), A.jsObject.options.exports.showExportToImageSvg || "Svg" != o[a] || (o[a] = "Svgz"), A.jsObject.options.exports.showExportToImageSvgz || "Svgz" != o[a] || (o[a] = "Bmp");
                                break;
                            case "DataType":
                                A.jsObject.options.exports.showExportToCsv || "Csv" != o[a] || (o[a] = "Dbf"), A.jsObject.options.exports.showExportToDbf || "Dbf" != o[a] || (o[a] = "Xml"), A.jsObject.options.exports.showExportToXml || "Xml" != o[a] || (o[a] = "Dif"), A.jsObject.options.exports.showExportToDif || "Dif" != o[a] || (o[a] = "Sylk"), A.jsObject.options.exports.showExportToSylk || "Sylk" != o[a] || (o[a] = "Csv");
                                break;
                            case "ExcelType":
                                A.jsObject.options.exports.showExportToExcel2007 || "Excel2007" != o[a] || (o[a] = "ExcelBinary"), A.jsObject.options.exports.showExportToExcel || "ExcelBinary" != o[a] || (o[a] = "ExcelXml"), A.jsObject.options.exports.showExportToExcelXml || "ExcelXml" != o[a] || (o[a] = "Excel2007");
                                break;
                            case "HtmlType":
                                A.jsObject.options.exports.showExportToHtml || "Html" != o[a] || (o[a] = "Html5"), A.jsObject.options.exports.showExportToHtml5 || "Html5" != o[a] || (o[a] = "Mht"), A.jsObject.options.exports.showExportToMht || "Mht" != o[a] || (o[a] = "Html");
                                break
                        }
                    }
                    var r = A.controls[a];
                    A.setDefaultValueToControl(r, o[a])
                }
            if ("Document" == A.exportFormat && A.controls.SaveReportMdc.setChecked(!0), "Pdf" == A.exportFormat && o.StandardPdfFonts && A.controls.StandardPdfFonts.setChecked(!0), A.jsObject.isContainted(i, "HtmlType") && o.ImageFormat && A.controls.ImageFormatForHtml.setKey(o.ImageFormat), "Rtf" == A.exportFormat && o.ExportMode && A.controls.ExportModeRtf.setKey(o.ExportMode), A.jsObject.isContainted(i, "ImageType") && o.ImageZoom && A.controls.Zoom.setKey(o.ImageZoom.toString()), "Pdf" == A.exportFormat) {
                var l = o.UserAccessPrivileges;
                A.controls.PrintDocument.setChecked(-1 != l.indexOf("PrintDocument") || "All" == l), A.controls.ModifyContents.setChecked(-1 != l.indexOf("ModifyContents") || "All" == l), A.controls.CopyTextAndGraphics.setChecked(-1 != l.indexOf("CopyTextAndGraphics") || "All" == l), A.controls.AddOrModifyTextAnnotations.setChecked(-1 != l.indexOf("AddOrModifyTextAnnotations") || "All" == l)
            }
            "Difs" != A.exportFormat && "Sylk" != A.exportFormat || A.controls.EncodingDifFile.setKey("437"), "Dbf" == A.exportFormat && o.CodePage && A.controls.EncodingDbfFile.setKey(o.CodePage), "Text" != A.exportFormat && "Csv" != A.exportFormat || !o.Encoding || A.controls.EncodingTextOrCsvFile.setKey(o.Encoding)
        }, A.onhide = function() {
            A.jsObject.SetCookie("StimulsoftWebViewerExportSettingsOpeningGroups", JSON.stringify({
                SavingReportGroup: A.controls.SavingReportGroup.isOpened,
                PageRangeGroup: A.controls.PageRangeGroup.isOpened,
                SettingsGroup: A.controls.SettingsGroup.isOpened
            }))
        }, A.show = function(t, e) {
            if (A.actionType = e, A.showControlsByExportFormat(t || "Pdf"), A.jsObject.options.exports.storeExportSettings) {
                var o = A.jsObject.GetCookie("StimulsoftWebViewerExportSettings" + A.jsObject.GetCommonExportFormat(A.exportFormat));
                if (o) {
                    var i = JSON.parse(o),
                        t = i.ImageType || i.DataType || i.ExcelType || i.HtmlType;
                    "ExcelBinary" == t && (t = "Excel"), t && A.showControlsByExportFormat(i.ImageType ? "Image" + t : t), A.setControlsValue(i)
                }
            }
            var s = A.jsObject.GetCookie("StimulsoftWebViewerExportSettingsOpeningGroups"),
                n = s ? JSON.parse(s) : null;
            A.controls.GetCertificateFromCryptoUI.style.display = "none", A.controls.GetCertificateFromCryptoUI.setChecked(!1), A.controls.SavingReportGroup.changeOpeningState(!n || n.SavingReportGroup), A.controls.PageRangeGroup.changeOpeningState(!n || n.PageRangeGroup), A.controls.SettingsGroup.changeOpeningState(!!n && n.SettingsGroup), A.changeVisibleState(!0)
        }, A.action = function() {
            var t = A.getExportSettingsObject();
            A.changeVisibleState(!1), A.jsObject.options.exports.storeExportSettings && A.jsObject.SetCookie("StimulsoftWebViewerExportSettings" + A.jsObject.GetCommonExportFormat(A.exportFormat), JSON.stringify(t)), A.actionType == A.jsObject.options.actions.exportReport ? A.jsObject.postExport(A.exportFormat, t) : A.jsObject.options.email.showEmailDialog ? A.jsObject.controls.forms.sendEmailForm.show(A.exportFormat, t) : (t.Email = A.jsObject.options.email.defaultEmailAddress, t.Message = A.jsObject.options.email.defaultEmailMessage, t.Subject = A.jsObject.options.email.defaultEmailSubject, A.jsObject.postEmail(A.exportFormat, t))
        }, A.showControlsByExportFormat = function(t, e) {
            A.exportFormat = t;
            for (var o in A.controls) {
                var i = A.controls[o],
                    s = A.getExportControlNames();
                i.parentRow && (i.parentRow.style.display = this.actionType != this.jsObject.options.actions.exportReport && "OpenAfterExport" == o || !A.jsObject.isContainted(s, o) ? "none" : "")
            }
            A.setControlsValue(null, e)
        }, A.setDefaultValueToControl = function(A, t) {
            null != A.setKey ? A.setKey(t.toString()) : null != A.setChecked ? A.setChecked(t) : null != A.value && (A.value = t)
        }, A.getValueFromControl = function(A) {
            if (0 == A.isEnabled) return null == A.setChecked && null;
            if (null != A.setKey) return A.key;
            if (null != A.setChecked) return A.isChecked;
            if (null != A.value) return A.value;
            return null
        }, A.getExportControlNames = function() {
            var t = {
                Document: ["SavingReportGroup", "SaveReportMdc", "SaveReportMdz", "SaveReportMdx", "SaveReportPassword"],
                Pdf: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ImageResolution", "ImageCompressionMethod", "ImageQuality", "EmbeddedFonts", "ExportRtfTextAsImage", "PdfACompliance", "DocumentSecurityButton", "DigitalSignatureButton", "OpenAfterExport", "AllowEditable", "PasswordInputUser", "PasswordInputOwner", "PrintDocument", "ModifyContents", "CopyTextAndGraphics", "AddOrModifyTextAnnotations", "KeyLength", "UseDigitalSignature", "GetCertificateFromCryptoUI", "SubjectNameString"],
                Xps: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ImageResolution", "ImageQuality", "OpenAfterExport", "ExportRtfTextAsImage"],
                Ppt2007: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ImageResolution", "ImageQuality"],
                Html: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "HtmlType", "Zoom", "ImageFormatForHtml", "ExportMode", "UseEmbeddedImages", "AddPageBreaks", "OpenAfterExport"],
                Html5: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "HtmlType", "ImageFormatForHtml", "ImageResolution", "ImageQuality", "ContinuousPages", "OpenAfterExport"],
                Mht: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "HtmlType", "Zoom", "ImageFormatForHtml", "ExportMode", "AddPageBreaks"],
                Text: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "KillSpaceLines", "PutFeedPageCode", "DrawBorder", "CutLongLines", "BorderType", "ZoomX", "ZoomY", "EncodingTextOrCsvFile"],
                Rtf: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ImageResolution", "ImageQuality", "ExportModeRtf", "UsePageHeadersAndFooters", "RemoveEmptySpaceAtBottom"],
                Word2007: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ImageResolution", "ImageQuality", "UsePageHeadersAndFooters", "RemoveEmptySpaceAtBottom"],
                Odt: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ImageResolution", "ImageQuality", "RemoveEmptySpaceAtBottom"],
                Excel: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ExcelType", "ImageResolution", "ImageQuality", "ExportDataOnly", "ExportObjectFormatting", "UseOnePageHeaderAndFooter", "ExportEachPageToSheet", "ExportPageBreaks"],
                ExcelXml: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ExcelType"],
                Excel2007: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ExcelType", "ImageResolution", "ImageQuality", "ExportDataOnly", "ExportObjectFormatting", "UseOnePageHeaderAndFooter", "ExportEachPageToSheet", "ExportPageBreaks"],
                Ods: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ImageResolution", "ImageQuality"],
                Csv: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "DataType", "EncodingTextOrCsvFile", "Separator", "SkipColumnHeaders", "DataExportMode"],
                Dbf: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "DataType", "EncodingDbfFile"],
                Dif: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "DataType", "ExportDataOnly", "UseDefaultSystemEncoding", "EncodingDifFile"],
                Sylk: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "DataType", "ExportDataOnly", "UseDefaultSystemEncoding", "EncodingDifFile"],
                Xml: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "DataType"],
                ImageBmp: ["PageRangeGroup", "PageRangeAll", "PageRangeCurrentPage", "PageRangePages", "PageRangePagesText", "SettingsGroup", "ImageType", "Zoom", "ImageResolution", "ImageFormat", "DitheringType", "TiffCompressionScheme", "CutEdges"]
            };
            return t.ImageGif = t.ImageJpeg = t.ImagePcx = t.ImageJpeg = t.ImagePng = t.ImageTiff = t.ImageEmf = t.ImageSvg = t.ImageSvgz = t.ImageBmp, t.ExcelBinary = t.Excel, t[A.exportFormat]
        }, A.getExportSettingsObject = function() {
            for (var t = {}, e = A.getExportControlNames(), o = 0; o < e.length; o++) {
                var i = A.controls,
                    s = e[o],
                    n = i[s];
                if (n.groupName == A.name + "SavingReportGroup" || n.groupName == A.name + "PageRangeGroup" || "PageRangePagesText" == s) continue;
                if ("SavingReportGroup" == s) t.Format = i.SaveReportMdc.isChecked ? "Mdc" : i.SaveReportMdz.isChecked ? "Mdz" : "Mdx", "Mdx" == t.Format && (t.Password = i.SaveReportPassword.value);
                else if ("PageRangeGroup" == s) t.PageRange = i.PageRangeAll.isChecked ? "All" : i.PageRangeCurrentPage.isChecked ? (A.jsObject.reportParams.pageNumber + 1).toString() : i.PageRangePagesText.value;
                else {
                    var a = A.getValueFromControl(n);
                    null != a && (t[s] = a)
                }
            }
            if ("Pdf" == A.exportFormat) {
                t.UserAccessPrivileges = "";
                for (var r = ["PrintDocument", "ModifyContents", "CopyTextAndGraphics", "AddOrModifyTextAnnotations"], o = 0; o < r.length; o++) t[r[o]] && ("" != t.UserAccessPrivileges && (t.UserAccessPrivileges += ", "), t.UserAccessPrivileges += r[o], delete t[r[o]])
            }
            A.jsObject.isContainted(e, "ImageType") && (t.ImageZoom = t.Zoom, delete t.Zoom);
            for (var r = [
                    ["ImageFormatForHtml", "ImageFormat"],
                    ["EncodingTextOrCsvFile", "Encoding"],
                    ["ExportModeRtf", "ExportMode"],
                    ["EncodingDifFile", "Encoding"],
                    ["EncodingDbfFile", "CodePage"]
                ], o = 0; o < r.length; o++) null != t[r[o][0]] && (t[r[o][1]] = t[r[o][0]], delete t[r[o][0]]);
            return t
        }
    }, StiJsViewer.prototype.GetCommonExportFormat = function(A) {
        if ("Html" == A || "Html5" == A || "Mht" == A) return "Html";
        if ("Excel" == A || "Excel2007" == A || "ExcelXml" == A) return "Excel";
        if ("Csv" == A || "Dbf" == A || "Xml" == A || "Dif" == A || "Sylk" == A) return "Data";
        if ("ImageBmp" == A || "ImageGif" == A || "ImageJpeg" == A || "ImagePcx" == A || "ImagePng" == A || "ImageTiff" == A || "ImageEmf" == A || "ImageSvg" == A || "ImageSvgz" == A) return "Image";
        return A
    }, StiJsViewer.prototype.DropDownListForExportForm = function(A, t, e, o, i, s) {
        var n = this.DropDownList(A, t, e, o, i, s);
        return n.onChange = function() {}, n.setKey = function(A) {
            n.key = A, n.onChange();
            for (var t in n.items)
                if (A == n.items[t].key) return this.textBox.value = n.items[t].caption, void(n.image && (n.image.style.background = "url(" + n.jsObject.collections.images[n.items[t].imageName] + ")"));
            n.textBox.value = A.toString()
        }, n.menu && (n.menu.action = function(A) {
            this.changeVisibleState(!1), this.dropDownList.key = A.key, this.dropDownList.textBox.value = A.caption.innerHTML, this.dropDownList.image && (this.dropDownList.image.style.background = "url(" + this.jsObject.collections.images[A.imageName] + ")"), this.dropDownList.onChange(), this.dropDownList.action()
        }), n
    }, StiJsViewer.prototype.InitializeErrorMessageForm = function() {
        var A = this.BaseForm("errorMessageForm", this.collections.loc.Error, 4);
        A.buttonCancel.style.display = "none";
        var t = this.CreateHTMLTable();
        return A.container.appendChild(t), A.image = document.createElement("img"), A.image.style.padding = "15px", A.image.src = this.collections.images["MsgFormError.png"], t.addCellInLastRow(A.image), A.description = t.addCellInLastRow(), A.description.className = "stiJsViewerMessagesFormDescription", A.description.style.maxWidth = "600px", A.description.style.color = this.options.toolbar.fontColor, A.show = function(A, t) {
            if (this.visible) return void(this.description.innerHTML += "<br/><br/>" + A);
            this.jsObject.controls.forms.errorMessageForm && (this.jsObject.controls.mainPanel.removeChild(this.jsObject.controls.forms.errorMessageForm), this.jsObject.controls.mainPanel.appendChild(this.jsObject.controls.forms.errorMessageForm)), this.caption.innerHTML = this.jsObject.collections.loc.FormViewerTitle, "Warning" == t ? this.image.src = this.jsObject.collections.images["MsgFormWarning.png"] : 1 == t || "Info" == t ? this.image.src = this.jsObject.collections.images["MsgFormInfo.png"] : (this.image.src = this.jsObject.collections.images["MsgFormError.png"], this.caption.innerHTML = this.jsObject.collections.loc.Error), this.changeVisibleState(!0), this.description.innerHTML = A
        }, A.action = function() {
            this.changeVisibleState(!1)
        }, A
    }, StiJsViewer.prototype.InitializeSendEmailForm = function(A) {
        var t = this.BaseForm("sendEmailForm", this.collections.loc.EmailOptions, 1);
        t.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (t.style.color = this.options.toolbar.fontColor), t.style.fontSize = "12px", t.controls = {};
        var e = [
                ["Email", this.collections.loc.Email, this.TextBox("sendEmailFormEmail", 280)],
                ["Subject", this.collections.loc.Subject, this.TextBox("sendEmailFormSubject", 280)],
                ["Message", this.collections.loc.Message, this.TextArea("sendEmailFormMessage", 280, 70)],
                ["AttachmentCell", this.collections.loc.Attachment, document.createElement("div")]
            ],
            o = this.CreateHTMLTable();
        t.container.appendChild(o);
        for (var i = 0; i < e.length; i++) {
            var s = e[i][2];
            s.style.margin = "4px", t.controls[e[i][0]] = s, o.addTextCellInLastRow(e[i][1]).className = "stiJsViewerCaptionControls", o.addCellInLastRow(s), i < e.length - 1 && o.addRow()
        }
        t.show = function(A, t) {
            this.changeVisibleState(!0), this.exportSettings = t, this.exportFormat = A;
            for (var e in this.controls) this.controls[e].value = "";
            this.controls.Email.value = this.jsObject.options.email.defaultEmailAddress, this.controls.Message.value = this.jsObject.options.email.defaultEmailMessage, this.controls.Subject.value = this.jsObject.options.email.defaultEmailSubject;
            var o = this.exportFormat.toLowerCase().replace("image", "");
            switch (o) {
                case "excel":
                    o = "xls";
                    break;
                case "excel2007":
                    o = "xlsx";
                    break;
                case "excelxml":
                    o = "xls";
                    break;
                case "html5":
                    o = "html";
                    break;
                case "jpeg":
                    o = "jpg";
                    break;
                case "ppt2007":
                    o = "ppt";
                    break;
                case "text":
                    o = "txt";
                    break;
                case "word2007":
                    o = "docx";
                    break
            }
            this.controls.AttachmentCell.innerHTML = this.jsObject.reportParams.reportFileName + "." + o
        }, t.action = function() {
            t.exportSettings.Email = t.controls.Email.value, t.exportSettings.Subject = t.controls.Subject.value, t.exportSettings.Message = t.controls.Message.value, t.changeVisibleState(!1), t.jsObject.postEmail(t.exportFormat, t.exportSettings)
        }
    }, StiJsViewer.prototype.BaseMenu = function(A, t, e, o, i) {
        var s = document.createElement("div");
        s.className = "stiJsViewerParentMenu", s.jsObject = this, s.id = this.generateKey(), s.name = A, s.items = {}, s.parentButton = t, s.type = null, t && (t.haveMenu = !0), s.animationDirection = e, s.rightToLeft = i || this.options.appearance.rightToLeft, s.visible = !1, s.style.display = "none", A && (this.controls.menus || (this.controls.menus = {}), null != this.controls.menus[A] && (this.controls.menus[A].changeVisibleState(!1), this.controls.mainPanel.removeChild(this.controls.menus[A])), this.controls.menus[A] = s), this.controls.mainPanel.appendChild(s);
        var n = document.createElement("div");
        return n.style.overflowY = "auto", n.style.overflowX = "hidden", n.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (n.style.color = this.options.toolbar.fontColor), s.appendChild(n), s.innerContent = n, n.className = o || "stiJsViewerMenu", n.style.maxHeight = "420px", s.changeVisibleState = function(A, t, e, o) {
            var i = "stiJsViewerMainPanel";
            if (t && (this.parentButton = t, t.haveMenu = !0), A)
                if (this.onshow(), this.style.display = "", this.visible = !0, this.parentButton.setSelected(!0), this.jsObject.options[null == this.type ? "currentMenu" : "current" + this.type] = this, this.style.width = this.innerContent.offsetWidth + "px", this.jsObject.options.isMobileDevice) this.jsObject.controls.reportPanel.hideToolbar(), this.style.marginLeft = "-" + this.style.width, setTimeout(function() {
                    s.style.transitionDuration = "200ms", s.style.marginLeft = "0"
                }), setTimeout(function() {
                    s.style.transitionDuration = ""
                }, 200);
                else {
                    this.style.height = this.innerContent.offsetHeight + "px", this.style.overflow = "hidden";
                    var n = this.animationDirection,
                        a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                    this.style.left = this.rightToLeft || e ? this.jsObject.FindPosX(this.parentButton, i) - this.innerContent.offsetWidth + this.parentButton.offsetWidth - (o || 0) + "px" : this.jsObject.FindPosX(this.parentButton, i) - (o || 0) + "px", this.parentButton && "Down" == n && this.jsObject.FindPosY(this.parentButton) + this.parentButton.offsetHeight + this.innerContent.offsetHeight > a && this.jsObject.FindPosY(this.parentButton) - this.innerContent.offsetHeight > 0 && (n = "Up"), this.style.top = "Down" == n ? this.jsObject.FindPosY(this.parentButton, i) + this.parentButton.offsetHeight + 2 + "px" : this.jsObject.FindPosY(this.parentButton, i) - this.offsetHeight + "px", this.innerContent.style.top = ("Down" == n ? -1 : 1) * this.innerContent.offsetHeight + "px", d = new Date;
                    var r = d.getTime();
                    this.jsObject.options.toolbar.menuAnimation && (r += this.jsObject.options.menuAnimDuration), this.jsObject.ShowAnimationVerticalMenu(this, "Down" == n ? 0 : -1, r)
                } else this.onHide(), clearTimeout(this.innerContent.animationTimer), this.visible = !1, this.parentButton.setSelected(!1), this.jsObject.options.isMobileDevice ? (this.style.transitionDuration = "200ms", this.style.marginLeft = "-" + this.style.width, setTimeout(function() {
                s.style.transitionDuration = "", s.style.display = "none"
            }, 200)) : this.style.display = "none", this.jsObject.options[null == this.type ? "currentMenu" : "current" + this.type] == this && (this.jsObject.options[null == this.type ? "currentMenu" : "current" + this.type] = null)
        }, s.action = function(A) {
            return A
        }, s.onmousedown = function() {
            this.isTouchStartFlag || this.ontouchstart(!0)
        }, s.ontouchstart = function(A) {
            this.jsObject.options.isMobileDevice && "boolean" != typeof A && (this.touchStartX = parseInt(A.changedTouches[0].clientX), this.lastTouches = [{
                x: 0,
                y: 0,
                time: 0
            }, {
                x: 0,
                y: 0,
                time: 0
            }]);
            var t = this;
            this.isTouchStartFlag = !A, clearTimeout(this.isTouchStartTimer), this.jsObject.options.menuPressed = this, this.isTouchStartTimer = setTimeout(function() {
                t.isTouchStartFlag = !1
            }, 1e3)
        }, s.ontouchmove = function(A) {
            this.jsObject.options.isMobileDevice && (this.lastTouches.shift(), this.lastTouches.push({
                x: A.changedTouches[0].clientX,
                y: A.changedTouches[0].clientY,
                time: (new Date).getTime()
            }))
        }, s.ontouchend = function(A) {
            if (this.jsObject.options.isMobileDevice) {
                var t = this.lastTouches[1].x - this.lastTouches[0].x,
                    e = (new Date).getTime() - this.lastTouches[1].time;
                t <= -5 && e <= 14 && this.changeVisibleState(!1)
            }
        }, s.onshow = function() {}, s.onHide = function() {}, s
    }, StiJsViewer.prototype.InitializePrintMenu = function() {
        var A = [];
        A.push(this.Item("PrintPdf", this.collections.loc.PrintPdf, "PrintPdf.png", "PrintPdf")), A.push(this.Item("PrintWithPreview", this.collections.loc.PrintWithPreview, "PrintWithPreview.png", "PrintWithPreview")), A.push(this.Item("PrintWithoutPreview", this.collections.loc.PrintWithoutPreview, "PrintWithoutPreview.png", "PrintWithoutPreview"));
        var t = this.VerticalMenu("printMenu", this.controls.toolbar.controls.Print, "Down", A);
        t.action = function(A) {
            t.changeVisibleState(!1), t.jsObject.postPrint(A.key)
        }
    }, StiJsViewer.prototype.InitializeSaveMenu = function(A, t) {
        var e = this.InitializeBaseSaveMenu("saveMenu", this.controls.toolbar.controls.Save);
        e.action = function(A) {
            e.changeVisibleState(!1), e.jsObject.options.exports.showExportDialog ? e.jsObject.controls.forms.exportForm.show(A.key, e.jsObject.options.actions.exportReport) : e.jsObject.postExport(A.key, e.jsObject.getDefaultExportSettings(A.key))
        }
    }, StiJsViewer.prototype.InitializeBaseSaveMenu = function(A, t) {
        var e = !0,
            o = [];
        if (this.options.exports.showExportToDocument && "saveMenu" == A && (o.push(this.Item("Document", this.collections.loc.SaveDocument, "SaveDocument.png", "Document")), e = !1), ("saveMenu" == A && this.options.exports.showExportToPdf || this.options.exports.showExportToXps || this.options.exports.showExportToPowerPoint) && (e || o.push("separator1"), e = !1), this.options.exports.showExportToPdf && o.push(this.Item("Pdf", this.collections.loc.SavePdf, "SavePdf.png", "Pdf")), this.options.exports.showExportToXps && o.push(this.Item("Xps", this.collections.loc.SaveXps, "SaveXps.png", "Xps")), this.options.exports.showExportToPowerPoint && o.push(this.Item("Ppt2007", this.collections.loc.SavePpt2007, "SavePpt2007.png", "Ppt2007")), this.options.exports.showExportToHtml || this.options.exports.showExportToHtml5 || this.options.exports.showExportToMht) {
            e || o.push("separator2"), e = !1;
            var i = this.options.exports.defaultSettings.StiHtmlExportSettings.HtmlType;
            this.options.exports["showExportTo" + i] || (this.options.exports.showExportToHtml ? i = "Html" : this.options.exports.showExportToHtml5 ? i = "Html5" : this.options.exports.showExportToMht && (i = "Mht")), o.push(this.Item(i, this.collections.loc.SaveHtml, "SaveHtml.png", i))
        }
        if ((this.options.exports.showExportToText || this.options.exports.showExportToRtf || this.options.exports.showExportToWord2007 || this.options.exports.showExportToOdt) && (e || o.push("separator3"), e = !1), this.options.exports.showExportToText && o.push(this.Item("Text", this.collections.loc.SaveText, "SaveText.png", "Text")), this.options.exports.showExportToRtf && o.push(this.Item("Rtf", this.collections.loc.SaveRtf, "SaveRtf.png", "Rtf")), this.options.exports.showExportToWord2007 && o.push(this.Item("Word2007", this.collections.loc.SaveWord2007, "SaveWord2007.png", "Word2007")), this.options.exports.showExportToOpenDocumentWriter && o.push(this.Item("Odt", this.collections.loc.SaveOdt, "SaveOdt.png", "Odt")), (this.options.exports.showExportToExcel || this.options.exports.showExportToExcel2007 || this.options.exports.showExportToExcelXml || this.options.exports.showExportToOpenDocumentWriter) && (e || o.push("separator4"), e = !1), this.options.exports.showExportToExcel || this.options.exports.showExportToExcelXml || this.options.exports.showExportToExcel2007) {
            var s = this.options.exports.defaultSettings.StiExcelExportSettings.ExcelType;
            "ExcelBinary" == s && (s = "Excel"), this.options.exports["showExportTo" + s] || (this.options.exports.showExportToExcel ? s = "Excel" : this.options.exports.showExportToExcel2007 ? s = "Excel2007" : this.options.exports.showExportToExcelXml && (s = "ExcelXml")), o.push(this.Item(s, this.collections.loc.SaveExcel, "SaveExcel.png", s))
        }
        if (this.options.exports.showExportToOpenDocumentCalc && o.push(this.Item("Ods", this.collections.loc.SaveOds, "SaveOds.png", "Ods")), this.options.exports.showExportToCsv || this.options.exports.showExportToDbf || this.options.exports.showExportToXml || this.options.exports.showExportToDif || this.options.exports.showExportToSylk) {
            e || o.push("separator5"), e = !1;
            var n = this.options.exports.defaultSettings.StiDataExportSettings.DataType;
            this.options.exports["showExportTo" + n] || (this.options.exports.showExportToCsv ? n = "Csv" : this.options.exports.showExportToDbf ? n = "Dbf" : this.options.exports.showExportToXml ? n = "Xml" : this.options.exports.showExportToDif ? n = "Dif" : this.options.exports.showExportToSylk && (n = "Sylk")), o.push(this.Item(n, this.collections.loc.SaveData, "SaveData.png", n))
        }
        if (this.options.exports.showExportToImageBmp || this.options.exports.showExportToImageGif || this.options.exports.showExportToImageJpeg || this.options.exports.showExportToImagePcx || this.options.exports.showExportToImagePng || this.options.exports.showExportToImageTiff || this.options.exports.showExportToImageMetafile || this.options.exports.showExportToImageSvg || this.options.exports.showExportToImageSvgz) {
            e || o.push("separator6"), e = !1;
            var a = this.options.exports.defaultSettings.StiImageExportSettings.ImageType,
                r = "Emf" == a ? "Metafile" : a;
            this.options.exports["showExportToImage" + r] || (this.options.exports.showExportToImageBmp ? a = "Bmp" : this.options.exports.showExportToImageGif ? a = "Gif" : this.options.exports.showExportToImageJpeg ? a = "Jpeg" : this.options.exports.showExportToImagePcx ? a = "Pcx" : this.options.exports.showExportToImagePng ? a = "Png" : this.options.exports.showExportToImageTiff ? a = "Tiff" : this.options.exports.showExportToImageMetafile ? a = "Emf" : this.options.exports.showExportToImageSvg ? a = "Svg" : this.options.exports.showExportToImageSvgz && (a = "Svgz")), o.push(this.Item("Image" + a, this.collections.loc.SaveImage, "SaveImage.png", "Image" + a))
        }
        var l = this.VerticalMenu(A, t, "Down", o);
        return l.menuName = A, l
    }, StiJsViewer.prototype.InitializeSendEmailMenu = function() {
        this.InitializeBaseSaveMenu("sendEmailMenu", this.controls.toolbar.controls.SendEmail).action = function(A) {
            if (this.changeVisibleState(!1), this.jsObject.options.email.showExportDialog) this.jsObject.controls.forms.exportForm.show(A.key, this.jsObject.options.actions.emailReport);
            else if (this.jsObject.options.email.showEmailDialog) this.jsObject.controls.forms.sendEmailForm.show(A.key, this.jsObject.getDefaultExportSettings(A.key));
            else {
                var t = this.jsObject.getDefaultExportSettings(A.key);
                exportSettingsObject.Email = this.jsObject.options.email.defaultEmailAddress, exportSettingsObject.Message = this.jsObject.options.email.defaultEmailMessage, exportSettingsObject.Subject = this.jsObject.options.email.defaultEmailSubject, this.jsObject.postEmail(A.key, defaultSettings, this.jsObject.options.actions.emailReport)
            }
        }
    }, StiJsViewer.prototype.VerticalMenu = function(A, t, e, o, i, s, n) {
        var a = this.BaseMenu(A, t, e, s, n);
        return a.itemStyleName = i, this.options.isMobileDevice && (a.style.left = "0", a.style.top = "0", a.style.bottom = "0", a.style.height = "100%", a.innerContent.style.maxHeight = "100%", a.innerContent.style.height = "100%", a.innerContent.style.borderLeftWidth = "0", a.innerContent.style.borderTopWidth = "0", a.innerContent.style.borderBottomWidth = "0"), a.addItems = function(A) {
            while (this.innerContent.childNodes[0]) this.innerContent.removeChild(this.innerContent.childNodes[0]);
            for (var t in A) "string" != typeof A[t] ? this.innerContent.appendChild(this.jsObject.VerticalMenuItem(this, A[t].name, A[t].caption, A[t].imageName, A[t].key, this.itemStyleName)) : this.innerContent.appendChild(this.jsObject.VerticalMenuSeparator(this, A[t]))
        }, a.addItems(o), a
    }, StiJsViewer.prototype.VerticalMenuItem = function(A, t, e, o, i, s) {
        var n = document.createElement("div");
        n.jsObject = this, n.menu = A, n.name = t, n.key = i, n.caption_ = e, n.imageName = o, n.styleName = s || "stiJsViewerMenuStandartItem", n.id = this.generateKey(), n.className = n.styleName, A.items[t] = n, n.isEnabled = !0, n.isSelected = !1, n.style.height = this.options.isMobileDevice ? "0.4in" : this.options.isTouchDevice ? "30px" : "24px";
        var a = this.CreateHTMLTable();
        if (n.appendChild(a), a.style.height = "100%", a.style.width = "100%", null != o) {
            n.cellImage = a.addCell(), n.cellImage.style.width = "22px", n.cellImage.style.minWidth = "22px", n.cellImage.style.padding = "0", n.cellImage.style.textAlign = "center";
            var r = document.createElement("img");
            n.image = r, n.cellImage.style.lineHeight = "0", n.cellImage.appendChild(r), this.collections.images[o] && (r.src = this.collections.images[o])
        }
        if (null != e) {
            var l = a.addCell();
            n.caption = l, l.style.padding = "0 20px 0 7px", l.style.textAlign = "left", l.style.whiteSpace = "nowrap", this.options.isMobileDevice && (l.style.fontSize = "0.16in"), l.innerHTML = e
        }
        return n.onmouseover = function() {
            if (this.isTouchProcessFlag || !this.isEnabled) return;
            this.className = this.styleName + " " + this.styleName + "Over"
        }, n.onmouseout = function() {
            if (this.isTouchProcessFlag || !this.isEnabled) return;
            this.className = this.styleName, this.isSelected && (this.className += " " + this.styleName + "Selected")
        }, n.onclick = function() {
            if (this.isTouchProcessFlag || !this.isEnabled) return;
            this.action()
        }, n.ontouchstart = function() {
            this.jsObject.options.fingerIsMoved = !1
        }, n.ontouchend = function() {
            if (!this.isEnabled || this.jsObject.options.fingerIsMoved) return;
            this.isTouchProcessFlag = !0, this.className = this.styleName + " " + this.styleName + "Over";
            var A = this;
            setTimeout(function() {
                A.className = A.styleName, A.action()
            }, 150), setTimeout(function() {
                A.isTouchProcessFlag = !1
            }, 1e3)
        }, n.action = function() {
            this.menu.action(this)
        }, n.setEnabled = function(A) {
            this.isEnabled = A, this.className = this.styleName + " " + (A ? "" : this.styleName + "Disabled")
        }, n.setSelected = function(A) {
            if (!A) return this.isSelected = !1, void(this.className = this.styleName);
            null != this.menu.selectedItem && (this.menu.selectedItem.className = this.styleName, this.menu.selectedItem.isSelected = !1), this.className = this.styleName + " " + this.styleName + "Selected", this.menu.selectedItem = this, this.isSelected = !0
        }, n
    }, StiJsViewer.prototype.VerticalMenuSeparator = function(A, t) {
        var e = document.createElement("div");
        return e.className = "stiJsViewerVerticalMenuSeparator", A.items[t] = e, e
    }, StiJsViewer.prototype.InitializeViewModeMenu = function() {
        var A = [];
        A.push(this.Item("SinglePage", this.collections.loc.SinglePage, "SinglePage.png", "ViewModeSinglePage")), A.push(this.Item("Continuous", this.collections.loc.Continuous, "Continuous.png", "ViewModeContinuous")), A.push(this.Item("MultiplePages", this.collections.loc.MultiplePages, "MultiplePages.png", "ViewModeMultiplePages"));
        var t = this.VerticalMenu("viewModeMenu", this.controls.toolbar.controls.ViewMode, "Down", A);
        t.action = function(A) {
            t.changeVisibleState(!1), t.jsObject.postAction(A.key)
        }
    }, StiJsViewer.prototype.InitializeZoomMenu = function() {
        for (var A = [], t = ["25", "50", "75", "100", "150", "200"], e = 0; e < t.length; e++) A.push(this.Item("Zoom" + t[e], t[e] + "%", "SelectedItem.png", "Zoom" + t[e]));
        "Separated" != this.options.toolbar.displayMode && (A.push("separator1"), A.push(this.Item("ZoomOnePage", this.collections.loc.ZoomOnePage, "ZoomOnePage.png", "ZoomOnePage")), A.push(this.Item("ZoomPageWidth", this.collections.loc.ZoomPageWidth, "ZoomPageWidth.png", "ZoomPageWidth")));
        var o = this.VerticalMenu("zoomMenu", this.controls.toolbar.controls.Zoom, "Separated" == this.options.toolbar.displayMode ? "Up" : "Down", A, null, null, "Separated" == this.options.toolbar.displayMode);
        o.action = function(A) {
            o.changeVisibleState(!1), "Separated" == this.jsObject.options.toolbar.displayMode && (this.jsObject.controls.toolbar.controls.ZoomOnePage.setSelected(!1), this.jsObject.controls.toolbar.controls.ZoomPageWidth.setSelected(!1)), o.jsObject.postAction(A.key)
        }
    };
var JSON = JSON || {};
JSON.stringify = JSON.stringify || function(A) {
    var t = typeof A;
    if ("object" != t || null === A) return "string" == t && (A = '"' + A + '"'), String(A);
    var e, o, i = [],
        s = A && A.constructor == Array;
    for (e in A) o = A[e], t = typeof o, "string" == t ? o = '"' + o + '"' : "object" == t && null !== o && (o = JSON.stringify(o)), i.push((s ? "" : '"' + e + '":') + String(o));
    return (s ? "[" : "{") + String(i) + (s ? "]" : "}")
}, JSON.parse = JSON.parse || function(str) {
    return "" === str && (str = '""'), eval("var p=" + str + ";"), p
}, StiJsViewer.prototype.InitializeMobile = function() {
    for (var A = !1, t = this.controls.head.getElementsByTagName("meta"), e = 0; e < t.length; e++)
        if (t[e].name && "viewport" == t[e].name.toLowerCase()) {
            A = !0;
            break
        }
    if (!A) {
        var o = document.createElement("meta");
        o.id = "viewport", o.name = "viewport", o.content = "initial-scale=1.0,width=device-width,user-scalable=0", this.controls.head.appendChild(o)
    }
    this.options.appearance.fullScreenMode = !0, this.options.appearance.scrollbarsMode = !0, this.options.appearance.parametersPanelPosition = "Left", this.options.appearance.parametersPanelColumnsCount = 1, this.options.toolbar.displayMode = "Separated", this.options.toolbar.showZoomButton = !1, this.options.toolbar.zoom = this.reportParams.zoom = -1, this.options.toolbar.showButtonCaptions = !1, this.options.toolbar.showOpenButton = !1, this.options.toolbar.showSendEmailButton = !1, this.options.toolbar.showFindButton = !1, this.options.toolbar.showEditorButton = !1, this.options.toolbar.showFullScreenButton = !1, this.options.toolbar.showAboutButton = !1, this.options.toolbar.showViewModeButton = !1, this.InitializeCenterText()
}, StiJsViewer.prototype.mergeOptions = function(A, t) {
    for (var e in A) void 0 === t[e] || "object" != typeof t[e] ? t[e] = A[e] : this.mergeOptions(A[e], t[e])
}, StiJsViewer.prototype.clearViewerState = function(A) {
    this.reportParams.drillDownGuid = null, this.reportParams.interactionCollapsingStates = null, this.reportParams.bookmarksContent = null, this.reportParams.editableParameters = null, this.reportParams.pageNumber = 0, this.reportParams.drillDownParameters = [], this.controls.bookmarksPanel && (this.controls.bookmarksPanel.changeVisibleState(!1), this.controls.mainPanel.removeChild(this.controls.bookmarksPanel), delete this.controls.bookmarksPanel), this.controls.parametersPanel && (this.controls.parametersPanel.changeVisibleState(!1), this.controls.mainPanel.removeChild(this.controls.parametersPanel), delete this.controls.parametersPanel), this.controls.drillDownPanel && this.controls.drillDownPanel.reset(), this.controls.findPanel && this.controls.findPanel.changeVisibleState(!1), A && (this.options.isParametersReceived = !1, this.options.isReportRecieved = !1)
}, StiJsViewer.prototype.InitializeDoubleDatePicker = function(A) {
    this.controls.doubleDatePicker && this.controls.mainPanel.removeChild(this.controls.doubleDatePicker);
    var t = this.BaseMenu(null, A.secondParentButton, "Down", "stiJsViewerDropdownMenu");
    t.style.fontFamily = this.options.toolbar.fontFamily, "" != this.options.toolbar.fontColor && (t.style.color = this.options.toolbar.fontColor), t.style.zIndex = "36", t.dayButtons = [], t.showTime = !1, t.key = new Date, this.controls.doubleDatePicker = t, this.controls.mainPanel.appendChild(t);
    var e = this.CreateHTMLTable();
    e.style.margin = "4px", e.style.border = "1px dotted #c6c6c6", t.innerContent.appendChild(e);
    var o = this.InitializeDatePicker(t);
    o.ownerValue = A.firstOwnerValue, o.showTime = A.showTime, o.parentDataControl = A.firstParentDataControl, o.parentButton = A.firstParentButton;
    var i = this.InitializeDatePicker(t);
    i.ownerValue = A.secondOwnerValue, i.showTime = A.showTime, i.parentDataControl = A.secondParentDataControl, i.parentButton = A.secondParentButton, o.innerContent.className = "", i.innerContent.className = "", o.innerContent.style.margin = "4px", i.innerContent.style.margin = "4px", e.addCell(o.innerContent), e.addCell(i.innerContent).style.borderLeft = "1px dotted #c6c6c6";
    var s = document.createElement("div");
    e.addCell(s).style.borderLeft = "1px dotted #c6c6c6", s.jsObject = this, s.style.width = "150px", s.style.height = "250px", s.style.overflow = "auto", s.style.margin = "4px";
    for (var n = 0; n < this.collections.dateRanges.length; n++) {
        var a = this.collections.dateRanges[n],
            r = this.SmallButton(null, this.collections.loc[a]);
        r.name = a, s.appendChild(r), r.action = function() {
            var e = t.jsObject.GetValuesByDateRangeName(this.name);
            e && (t.setValuesToDatePickers(e[0], e[1]), A.hideOnClick && t.changeVisibleState(!1))
        }
    }
    return t.onshow = function() {
        o.onshow(), i.onshow()
    }, t.setValuesToDatePickers = function(A, t) {
        o.key = A, i.key = t, o.fill(), i.fill(), o.action(), i.action()
    }, t
}, StiJsViewer.prototype.GetValuesByDateRangeName = function(A) {
    var t = new Date,
        e = this,
        o = function(A, t) {
            A.setHours(0), A.setMinutes(0), A.setSeconds(0), t.setHours(23), t.setMinutes(59), t.setSeconds(59)
        },
        i = function(A) {
            var i = e.GetFirstDayOfWeek(),
                s = 0 == i ? t.getDay() : t.getDay() - 1;
            s < 0 && (s = 6);
            var n = [new Date(t.valueOf() - 864e5 * s)];
            return n.push(new Date(n[0].valueOf() + 6 * 864e5)), o(n[0], n[1]), n
        },
        s = new Date,
        n = new Date;
    o(s, n);
    var a = [s, n];
    switch (A) {
        case "CurrentMonth":
            a[0].setDate(1), a[1].setDate(e.GetCountDaysOfMonth(t.getFullYear(), t.getMonth()));
            break;
        case "CurrentQuarter":
            var r = 3 * parseInt(t.getMonth() / 3);
            a[0].setMonth(r), a[1].setMonth(r + 2), a[0].setDate(1), a[1].setDate(e.GetCountDaysOfMonth(t.getFullYear(), r + 2));
            break;
        case "CurrentWeek":
            a = i(t);
            break;
        case "CurrentYear":
            a[0].setMonth(0), a[0].setDate(1), a[1].setMonth(11), a[1].setDate(31);
            break;
        case "NextMonth":
            var l = t.getMonth() + 1,
                h = t.getFullYear();
            l > 11 && (l = 0, h++), a[0].setYear(h), a[0].setMonth(l), a[0].setDate(1), a[1].setYear(h), a[1].setMonth(l), a[1].setDate(e.GetCountDaysOfMonth(h, l));
            break;
        case "NextQuarter":
            var h = t.getFullYear(),
                r = 3 * parseInt(t.getMonth() / 3) + 3;
            r > 11 && (r = 0, h++), a[0].setYear(h), a[1].setYear(h), a[0].setMonth(r), a[1].setMonth(r + 2), a[0].setDate(1), a[1].setDate(e.GetCountDaysOfMonth(h, r + 2));
            break;
        case "NextWeek":
            a = i(t), a[0] = new Date(a[0].valueOf() + 7 * 864e5), a[1] = new Date(a[1].valueOf() + 7 * 864e5);
            break;
        case "NextYear":
            a[0].setYear(t.getFullYear() + 1), a[1].setYear(t.getFullYear() + 1), a[0].setMonth(0), a[1].setMonth(11), a[0].setDate(1), a[1].setDate(31);
            break;
        case "PreviousMonth":
            var l = t.getMonth() - 1,
                h = t.getFullYear();
            l < 0 && (l = 11, h--), a[0].setYear(h), a[0].setMonth(l), a[0].setDate(1), a[1].setYear(h), a[1].setMonth(l), a[1].setDate(e.GetCountDaysOfMonth(h, l));
            break;
        case "PreviousQuarter":
            var h = t.getFullYear(),
                r = 3 * parseInt(t.getMonth() / 3) - 3;
            r < 0 && (r = 9, h--), a[0].setYear(h), a[1].setYear(h), a[0].setMonth(r), a[1].setMonth(r + 2), a[0].setDate(1), a[1].setDate(e.GetCountDaysOfMonth(h, r + 2));
            break;
        case "PreviousWeek":
            a = i(t), a[0] = new Date(a[0].valueOf() - 7 * 864e5), a[1] = new Date(a[1].valueOf() - 7 * 864e5);
            break;
        case "PreviousYear":
            a[0].setYear(t.getFullYear() - 1), a[1].setYear(t.getFullYear() - 1), a[0].setMonth(0), a[1].setMonth(11), a[0].setDate(1), a[1].setDate(31);
            break;
        case "FirstQuarter":
            a[0].setMonth(0), a[1].setMonth(2), a[0].setDate(1), a[1].setDate(e.GetCountDaysOfMonth(t.getFullYear(), 2));
            break;
        case "SecondQuarter":
            a[0].setMonth(3), a[1].setMonth(5), a[0].setDate(1), a[1].setDate(e.GetCountDaysOfMonth(t.getFullYear(), 5));
            break;
        case "ThirdQuarter":
            a[0].setMonth(6), a[1].setMonth(8), a[0].setDate(1), a[1].setDate(e.GetCountDaysOfMonth(t.getFullYear(), 8));
            break;
        case "FourthQuarter":
            a[0].setMonth(9), a[1].setMonth(11), a[0].setDate(1), a[1].setDate(e.GetCountDaysOfMonth(t.getFullYear(), 11));
            break;
        case "MonthToDate":
            a[0].setDate(1);
            break;
        case "QuarterToDate":
            var r = 3 * parseInt(t.getMonth() / 3);
            a[0].setMonth(r), a[0].setDate(1);
            break;
        case "WeekToDate":
            var p = i(t);
            a[0] = p[0];
            break;
        case "YearToDate":
            a[0].setMonth(0), a[0].setDate(1);
            break;
        case "Today":
            break;
        case "Tomorrow":
            a[0] = new Date(a[0].valueOf() + 864e5), a[1] = new Date(a[1].valueOf() + 864e5);
            break;
        case "Yesterday":
            a[0] = new Date(a[0].valueOf() - 864e5), a[1] = new Date(a[1].valueOf() - 864e5);
            break
    }
    return a
}, StiJsViewer.prototype.InitializeOpenDialog = function(A, t, e) {
    this.controls[A] && this.controls.mainPanel.removeChild(this.controls[A]);
    var o = document.createElement("input");
    return this.controls.mainPanel.appendChild(o), this.controls[A] = o, o.style.display = "none", o.id = A, o.jsObject = this, o.setAttribute("type", "file"), o.setAttribute("name", "files[]"), o.setAttribute("multiple", ""), e && o.setAttribute("accept", e), o.addEventListener("change", function(A) {
        for (var e = A.target.files, i = e[0] ? e[0].name : "Report", s = A.target.value, n = 0, a; a = e[n]; n++) {
            var r = new FileReader;
            r.jsObject = this.jsObject, r.onload = function(A) {
                return function(A) {
                    o.setAttribute("name", "files[]"), o.setAttribute("multiple", ""), o.setAttribute("value", ""), t(i, s, A.target.result)
                }
            }(a), r.readAsDataURL(a)
        }
    }, !1), o.action = function() {
        this.focus(), this.click()
    }, o
}, StiJsViewer.prototype.InitializePasswordForm = function() {
    var A = this.BaseForm("passwordForm", this.collections.loc.PasswordSaveReport.replace(":", ""), 2);
    A.style.fontFamily = this.options.toolbar.fontFamily;
    var t = this.CreateHTMLTable();
    t.style.margin = "5px", A.container.appendChild(t);
    var e = t.addCell();
    e.innerHTML = this.collections.loc.PasswordEnter, e.className = "stiJsViewerCaptionControls";
    var o = this.TextBox(null, 200);
    return o.setAttribute("type", "Password"), t.addCell(o).className = "stiJsViewerCaptionControls", A.show = function(A, t) {
        this.actionFunc = A, this.changeVisibleState(!0), o.value = "", o.focus(), t && (e.innerHTML = t)
    }, A.action = function() {
        this.changeVisibleState(!1), this.actionFunc && this.actionFunc(o.value)
    }, A
};
var StiGZipHelper = function() {
    function A() {}
    var t;
    ! function(A) {
        var t = function() {
                function A() {
                    this.fc = 0, this.dl = 0
                }
                return A
            }(),
            e = function() {
                function A() {
                    this.dynamicTree = null, this.staticTree = null, this.extraBits = null, this.extraBase = 0, this.elements = 0, this.maxLength = 0, this.maxCode = 0
                }
                return A
            }(),
            o = function() {
                function A(A, t, e, o) {
                    this.goodLength = A, this.maxLazy = t, this.niceLength = e, this.maxChain = o
                }
                return A
            }(),
            i = function() {
                function A() {
                    this.next = null, this.length = 0, this.ptr = new Array(r.outBufferSize), this.offset = 0
                }
                return A
            }(),
            s = function() {
                function A() {
                    this.next = null, this.list = null
                }
                return A
            }(),
            n = function() {
                function A() {
                    this.e = 0, this.b = 0, this.n = 0, this.t = null
                }
                return A
            }(),
            a = function() {
                function A(t, e, o, i, a, r) {
                    this.status = 0, this.root = null, this.m = 0;
                    var l, h, p, c, g = new Array(A.bMax + 1),
                        u = new Array(A.bMax + 1),
                        d, m = new n,
                        B = new Array(A.bMax),
                        T = new Array(A.nMax),
                        w = new Array(A.bMax + 1),
                        C = null;
                    for (this.root = null, l = 0; l < g.length; l++) g[l] = 0;
                    for (l = 0; l < u.length; l++) u[l] = 0;
                    for (l = 0; l < B.length; l++) B[l] = null;
                    for (l = 0; l < T.length; l++) T[l] = 0;
                    for (l = 0; l < w.length; l++) w[l] = 0;
                    var f = e > 256 ? t[256] : A.bMax,
                        b = t,
                        x = 0;
                    l = e;
                    do {
                        g[b[x]]++, x++
                    } while (--l > 0);
                    if (g[0] == e) return this.root = null, this.m = 0, void(this.status = 0);
                    for (h = 1; h <= A.bMax; h++)
                        if (0 != g[h]) break;
                    var y = h;
                    for (r < h && (r = h), l = A.bMax; 0 != l; l--)
                        if (0 != g[l]) break;
                    var V = l;
                    for (r > l && (r = l), p = 1 << h; h < l; h++, p <<= 1)
                        if ((p -= g[h]) < 0) return this.status = 2, void(this.m = r);
                    if ((p -= g[l]) < 0) return this.status = 2, void(this.m = r);
                    g[l] += p, w[1] = h = 0, b = g, x = 1;
                    var D = 2;
                    while (--l > 0) w[D++] = h += b[x++];
                    b = t, x = 0, l = 0;
                    do {
                        0 != (h = b[x++]) && (T[w[h]++] = l)
                    } while (++l < e);
                    e = w[V], w[0] = l = 0, b = T, x = 0;
                    var P = -1,
                        I = u[0] = 0,
                        E = 0;
                    d = null;
                    for (var v, N; y <= V; y++) {
                        v = g[y];
                        while (v-- > 0) {
                            while (y > I + u[1 + P]) {
                                if (I += u[1 + P], P++, E = (E = V - I) > r ? r : E, (N = 1 << (h = y - I)) > v + 1) {
                                    N -= v + 1, D = y;
                                    while (++h < E) {
                                        if ((N <<= 1) <= g[++D]) break;
                                        N -= g[D]
                                    }
                                }
                                for (I + h > f && I < f && (h = f - I), E = 1 << h, u[1 + P] = h, d = new Array(E), c = 0; c < E; c++) d[c] = new n;
                                C = null == C ? this.root = new s : C.next = new s, C.next = null, C.list = d, B[P] = d, P > 0 && (w[P] = l, m.b = u[P], m.e = 16 + h, m.t = d, h = (l & (1 << I) - 1) >> I - u[P], B[P - 1][h].e = m.e, B[P - 1][h].b = m.b, B[P - 1][h].n = m.n, B[P - 1][h].t = m.t)
                            }
                            for (m.b = y - I, x >= e ? m.e = 99 : b[x] < o ? (m.e = b[x] < 256 ? 16 : 15, m.n = b[x++]) : (m.e = a[b[x] - o], m.n = i[b[x++] - o]), N = 1 << y - I, h = l >> I; h < E; h += N) d[h].e = m.e, d[h].b = m.b, d[h].n = m.n, d[h].t = m.t;
                            for (h = 1 << y - 1; 0 != (l & h); h >>= 1) l ^= h;
                            l ^= h;
                            while ((l & (1 << I) - 1) != w[P]) I -= u[P], P--
                        }
                    }
                    this.m = u[1], this.status = 0 != p && 1 != V ? 1 : 0
                }
                return A.bMax = 16, A.nMax = 288, A
            }(),
            r = function() {
                function A() {}
                return A.wSize = 32768, A.storedBlock = 0, A.staticTrees = 1, A.dynamicTrees = 2, A.defaultLevel = 6, A.fullSearch = !0, A.lBits = 9, A.dBits = 6, A.inBufferSize = 32768, A.inBufferExtra = 64, A.outBufferSize = 1024 * 8, A.windowSize = 2 * A.wSize, A.minMatch = 3, A.maxMatch = 258, A.bits = 16, A.litBufferSize = 8192, A.distBufferSize = A.litBufferSize, A.hashBits = 13, A.hashSize = 1 << A.hashBits, A.hashMask = A.hashSize - 1, A.wMask = A.wSize - 1, A.nil = 0, A.tooFar = 4096, A.minLookahead = A.maxMatch + A.minMatch + 1, A.maxDist = A.wSize - A.minLookahead, A.smallest = 1, A.maxBits = 15, A.maxBLBits = 7, A.lengthCodes = 29, A.literals = 256, A.endBlock = 256, A.lCodes = A.literals + 1 + A.lengthCodes, A.dCodes = 30, A.blCodes = 19, A.rep_3_6 = 16, A.repz_3_10 = 17, A.repz_11_138 = 18, A.heapSize = 2 * A.lCodes + 1, A.hShift = parseInt(((A.hashBits + A.minMatch - 1) / A.minMatch).toString()), A.bufferSize = 16, A.maskBits = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], A.cplens = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], A.cplext = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], A.cpdist = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], A.cpdext = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], A.border = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], A.extraLBits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], A.extraDBits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], A.extraBLBits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], A.blOrder = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], A.configTable = [new o(0, 0, 0, 0), new o(4, 4, 8, 4), new o(4, 5, 16, 8), new o(4, 6, 32, 32), new o(4, 4, 16, 16), new o(8, 16, 32, 32), new o(8, 16, 128, 128), new o(8, 32, 128, 256), new o(32, 128, 258, 1024), new o(32, 258, 258, 4096)], A
            }(),
            l = function() {
                function A() {
                    this._outBuffer = null, this._fixedTL = null
                }
                return A.deflate = function(t, e) {
                    if (null == t || void 0 === t) return null;
                    if (null == this._helper && (this._helper = new A), "string" == typeof t) return this._helper.deflate(t.toUnicodeString().toBytesArray(), e);
                    return this._helper.deflate(t, e)
                }, A.inflate = function(t) {
                    return null == this._helper && (this._helper = new A), this._helper.inflate(t)
                }, A.prototype.deflateStart = function(A) {
                    var o;
                    if (A ? A < 1 ? A = 1 : A > 9 && (A = 9) : A = r.defaultLevel, this._compressLevel = A, this._initFlag = !1, this._eoFile = !1, null != this._outBuffer) return;
                    for (this._freeQueue = null, this._qHead = null, this._qTail = null, this._outBuffer = new Array(r.outBufferSize), this._window = new Array(r.windowSize), this._dBuffer = new Array(r.distBufferSize), this._lBuffer = new Array(r.inBufferSize + r.inBufferExtra), this._prev = new Array(1 << r.bits), this._dynamicLtree = new Array(r.heapSize), o = 0; o < r.heapSize; o++) this._dynamicLtree[o] = new t;
                    for (this._dynamicDtree = new Array(2 * r.dCodes + 1), o = 0; o < 2 * r.dCodes + 1; o++) this._dynamicDtree[o] = new t;
                    for (this._staticLtree = new Array(r.lCodes + 2), o = 0; o < r.lCodes + 2; o++) this._staticLtree[o] = new t;
                    for (this._staticDtree = new Array(r.dCodes), o = 0; o < r.dCodes; o++) this._staticDtree[o] = new t;
                    for (this._blTree = new Array(2 * r.blCodes + 1), o = 0; o < 2 * r.blCodes + 1; o++) this._blTree[o] = new t;
                    this._lDesc = new e, this._dDesc = new e, this._blDesc = new e, this._blCount = new Array(r.maxBits + 1), this._heap = new Array(2 * r.lCodes + 1), this._depth = new Array(2 * r.lCodes + 1), this._lengthCode = new Array(r.maxMatch - r.minMatch + 1), this._distCode = new Array(512), this._baseLength = new Array(r.lengthCodes), this._baseDist = new Array(r.dCodes), this._flagBuf = new Array(parseInt((r.litBufferSize / 8).toString()))
                }, A.prototype.deflateEnd = function() {
                    this._freeQueue = null, this._qHead = null, this._qTail = null, this._outBuffer = null, this._window = null, this._dBuffer = null, this._lBuffer = null, this._prev = null, this._dynamicLtree = null, this._dynamicDtree = null, this._staticLtree = null, this._staticDtree = null, this._blTree = null, this._lDesc = null, this._dDesc = null, this._blDesc = null, this._blCount = null, this._heap = null, this._depth = null, this._lengthCode = null, this._distCode = null, this._baseLength = null, this._baseDist = null, this._flagBuf = null
                }, A.prototype.reuseQueue = function(A) {
                    A.next = this._freeQueue, this._freeQueue = A
                }, A.prototype.newQueue = function() {
                    var A;
                    return null != this._freeQueue ? (A = this._freeQueue, this._freeQueue = this._freeQueue.next) : A = new i, A.next = null, A.length = 0, A.offset = 0, A
                }, A.prototype.head1 = function(A) {
                    return this._prev[r.wSize + A]
                }, A.prototype.head2 = function(A, t) {
                    return this._prev[r.wSize + A] = t
                }, A.prototype.putByte = function(A) {
                    this._outBuffer[this._outOffset + this._outCount++] = A, this._outOffset + this._outCount == r.outBufferSize && this.qOutBuffer()
                }, A.prototype.putShort = function(A) {
                    A &= 65535, this._outOffset + this._outCount < r.outBufferSize - 2 ? (this._outBuffer[this._outOffset + this._outCount++] = 255 & A, this._outBuffer[this._outOffset + this._outCount++] = A >>> 8) : (this.putByte(255 & A), this.putByte(A >>> 8))
                }, A.prototype.insertString = function() {
                    this._insH = (this._insH << r.hShift ^ 255 & this._window[this._strStart + r.minMatch - 1]) & r.hashMask, this._hashHead = this.head1(this._insH), this._prev[this._strStart & r.wMask] = this._hashHead, this.head2(this._insH, this._strStart)
                }, A.prototype.sendCode = function(A, t) {
                    this.sendBits(t[A].fc, t[A].dl)
                }, A.prototype.dCode = function(A) {
                    return 255 & (A < 256 ? this._distCode[A] : this._distCode[256 + (A >> 7)])
                }, A.prototype.smaller = function(A, t, e) {
                    return A[t].fc < A[e].fc || A[t].fc == A[e].fc && this._depth[t] <= this._depth[e]
                }, A.prototype.readBuffer = function(A, t, e) {
                    var o;
                    for (o = 0; o < e && this._deflatePos < this._deflateData.length; o++) A[t + o] = 255 & this._deflateData[this._deflatePos++];
                    return o
                }, A.prototype.lmInit = function() {
                    var A;
                    for (A = 0; A < r.hashSize; A++) this._prev[r.wSize + A] = 0;
                    if (this._maxLazyMatch = r.configTable[this._compressLevel].maxLazy, this._goodMatch = r.configTable[this._compressLevel].goodLength, r.fullSearch || (this._niceMatch = r.configTable[this._compressLevel].niceLength), this._maxChainLength = r.configTable[this._compressLevel].maxChain, this._strStart = 0, this._blockStart = 0, this._lookahead = this.readBuffer(this._window, 0, 2 * r.wSize), this._lookahead <= 0) return this._eoFile = !0, void(this._lookahead = 0);
                    this._eoFile = !1;
                    while (this._lookahead < r.minLookahead && !this._eoFile) this.fillWindow();
                    for (this._insH = 0, A = 0; A < r.minMatch - 1; A++) this._insH = (this._insH << r.hShift ^ 255 & this._window[A]) & r.hashMask
                }, A.prototype.longestMatch = function(A) {
                    var t = this._maxChainLength,
                        e = this._strStart,
                        o, i, s = this._prevLength,
                        n = this._strStart > r.maxDist ? this._strStart - r.maxDist : r.nil,
                        a = this._strStart + r.maxMatch,
                        l = this._window[e + s - 1],
                        h = this._window[e + s];
                    this._prevLength >= this._goodMatch && (t >>= 2);
                    do {
                        if (o = A, this._window[o + s] != h || this._window[o + s - 1] != l || this._window[o] != this._window[e] || this._window[++o] != this._window[e + 1]) continue;
                        e += 2, o++;
                        do {} while (this._window[++e] == this._window[++o] && this._window[++e] == this._window[++o] && this._window[++e] == this._window[++o] && this._window[++e] == this._window[++o] && this._window[++e] == this._window[++o] && this._window[++e] == this._window[++o] && this._window[++e] == this._window[++o] && this._window[++e] == this._window[++o] && e < a);
                        if (i = r.maxMatch - (a - e), e = a - r.maxMatch, i > s) {
                            if (this._matchStart = A, s = i, r.fullSearch) {
                                if (i >= r.maxMatch) break
                            } else if (i >= this._niceMatch) break;
                            l = this._window[e + s - 1], h = this._window[e + s]
                        }
                    } while ((A = this._prev[A & r.wMask]) > n && 0 != --t);
                    return s
                }, A.prototype.fillWindow = function() {
                    var A, t, e = r.windowSize - this._lookahead - this._strStart;
                    if (-1 == e) e--;
                    else if (this._strStart >= r.wSize + r.maxDist) {
                        for (A = 0; A < r.wSize; A++) this._window[A] = this._window[A + r.wSize];
                        for (this._matchStart -= r.wSize, this._strStart -= r.wSize, this._blockStart -= r.wSize, A = 0; A < r.hashSize; A++) t = this.head1(A), this.head2(A, t >= r.wSize ? t - r.wSize : r.nil);
                        for (A = 0; A < r.wSize; A++) t = this._prev[A], this._prev[A] = t >= r.wSize ? t - r.wSize : r.nil;
                        e += r.wSize
                    }
                    this._eoFile || (A = this.readBuffer(this._window, this._strStart + this._lookahead, e), A <= 0 ? this._eoFile = !0 : this._lookahead += A)
                }, A.prototype.deflateFast = function() {
                    while (0 != this._lookahead && null == this._qHead) {
                        var A = void 0;
                        if (this.insertString(), this._hashHead != r.nil && this._strStart - this._hashHead <= r.maxDist && (this._matchLength = this.longestMatch(this._hashHead), this._matchLength > this._lookahead && (this._matchLength = this._lookahead)), this._matchLength >= r.minMatch)
                            if (A = this.ctTally(this._strStart - this._matchStart, this._matchLength - r.minMatch), this._lookahead -= this._matchLength, this._matchLength <= this._maxLazyMatch) {
                                this._matchLength--;
                                do {
                                    this._strStart++, this.insertString()
                                } while (0 != --this._matchLength);
                                this._strStart++
                            } else this._strStart += this._matchLength, this._matchLength = 0, this._insH = 255 & this._window[this._strStart], this._insH = (this._insH << r.hShift ^ 255 & this._window[this._strStart + 1]) & r.hashMask;
                        else A = this.ctTally(0, 255 & this._window[this._strStart]), this._lookahead--, this._strStart++;
                        A && (this.flushBlock(0), this._blockStart = this._strStart);
                        while (this._lookahead < r.minLookahead && !this._eoFile) this.fillWindow()
                    }
                }, A.prototype.deflateBetter = function() {
                    while (0 != this._lookahead && null == this._qHead) {
                        if (this.insertString(), this._prevLength = this._matchLength, this._prevMatch = this._matchStart, this._matchLength = r.minMatch - 1, this._hashHead != r.nil && this._prevLength < this._maxLazyMatch && this._strStart - this._hashHead <= r.maxDist && (this._matchLength = this.longestMatch(this._hashHead), this._matchLength > this._lookahead && (this._matchLength = this._lookahead), this._matchLength == r.minMatch && this._strStart - this._matchStart > r.tooFar && this._matchLength--), this._prevLength >= r.minMatch && this._matchLength <= this._prevLength) {
                            var A = this.ctTally(this._strStart - 1 - this._prevMatch, this._prevLength - r.minMatch);
                            this._lookahead -= this._prevLength - 1, this._prevLength -= 2;
                            do {
                                this._strStart++, this.insertString()
                            } while (0 != --this._prevLength);
                            this._matchAvailable = 0, this._matchLength = r.minMatch - 1, this._strStart++, A && (this.flushBlock(0), this._blockStart = this._strStart)
                        } else 0 != this._matchAvailable ? (this.ctTally(0, 255 & this._window[this._strStart - 1]) && (this.flushBlock(0), this._blockStart = this._strStart), this._strStart++, this._lookahead--) : (this._matchAvailable = 1, this._strStart++, this._lookahead--);
                        while (this._lookahead < r.minLookahead && !this._eoFile) this.fillWindow()
                    }
                }, A.prototype.initDeflate = function() {
                    if (this._eoFile) return;
                    this._biBuffer = 0, this._biValid = 0, this.ctInit(), this.lmInit(), this._qHead = null, this._outCount = 0, this._outOffset = 0, this._matchAvailable = 0, this._compressLevel <= 3 ? (this._prevLength = r.minMatch - 1, this._matchLength = 0) : (this._matchLength = r.minMatch - 1, this._matchAvailable = 0, this._matchAvailable = 0), this._complete = !1
                }, A.prototype.deflateInternal = function(A, t, e) {
                    var o;
                    if (!this._initFlag && (this.initDeflate(), this._initFlag = !0, 0 == this._lookahead)) return this._complete = !0, 0;
                    if ((o = this.qCopy(A, t, e)) == e) return e;
                    if (this._complete) return o;
                    return this._compressLevel <= 3 ? this.deflateFast() : this.deflateBetter(), 0 == this._lookahead && (0 != this._matchAvailable && this.ctTally(0, 255 & this._window[this._strStart - 1]), this.flushBlock(1), this._complete = !0), o + this.qCopy(A, o + t, e - o)
                }, A.prototype.qCopy = function(A, t, e) {
                    var o = 0,
                        i, s;
                    while (null != this._qHead && o < e) {
                        for (i = e - o, i > this._qHead.length && (i = this._qHead.length), s = 0; s < i; s++) A[t + o + s] = this._qHead.ptr[this._qHead.offset + s];
                        if (this._qHead.offset += i, this._qHead.length -= i, o += i, 0 == this._qHead.length) {
                            var n = this._qHead;
                            this._qHead = this._qHead.next, this.reuseQueue(n)
                        }
                    }
                    if (o == e) return o;
                    if (this._outOffset < this._outCount) {
                        for (i = e - o, i > this._outCount - this._outOffset && (i = this._outCount - this._outOffset), s = 0; s < i; s++) A[t + o + s] = this._outBuffer[this._outOffset + s];
                        this._outOffset += i, o += i, this._outCount == this._outOffset && (this._outCount = this._outOffset = 0)
                    }
                    return o
                }, A.prototype.ctInit = function() {
                    var A, t;
                    if (0 != this._staticDtree[0].dl) return;
                    this._lDesc.dynamicTree = this._dynamicLtree, this._lDesc.staticTree = this._staticLtree, this._lDesc.extraBits = r.extraLBits, this._lDesc.extraBase = r.literals + 1, this._lDesc.elements = r.lCodes, this._lDesc.maxLength = r.maxBits, this._lDesc.maxCode = 0, this._dDesc.dynamicTree = this._dynamicDtree, this._dDesc.staticTree = this._staticDtree, this._dDesc.extraBits = r.extraDBits, this._dDesc.extraBase = 0, this._dDesc.elements = r.dCodes, this._dDesc.maxLength = r.maxBits, this._dDesc.maxCode = 0, this._blDesc.dynamicTree = this._blTree, this._blDesc.staticTree = null, this._blDesc.extraBits = r.extraBLBits, this._blDesc.extraBase = 0, this._blDesc.elements = r.blCodes, this._blDesc.maxLength = r.maxBLBits, this._blDesc.maxCode = 0;
                    var e = 0;
                    for (t = 0; t < r.lengthCodes - 1; t++)
                        for (this._baseLength[t] = e, A = 0; A < 1 << r.extraLBits[t]; A++) this._lengthCode[e++] = t;
                    this._lengthCode[e - 1] = t;
                    var o = 0;
                    for (t = 0; t < 16; t++)
                        for (this._baseDist[t] = o, A = 0; A < 1 << r.extraDBits[t]; A++) this._distCode[o++] = t;
                    for (o >>= 7; t < r.dCodes; t++)
                        for (this._baseDist[t] = o << 7, A = 0; A < 1 << r.extraDBits[t] - 7; A++) this._distCode[256 + o++] = t;
                    for (var i = 0; i <= r.maxBits; i++) this._blCount[i] = 0;
                    A = 0;
                    while (A <= 143) this._staticLtree[A++].dl = 8, this._blCount[8]++;
                    while (A <= 255) this._staticLtree[A++].dl = 9, this._blCount[9]++;
                    while (A <= 279) this._staticLtree[A++].dl = 7, this._blCount[7]++;
                    while (A <= 287) this._staticLtree[A++].dl = 8, this._blCount[8]++;
                    for (this.genCodes(this._staticLtree, r.lCodes + 1), A = 0; A < r.dCodes; A++) this._staticDtree[A].dl = 5, this._staticDtree[A].fc = this.biReverse(A, 5);
                    this.initBlock()
                }, A.prototype.initBlock = function() {
                    var A;
                    for (A = 0; A < r.lCodes; A++) this._dynamicLtree[A].fc = 0;
                    for (A = 0; A < r.dCodes; A++) this._dynamicDtree[A].fc = 0;
                    for (A = 0; A < r.blCodes; A++) this._blTree[A].fc = 0;
                    this._dynamicLtree[r.endBlock].fc = 1, this._optLen = this._staticLen = 0, this._lastLit = this._lastDist = this._lastFlags = 0, this._flags = 0, this._flagBit = 1
                }, A.prototype.pqDownHeap = function(A, t) {
                    var e = this._heap[t],
                        o = t << 1;
                    while (o <= this._heapLen) {
                        if (o < this._heapLen && this.smaller(A, this._heap[o + 1], this._heap[o]) && o++, this.smaller(A, e, this._heap[o])) break;
                        this._heap[t] = this._heap[o], t = o, o <<= 1
                    }
                    this._heap[t] = e
                }, A.prototype.genBitLength = function(A) {
                    var t = A.dynamicTree,
                        e = A.extraBits,
                        o = A.extraBase,
                        i = A.maxCode,
                        s = A.maxLength,
                        n = A.staticTree,
                        a, l, h, p, c, g, u = 0;
                    for (p = 0; p <= r.maxBits; p++) this._blCount[p] = 0;
                    for (t[this._heap[this._heapMax]].dl = 0, a = this._heapMax + 1; a < r.heapSize; a++) {
                        if (l = this._heap[a], p = t[t[l].dl].dl + 1, p > s && (p = s, u++), t[l].dl = p, l > i) continue;
                        this._blCount[p]++, c = 0, l >= o && (c = e[l - o]), g = t[l].fc, this._optLen += g * (p + c), null != n && (this._staticLen += g * (n[l].dl + c))
                    }
                    if (0 == u) return;
                    do {
                        p = s - 1;
                        while (0 == this._blCount[p]) p--;
                        this._blCount[p]--, this._blCount[p + 1] += 2, this._blCount[s]--, u -= 2
                    } while (u > 0);
                    for (p = s; 0 != p; p--) {
                        l = this._blCount[p];
                        while (0 != l) {
                            if ((h = this._heap[--a]) > i) continue;
                            t[h].dl != p && (this._optLen += (p - t[h].dl) * t[h].fc, t[h].fc = p), l--
                        }
                    }
                }, A.prototype.genCodes = function(A, t) {
                    for (var e = new Array(r.maxBits + 1), o = 0, i = 1; i <= r.maxBits; i++) o = o + this._blCount[i - 1] << 1, e[i] = o;
                    for (var s = 0; s <= t; s++) {
                        var n = A[s].dl;
                        if (0 == n) continue;
                        A[s].fc = this.biReverse(e[n]++, n)
                    }
                }, A.prototype.buildTree = function(A) {
                    var t = A.dynamicTree,
                        e = A.staticTree,
                        o = A.elements,
                        i, s, n = -1,
                        a = o;
                    for (this._heapLen = 0, this._heapMax = r.heapSize, i = 0; i < o; i++) 0 != t[i].fc ? (this._heap[++this._heapLen] = n = i, this._depth[i] = 0) : t[i].dl = 0;
                    while (this._heapLen < 2) {
                        var l = this._heap[++this._heapLen] = n < 2 ? ++n : 0;
                        t[l].fc = 1, this._depth[l] = 0, this._optLen--, null != e && (this._staticLen -= e[l].dl)
                    }
                    for (A.maxCode = n, i = this._heapLen >> 1; i >= 1; i--) this.pqDownHeap(t, i);
                    do {
                        i = this._heap[r.smallest], this._heap[r.smallest] = this._heap[this._heapLen--], this.pqDownHeap(t, r.smallest), s = this._heap[r.smallest], this._heap[--this._heapMax] = i, this._heap[--this._heapMax] = s, t[a].fc = t[i].fc + t[s].fc, this._depth[i] > this._depth[s] + 1 ? this._depth[a] = this._depth[i] : this._depth[a] = this._depth[s] + 1, t[i].dl = t[s].dl = a, this._heap[r.smallest] = a++, this.pqDownHeap(t, r.smallest)
                    } while (this._heapLen >= 2);
                    this._heap[--this._heapMax] = this._heap[r.smallest], this.genBitLength(A), this.genCodes(t, n)
                }, A.prototype.scanTree = function(A, t) {
                    var e = -1,
                        o, i = A[0].dl,
                        s = 0,
                        n = 4,
                        a = 7;
                    0 == i && (n = 3, a = 138), A[t + 1].dl = 65535;
                    for (var l = 0; l <= t; l++) {
                        if (o = i, i = A[l + 1].dl, ++s < a && o == i) continue;
                        s < n ? this._blTree[o].fc += s : 0 != o ? (o != e && this._blTree[o].fc++, this._blTree[r.rep_3_6].fc++) : s <= 10 ? this._blTree[r.repz_3_10].fc++ : this._blTree[r.repz_11_138].fc++, s = 0, e = o, 0 == i ? (n = 3, a = 138) : o == i ? (n = 3, a = 6) : (n = 4, a = 7)
                    }
                }, A.prototype.sendTree = function(A, t) {
                    var e = -1,
                        o, i = A[0].dl,
                        s = 0,
                        n = 4,
                        a = 7;
                    0 == i && (n = 3, a = 138);
                    for (var l = 0; l <= t; l++) {
                        if (o = i, i = A[l + 1].dl, ++s < a && o == i) continue;
                        if (s < n)
                            do {
                                this.sendCode(o, this._blTree)
                            } while (0 != --s);
                        else 0 != o ? (o != e && (this.sendCode(o, this._blTree), s--), this.sendCode(r.rep_3_6, this._blTree), this.sendBits(s - 3, 2)) : s <= 10 ? (this.sendCode(r.repz_3_10, this._blTree), this.sendBits(s - 3, 3)) : (this.sendCode(r.repz_11_138, this._blTree), this.sendBits(s - 11, 7));
                        s = 0, e = o, 0 == i ? (n = 3, a = 138) : o == i ? (n = 3, a = 6) : (n = 4, a = 7)
                    }
                }, A.prototype.buildBlTree = function() {
                    var A;
                    for (this.scanTree(this._dynamicLtree, this._lDesc.maxCode), this.scanTree(this._dynamicDtree, this._dDesc.maxCode), this.buildTree(this._blDesc), A = r.blCodes - 1; A >= 3; A--)
                        if (0 != this._blTree[r.blOrder[A]].dl) break;
                    return this._optLen += 3 * (A + 1) + 5 + 5 + 4, A
                }, A.prototype.sendAllTrees = function(A, t, e) {
                    this.sendBits(A - 257, 5), this.sendBits(t - 1, 5), this.sendBits(e - 4, 4);
                    for (var o = 0; o < e; o++) this.sendBits(this._blTree[r.blOrder[o]].dl, 3);
                    this.sendTree(this._dynamicLtree, A - 1), this.sendTree(this._dynamicDtree, t - 1)
                }, A.prototype.flushBlock = function(A) {
                    var t = this._strStart - this._blockStart;
                    this._flagBuf[this._lastFlags] = this._flags, this.buildTree(this._lDesc), this.buildTree(this._dDesc);
                    var e = this.buildBlTree(),
                        o = this._optLen + 3 + 7 >> 3,
                        i = this._staticLen + 3 + 7 >> 3;
                    if (i <= o && (o = i), t + 4 <= o && this._blockStart >= 0) {
                        this.sendBits((r.storedBlock << 1) + A, 3), this.biWindup(), this.putShort(t), this.putShort(~t);
                        for (var s = 0; s < t; s++) this.putByte(this._window[this._blockStart + s])
                    } else i == o ? (this.sendBits((r.staticTrees << 1) + A, 3), this.compressBlock(this._staticLtree, this._staticDtree)) : (this.sendBits((r.dynamicTrees << 1) + A, 3), this.sendAllTrees(this._lDesc.maxCode + 1, this._dDesc.maxCode + 1, e + 1), this.compressBlock(this._dynamicLtree, this._dynamicDtree));
                    this.initBlock(), 0 != A && this.biWindup()
                }, A.prototype.ctTally = function(A, t) {
                    if (this._lBuffer[this._lastLit++] = t, 0 == A ? this._dynamicLtree[t].fc++ : (A--, this._dynamicLtree[this._lengthCode[t] + r.literals + 1].fc++, this._dynamicDtree[this.dCode(A)].fc++, this._dBuffer[this._lastDist++] = A, this._flags |= this._flagBit), this._flagBit <<= 1, 0 == (7 & this._lastLit) && (this._flagBuf[this._lastFlags++] = this._flags, this._flags = 0, this._flagBit = 1), this._compressLevel > 2 && 0 == (4095 & this._lastLit)) {
                        for (var e = 8 * this._lastLit, o = this._strStart - this._blockStart, i = 0; i < r.dCodes; i++) e += this._dynamicDtree[i].fc * (5 + r.extraDBits[i]);
                        if (e >>= 3, this._lastDist < parseInt((this._lastLit / 2).toString()) && e < parseInt((o / 2).toString())) return !0
                    }
                    return this._lastLit == r.litBufferSize - 1 || this._lastDist == r.distBufferSize
                }, A.prototype.compressBlock = function(A, t) {
                    var e = 0,
                        o = 0,
                        i = 0,
                        s = 0,
                        n, a, l, h;
                    if (0 != this._lastLit)
                        do {
                            0 == (7 & e) && (s = this._flagBuf[i++]), n = 255 & this._lBuffer[e++], 0 == (1 & s) ? this.sendCode(n, A) : (a = this._lengthCode[n], this.sendCode(a + r.literals + 1, A), l = r.extraLBits[a], 0 != l && (n -= this._baseLength[a], this.sendBits(n, l)), h = this._dBuffer[o++], a = this.dCode(h), this.sendCode(a, t), 0 != (l = r.extraDBits[a]) && (h -= this._baseDist[a], this.sendBits(h, l))), s >>= 1
                        } while (e < this._lastLit);
                    this.sendCode(r.endBlock, A)
                }, A.prototype.sendBits = function(A, t) {
                    this._biValid > r.bufferSize - t ? (this._biBuffer |= A << this._biValid, this.putShort(this._biBuffer), this._biBuffer = A >> r.bufferSize - this._biValid, this._biValid += t - r.bufferSize) : (this._biBuffer |= A << this._biValid, this._biValid += t)
                }, A.prototype.biReverse = function(A, t) {
                    var e = 0;
                    do {
                        e |= 1 & A, A >>= 1, e <<= 1
                    } while (--t > 0);
                    return e >> 1
                }, A.prototype.biWindup = function() {
                    this._biValid > 8 ? this.putShort(this._biBuffer) : this._biValid > 0 && this.putByte(this._biBuffer), this._biBuffer = 0, this._biValid = 0
                }, A.prototype.qOutBuffer = function() {
                    if (0 != this._outCount) {
                        var A = this.newQueue();
                        null == this._qHead ? this._qHead = this._qTail = A : this._qTail = this._qTail.next = A, A.length = this._outCount - this._outOffset;
                        for (var t = 0; t < A.length; t++) A.ptr[t] = this._outBuffer[this._outOffset + t];
                        this._outCount = this._outOffset = 0
                    }
                }, A.prototype.deflate = function(A, t) {
                    void 0 === t && (t = r.defaultLevel), this._deflateData = A, this._deflatePos = 0, this.deflateStart(t);
                    var e, o = new Array(1024),
                        i = [];
                    while ((e = this.deflateInternal(o, 0, o.length)) > 0)
                        for (var s = 0; s < e; s++) i[i.length] = o[s];
                    return this._deflateData = null, i
                }, A.prototype.getByte = function() {
                    if (this._inflateData.length == this._inflatePos) return -1;
                    return 255 & this._inflateData[this._inflatePos++]
                }, A.prototype.needBits = function(A) {
                    while (this._bitLength < A) this._bitBuffer |= this.getByte() << this._bitLength, this._bitLength += 8
                }, A.prototype.getBits = function(A) {
                    return this._bitBuffer & r.maskBits[A]
                }, A.prototype.dumpBits = function(A) {
                    this._bitBuffer >>= A, this._bitLength -= A
                }, A.prototype.inflateCodes = function(A, t, e) {
                    var o, i, s = 0;
                    if (0 == e) return 0;
                    for (;;) {
                        this.needBits(this._bl), i = this._tl.list[this.getBits(this._bl)], o = i.e;
                        while (o > 16) {
                            if (99 == o) return -1;
                            this.dumpBits(i.b), o -= 16, this.needBits(o), i = i.t[this.getBits(o)], o = i.e
                        }
                        if (this.dumpBits(i.b), 16 == o) {
                            if (this._wp &= r.wSize - 1, A[t + s++] = this._slide[this._wp++] = i.n, s == e) return e;
                            continue
                        }
                        if (15 == o) break;
                        this.needBits(o), this._copyLength = i.n + this.getBits(o), this.dumpBits(o), this.needBits(this._bd), i = this._td.list[this.getBits(this._bd)], o = i.e;
                        while (o > 16) {
                            if (99 == o) return -1;
                            this.dumpBits(i.b), o -= 16, this.needBits(o), i = i.t[this.getBits(o)], o = i.e
                        }
                        this.dumpBits(i.b), this.needBits(o), this._copyDist = this._wp - i.n - this.getBits(o), this.dumpBits(o);
                        while (this._copyLength > 0 && s < e) this._copyLength--, this._copyDist &= r.wSize - 1, this._wp &= r.wSize - 1, A[t + s++] = this._slide[this._wp++] = this._slide[this._copyDist++];
                        if (s == e) return e
                    }
                    return this._method = -1, s
                }, A.prototype.inflateStored = function(A, t, e) {
                    var o = 7 & this._bitLength;
                    if (this.dumpBits(o), this.needBits(16), o = this.getBits(16), this.dumpBits(16), this.needBits(16), o != (65535 & ~this._bitBuffer)) return -1;
                    this.dumpBits(16), this._copyLength = o, o = 0;
                    while (this._copyLength > 0 && o < e) this._copyLength--, this._wp &= r.wSize - 1, this.needBits(8), A[t + o++] = this._slide[this._wp++] = this.getBits(8), this.dumpBits(8);
                    return 0 == this._copyLength && (this._method = -1), o
                }, A.prototype.inflateFixed = function(A, t, e) {
                    if (null == this._fixedTL) {
                        var o = void 0,
                            i = new Array(288);
                        for (o = 0; o < 144; o++) i[o] = 8;
                        for (; o < 256; o++) i[o] = 9;
                        for (; o < 280; o++) i[o] = 7;
                        for (; o < 288; o++) i[o] = 8;
                        this._fixedBL = 7;
                        var s = new a(i, 288, 257, r.cplens, r.cplext, this._fixedBL);
                        if (0 != s.status) throw new System.Exception("Error: " + s.status);
                        for (this._fixedTL = s.root, this._fixedBL = s.m, o = 0; o < 30; o++) i[o] = 5;
                        if (this._fixedBD = 5, s = new a(i, 30, 0, r.cpdist, r.cpdext, this._fixedBD), s.status > 1) throw this._fixedTL = null, new System.Exception("Error: " + s.status);
                        this._fixedTD = s.root, this._fixedBD = s.m
                    }
                    return this._tl = this._fixedTL, this._td = this._fixedTD, this._bl = this._fixedBL, this._bd = this._fixedBD, this.inflateCodes(A, t, e)
                }, A.prototype.inflateDynamic = function(A, t, e) {
                    var o, i, s = new Array(286 + 30);
                    for (o = 0; o < s.length; o++) s[o] = 0;
                    this.needBits(5);
                    var n = 257 + this.getBits(5);
                    this.dumpBits(5), this.needBits(5);
                    var l = 1 + this.getBits(5);
                    this.dumpBits(5), this.needBits(4);
                    var h = 4 + this.getBits(4);
                    if (this.dumpBits(4), n > 286 || l > 30) return -1;
                    for (i = 0; i < h; i++) this.needBits(3), s[r.border[i]] = this.getBits(3), this.dumpBits(3);
                    for (; i < 19; i++) s[r.border[i]] = 0;
                    this._bl = 7;
                    var p = new a(s, 19, 19, null, null, this._bl);
                    if (0 != p.status) return -1;
                    this._tl = p.root, this._bl = p.m, o = 0;
                    var c = n + l,
                        g = 0,
                        u;
                    while (o < c)
                        if (this.needBits(this._bl), u = this._tl.list[this.getBits(this._bl)], i = u.b, this.dumpBits(i), (i = u.n) < 16) s[o++] = g = i;
                        else if (16 == i) {
                        if (this.needBits(2), i = 3 + this.getBits(2), this.dumpBits(2), o + i > c) return -1;
                        while (i-- > 0) s[o++] = g
                    } else if (17 == i) {
                        if (this.needBits(3), i = 3 + this.getBits(3), this.dumpBits(3), o + i > c) return -1;
                        while (i-- > 0) s[o++] = 0;
                        g = 0
                    } else {
                        if (this.needBits(7), i = 11 + this.getBits(7), this.dumpBits(7), o + i > c) return -1;
                        while (i-- > 0) s[o++] = 0;
                        g = 0
                    }
                    if (this._bl = r.lBits, p = new a(s, n, 257, r.cplens, r.cplext, this._bl), 0 == this._bl && (p.status = 1), 0 != p.status) return -1;
                    for (this._tl = p.root, this._bl = p.m, o = 0; o < l; o++) s[o] = s[o + n];
                    if (this._bd = r.dBits, p = new a(s, l, 0, r.cpdist, r.cpdext, this._bd), this._td = p.root, this._bd = p.m, 0 == this._bd && n > 257) return -1;
                    if (0 != p.status) return -1;
                    return this.inflateCodes(A, t, e)
                }, A.prototype.inflateStart = function() {
                    null == this._slide && (this._slide = new Array(2 * r.wSize)), this._wp = 0, this._bitBuffer = 0, this._bitLength = 0, this._method = -1, this._eof = !1, this._copyLength = 0, this._copyDist = 0, this._tl = null
                }, A.prototype.inflateInternal = function(A, t, e) {
                    var o = 0;
                    while (o < e) {
                        if (this._eof && -1 == this._method) return o;
                        if (this._copyLength > 0) {
                            if (this._method != r.storedBlock)
                                while (this._copyLength > 0 && o < e) this._copyLength--, this._copyDist &= r.wSize - 1, this._wp &= r.wSize - 1, A[t + o++] = this._slide[this._wp++] = this._slide[this._copyDist++];
                            else {
                                while (this._copyLength > 0 && o < e) this._copyLength--, this._wp &= r.wSize - 1, this.needBits(8), A[t + o++] = this._slide[this._wp++] = this.getBits(8), this.dumpBits(8);
                                0 == this._copyLength && (this._method = -1)
                            }
                            if (o == e) return o
                        }
                        if (-1 == this._method) {
                            if (this._eof) break;
                            this.needBits(1), 0 != this.getBits(1) && (this._eof = !0), this.dumpBits(1), this.needBits(2), this._method = this.getBits(2), this.dumpBits(2), this._tl = null, this._copyLength = 0
                        }
                        var i = void 0;
                        switch (this._method) {
                            case 0:
                                i = this.inflateStored(A, t + o, e - o);
                                break;
                            case 1:
                                i = null != this._tl ? this.inflateCodes(A, t + o, e - o) : this.inflateFixed(A, t + o, e - o);
                                break;
                            case 2:
                                i = null != this._tl ? this.inflateCodes(A, t + o, e - o) : this.inflateDynamic(A, t + o, e - o);
                                break;
                            default:
                                i = -1;
                                break
                        }
                        if (-1 == i) {
                            if (this._eof) return 0;
                            return -1
                        }
                        o += i
                    }
                    return o
                }, A.prototype.inflate = function(A) {
                    this._inflateData = A, this._inflatePos = 0, this.inflateStart();
                    var t, e, o = new Array(1024),
                        i = [];
                    while ((t = this.inflateInternal(o, 0, o.length)) > 0)
                        for (e = 0; e < t; e++) i[i.length] = o[e];
                    return this._inflateData = null, i
                }, A
            }();
        A.Helper = l
    }(t || (t = {}));
    var e;
    return function(A) {
        A[A.FText = 1] = "FText", A[A.FHcrc = 2] = "FHcrc", A[A.FExtra = 4] = "FExtra", A[A.FName = 8] = "FName", A[A.FComment = 16] = "FComment"
    }(e || (e = {})), Object.defineProperty(A, "crcTable", {
        get: function() {
            if (null == this._crcTable) {
                this._crcTable = new Array(256);
                for (var A = void 0, t = 0; t < 256; t++) {
                    A = t;
                    for (var e = 0; e < 8; e++) A = 0 != (1 & A) ? 3988292384 ^ A >>> 1 : A >>> 1;
                    this._crcTable[t] = A
                }
            }
            return this._crcTable
        },
        enumerable: !0,
        configurable: !0
    }), A.crc32 = function(A) {
        for (var t = 0 ^ -1, e = 0; e < A.length; e++) t = t >>> 8 ^ this.crcTable[255 & (t ^ A[e])];
        return (-1 ^ t) >>> 0
    }, A.putByte = function(A, t) {
        t.push(255 & A)
    }, A.putShort = function(A, t) {
        t.push(255 & A), t.push(A >>> 8)
    }, A.putLong = function(t, e) {
        A.putShort(65535 & t, e), A.putShort(t >>> 16, e)
    }, A.putString = function(t, e) {
        for (var o = 0; o < t.length; o += 1) A.putByte(t.charCodeAt(o), e)
    }, A.readByte = function(A) {
        return A.shift()
    }, A.readShort = function(A) {
        return A.shift() | A.shift() << 8
    }, A.readLong = function(t) {
        var e = A.readShort(t),
            o = A.readShort(t);
        if (o > 32768) return ((o -= 32768) << 16 | e) + 32768 * Math.pow(2, 16);
        return o << 16 | e
    }, A.readString = function(A) {
        var t = [];
        while (0 !== A[0]) t.push(String.fromCharCode(A.shift()));
        return A.shift(), t.join("")
    }, A.readBytes = function(A, t) {
        for (var e = [], o = 0; o < t; o += 1) e.push(A.shift());
        return e
    }, A.pack = function(o, i) {
        if (null == o || void 0 === o) return null;
        var s = 0,
            n = [],
            a = o;
        "string" == typeof o && (a = Array.prototype.map.call(unescape(encodeURIComponent(o)), function(A) {
            return A.charCodeAt(0)
        })), A.putByte(A.ID1, n), A.putByte(A.ID2, n), A.putByte(A.DefaultMethod, n), void 0 !== i && null != i && "" != i && (s |= e.FName), A.putByte(s, n), A.putLong(parseInt((Date.now() / 1e3).toString(), 10), n), 1 == A.DefaultLevel ? A.putByte(4, n) : 9 == A.DefaultLevel ? A.putByte(2, n) : A.putByte(0, n), -1 != navigator.appVersion.indexOf("Win") ? A.putByte(11, n) : A.putByte(3, n), void 0 !== i && null != i && "" != i && (A.putString(i.substring(i.lastIndexOf("/") + 1), n), A.putByte(0, n)), t.Helper.deflate(a, A.DefaultLevel).forEach(function(t) {
            A.putByte(t, n)
        }), A.putLong(A.crc32(a), n), A.putLong(a.length, n);
        var r = new Uint8Array(n);
        o = "";
        for (var l = 0; l < r.byteLength; l++) o += String.fromCharCode(r[l]);
        return window.btoa(o)
    }, A.unpack = function(o) {
        var i = o;
        if ("string" == typeof o) {
            var s = window && window.atob ? window.atob(o.split("\r\n").join("\n").split("\n").join("")) : Base64.decode(o);
            i = Array.prototype.map.call(s, function(A) {
                return A.charCodeAt(0)
            })
        }
        A.readByte(i) !== A.ID1 || A.readByte(i) !== A.ID2 ? alert("The stream is not a GZip file") : 8 !== A.readByte(i) && alert("Unsupported GZip compression method");
        var n = A.readByte(i),
            a = A.readLong(i),
            r = A.readByte(i),
            l = A.readByte(i);
        if (n & e.FExtra) {
            var h = A.readShort(i);
            A.readBytes(i, h)
        }
        n & e.FName && A.readString(i), n & e.FComment && A.readString(i), n & e.FHcrc && A.readShort(i);
        var p = t.Helper.inflate(i.splice(0, i.length - 8));
        if (A.readLong(i) !== A.crc32(p) && alert("GZip checksum does not match"), A.readLong(i) !== p.length && alert("Size of GZip decompressed file not correct"), "array" == typeof o) return p;
        for (var c = "", g = 0, u = p; g < u.length; g++) {
            var d = u[g];
            c += String.fromCharCode(d)
        }
        return decodeURIComponent(escape(c))
    }, A.DefaultLevel = 6, A.DefaultMethod = 8, A.ID1 = 31, A.ID2 = 139, A._crcTable = null, A
}();
StiJsViewer.prototype.postAction = function(A, t, e) {
    switch (A) {
        case "Refresh":
            break;
        case "Print":
            switch (this.options.toolbar.printDestination) {
                case "Pdf":
                    this.postPrint("PrintPdf");
                    break;
                case "Direct":
                    this.postPrint("PrintWithoutPreview");
                    break;
                case "WithPreview":
                    this.postPrint("PrintWithPreview");
                    break;
                default:
                    this.controls.menus.printMenu.changeVisibleState(!this.controls.menus.printMenu.visible);
                    break
            }
            return;
        case "Open":
            var o = this.InitializeOpenDialog("openReportDialog", function(A, t, e) {
                o.jsObject.postOpen(A, e)
            }, ".mdc,.mdz,.mdx");
            return void o.action();
        case "Save":
            return void this.controls.menus.saveMenu.changeVisibleState(!this.controls.menus.saveMenu.visible);
        case "SendEmail":
            return void this.controls.menus.sendEmailMenu.changeVisibleState(!this.controls.menus.sendEmailMenu.visible);
        case "Zoom":
            return void this.controls.menus.zoomMenu.changeVisibleState(!this.controls.menus.zoomMenu.visible);
        case "ViewMode":
            return void this.controls.menus.viewModeMenu.changeVisibleState(!this.controls.menus.viewModeMenu.visible);
        case "FirstPage":
        case "PrevPage":
        case "NextPage":
        case "LastPage":
            if ("FirstPage" == A && (this.reportParams.pageNumber = 0), "PrevPage" == A && this.reportParams.pageNumber > 0 && this.reportParams.pageNumber--, "NextPage" == A && this.reportParams.pageNumber < this.reportParams.pagesCount - 1 && this.reportParams.pageNumber++, "LastPage" == A && (this.reportParams.pageNumber = this.reportParams.pagesCount - 1), this.controls.reportPanel.pagesNavigationIsActive()) return this.scrollToPage(this.reportParams.pageNumber), void(this.controls.toolbar && this.controls.toolbar.changeToolBarState());
            break;
        case "FullScreen":
            return void this.changeFullScreenMode(!this.options.appearance.fullScreenMode);
        case "Zoom25":
            this.reportParams.zoom = 25;
            break;
        case "Zoom50":
            this.reportParams.zoom = 50;
            break;
        case "Zoom75":
            this.reportParams.zoom = 75;
            break;
        case "Zoom100":
            this.reportParams.zoom = 100;
            break;
        case "Zoom150":
            this.reportParams.zoom = 150;
            break;
        case "Zoom200":
            this.reportParams.zoom = 200;
            break;
        case "ZoomOnePage":
        case "ZoomPageWidth":
            "Separated" == this.options.toolbar.displayMode && (this.controls.toolbar.controls.ZoomOnePage.setSelected("ZoomOnePage" == A), this.controls.toolbar.controls.ZoomPageWidth.setSelected("ZoomPageWidth" == A)), this.reportParams.zoom = "ZoomPageWidth" == A ? parseInt(this.controls.reportPanel.getZoomByPageWidth()) : parseInt(this.controls.reportPanel.getZoomByPageHeight());
            break;
        case "ViewModeSinglePage":
            this.reportParams.viewMode = "SinglePage";
            break;
        case "ViewModeContinuous":
            this.reportParams.viewMode = "Continuous";
            break;
        case "ViewModeMultiplePages":
            this.reportParams.viewMode = "MultiplePages";
            break;
        case "ViewModeMultiPage":
            this.reportParams.viewMode = "MultiPage", this.reportParams.multiPageContainerWidth = this.controls.reportPanel.offsetWidth, this.reportParams.multiPageContainerHeight = this.controls.reportPanel.offsetHeight, this.reportParams.multiPageMargins = 10;
            break;
        case "GoToPage":
            if (this.reportParams.pageNumber = this.controls.toolbar.controls.PageControl.textBox.getCorrectValue() - 1, this.controls.reportPanel.pagesNavigationIsActive()) return this.scrollToPage(this.reportParams.pageNumber), void(this.controls.toolbar && this.controls.toolbar.changeToolBarState());
            break;
        case "BookmarkAction":
            if (this.reportParams.pageNumber == t || "SinglePage" != this.reportParams.viewMode) return void this.scrollToAnchor(e);
            this.reportParams.pageNumber = t, this.options.bookmarkAnchor = e;
            break;
        case "Bookmarks":
            return void this.controls.bookmarksPanel.changeVisibleState(!this.controls.buttons.Bookmarks.isSelected);
        case "Parameters":
            return void this.controls.parametersPanel.changeVisibleState(!this.controls.buttons.Parameters.isSelected);
        case "Find":
            return void this.controls.findPanel.changeVisibleState(!this.controls.toolbar.controls.Find.isSelected);
        case "About":
            return void this.controls.aboutPanel.changeVisibleState(!this.controls.toolbar.controls.About.isSelected);
        case "Design":
            return void this.postDesign();
        case "Pin":
            return void(this.controls.toolbar && this.controls.toolbar.changePinState(!this.options.toolbar.autoHide));
        case "Submit":
            return this.reportParams.editableParameters = null, this.reportParams.pageNumber = 0, this.options.isMobileDevice && this.controls.parametersPanel.changeVisibleState(!1), void this.postInteraction({
                action: "Variables",
                variables: this.controls.parametersPanel.getParametersValues()
            });
        case "Reset":
            return this.options.parameters = {}, this.controls.parametersPanel.clearParameters(), void this.controls.parametersPanel.addParameters();
        case "Editor":
            return void this.SetEditableMode(!this.options.editableMode)
    }
    A || (this.clearViewerState(!0), A = "GetReport"), this.controls.processImage.show(), this.postAjax(this.options.requestUrl.replace("{action}", "GetReport" == A || "None" == this.options.server.cacheMode ? this.options.actions.getReport : this.options.actions.viewerEvent), {
        action: "GetReport" == A ? "GetReport" : "GetPages"
    }, this.showReportPage)
}, StiJsViewer.prototype.postOpen = function(A, t) {
    if ("string" != typeof t || "" == t) return;
    0 != t.indexOf("<?xml") && 0 != t.indexOf("{") || (t = Base64.encode(t));
    var e = {
        action: "OpenReport",
        openingFileName: A || "Report.mdc",
        base64Data: t.indexOf("base64,") > 0 ? t.substr(t.indexOf("base64,") + 7) : t
    };
    this.clearViewerState(), this.reportParams.reportFileName = A;
    var o = this;
    if (A && A.toLowerCase().indexOf(".mdx") >= 0) {
        this.InitializePasswordForm().show(function(A) {
            e.openingFilePassword = A, o.controls.processImage.show(), o.postAjax(o.options.requestUrl.replace("{action}", o.options.actions.openReport), e, o.showReportPage)
        }, this.collections.loc.PasswordEnter + ":")
    } else this.controls.processImage.show(), this.postAjax(this.options.requestUrl.replace("{action}", this.options.actions.openReport), e, this.showReportPage)
}, StiJsViewer.prototype.postPrint = function(A) {
    var t = {
            action: "PrintReport",
            printAction: A,
            bookmarksPrint: this.options.appearance.bookmarksPrint
        },
        e = this.options.requestUrl.replace("{action}", this.options.actions.printReport);
    switch (A) {
        case "PrintPdf":
            "Edge" == this.getNavigatorName() || "Safari" == this.getNavigatorName() ? this.printAsPdfPopup(t) : "MSIE" == this.getNavigatorName() ? this.printAsPdfIE(e, t) : window.URL || window.webkitURL ? this.printAsPdf(e, t) : this.printAsPdfIE(e, t);
            break;
        case "PrintWithPreview":
            this.printAsPopup(t);
            break;
        case "PrintWithoutPreview":
            this.postAjax(e, t, this.printAsHtml);
            break
    }
}, StiJsViewer.prototype.printAsPdfPopup = function(A) {
    var t = this.options.requestAbsoluteUrl.replace("{action}", this.options.actions.printReport),
        e = this.openNewWindow("about:blank", "_blank");
    null != e && this.postForm(t, A, e.document)
}, StiJsViewer.prototype.printAsPdfIE = function(A, t) {
    var e = document.getElementById("pdfPrintFrame");
    e && document.body.removeChild(e), e = document.createElement("iframe"), e.id = "pdfPrintFrame", e.name = "pdfPrintFrame", e.width = "0", e.height = "0", e.style.position = "absolute", e.style.border = "none", document.body.appendChild(e, document.body.firstChild);
    var o = document.createElement("FORM");
    o.setAttribute("id", "printForm"), o.setAttribute("method", "POST"), o.setAttribute("action", A);
    var i = this.createPostParameters(t, !0);
    for (var s in i) {
        var n = document.createElement("INPUT");
        n.setAttribute("type", "hidden"), n.setAttribute("name", s), n.setAttribute("value", i[s]), o.appendChild(n)
    }
    var a = "<html><body>" + o.outerHTML + "<script>setTimeout(function () { document.getElementById('printForm').submit(); });<\/script></body></html>";
    e.contentWindow.document.open("application/pdf"), e.contentWindow.document.write(a), e.contentWindow.document.close()
}, StiJsViewer.prototype.printAsPdf = function(A, t) {
    t.responseType = "blob", this.postAjax(A, t, function(A, t) {
        var e = document.getElementById("pdfPrintFrame");
        e && document.body.removeChild(e), e = document.createElement("iframe"), e.id = "pdfPrintFrame", e.name = "pdfPrintFrame", e.width = "0", e.height = "0", e.style.position = "absolute", e.style.border = "none", document.body.appendChild(e, document.body.firstChild), e.src = (window.URL ? URL : webkitURL).createObjectURL(A)
    })
}, StiJsViewer.prototype.printAsPopup = function(A) {
    var t = this.options.requestAbsoluteUrl.replace("{action}", this.options.actions.printReport),
        e = this.openNewWindow("about:blank", "PrintReport", "height=900, width=790, toolbar=no, menubar=yes, scrollbars=yes, resizable=yes, location=no, directories=no, status=no");
    null != e && this.postForm(t, A, e.document)
}, StiJsViewer.prototype.printAsHtml = function(A, t) {
    if (t.showError(A)) return;
    var e = document.getElementById("pdfPrintFrame");
    e && document.body.removeChild(e), e = document.getElementById("htmlPrintFrame"), e && document.body.removeChild(e), e = document.createElement("iframe"), e.id = "htmlPrintFrame", e.name = "htmlPrintFrame", e.width = "0px", e.height = "0px", e.style.position = "absolute", e.style.border = "none", document.body.appendChild(e, document.body.firstChild), e.contentWindow.document.open(), e.contentWindow.document.write(A), e.contentWindow.document.close(), setTimeout(function() {
        e.contentWindow.focus(), e.contentWindow.print()
    })
}, StiJsViewer.prototype.postExport = function(A, t) {
    var e = {
            action: "ExportReport",
            exportFormat: A,
            exportSettings: t
        },
        o = t.OpenAfterExport && "_blank" == this.options.appearance.openExportedReportWindow ? this.openNewWindow("about:blank", "_blank").document : null,
        i = o ? this.options.requestAbsoluteUrl : this.options.requestUrl;
    this.postForm(i.replace("{action}", this.options.actions.exportReport), e, o)
}, StiJsViewer.prototype.postEmail = function(A, t) {
    var e = {
        action: "EmailReport",
        exportFormat: A,
        exportSettings: t
    };
    this.controls.processImage.show(), this.postAjax(this.options.requestUrl.replace("{action}", this.options.actions.emailReport), e, this.emailResult)
}, StiJsViewer.prototype.postDesign = function() {
    var A = "_blank" == this.options.appearance.designWindow ? this.openNewWindow("about:blank", "_blank").document : null,
        t = A ? this.options.requestAbsoluteUrl : this.options.requestUrl;
    this.postForm(t.replace("{action}", this.options.actions.designReport), {
        action: "DesignReport"
    }, A)
}, StiJsViewer.prototype.postInteraction = function(A) {
    if (!this.options.actions.interaction) return void(this.controls.buttons.Parameters && this.controls.buttons.Parameters.setEnabled(!1));
    "InitVars" != A.action && "DrillDown" == A.action && (A.drillDownParameters = this.reportParams.drillDownParameters.concat(A.drillDownParameters), A.drillDownGuid = hex_md5(JSON.stringify(A.drillDownParameters))), this.controls.processImage.show(), this.postAjax(this.options.requestUrl.replace("{action}", this.options.actions.interaction), A, "InitVars" == A.action ? this.showParametersPanel : this.showReportPage)
}, StiJsViewer.prototype.initAutoUpdateCache = function(A, t) {
    t.options.server.allowAutoUpdateCache && (t.controls.timerAutoUpdateCache && clearTimeout(t.controls.timerAutoUpdateCache), t.controls.timerAutoUpdateCache = setTimeout(function() {
        t.postAjax(t.options.requestUrl.replace("{action}", t.options.actions.viewerEvent), {
            action: "UpdateCache"
        }, t.initAutoUpdateCache)
    }, t.options.server.timeoutAutoUpdateCache))
}, StiJsViewer.prototype.emailResult = function(A, t) {
    t.controls.processImage.hide(), "0" == A ? alert(t.collections.loc.EmailSuccessfullySent) : 0 == A.indexOf("<?xml") ? (alert(t.GetXmlValue(A, "ErrorCode")), alert(t.GetXmlValue(A, "ErrorDescription"))) : alert(A)
}, StiJsViewer.prototype.parseParameters = function(A) {
    var t = this.controls.drillDownPanel;
    if (0 == t.buttonsRow.children.length && t.addButton(A.reportFileName, this.reportParams), "DrillDown" == A.action) {
        t.changeVisibleState(!0);
        var e = !1;
        for (var o in t.buttons) {
            var i = t.buttons[o];
            if (i.reportParams.drillDownGuid == A.drillDownGuid) {
                e = !0, i.style.display = "inline-block", i.select();
                break
            }
        }
        e || (this.controls.drillDownPanel.addButton(A.reportFileName), this.reportParams.drillDownParameters = A.drillDownParameters, this.reportParams.pageNumber = 0, this.reportParams.pagesWidth = 0, this.reportParams.pagesHeight = 0), this.controls.reportPanel.scrollTop = 0
    }
    return this.reportParams.pagesArray = A.pagesArray, "GetPages" != A.action && (this.reportParams.drillDownGuid = A.drillDownGuid, this.reportParams.pagesCount = A.pagesCount, null != A.pageNumber && (this.reportParams.pageNumber = A.pageNumber), this.reportParams.zoom = A.zoom, this.reportParams.viewMode = A.viewMode, this.reportParams.reportFileName = A.reportFileName, this.reportParams.interactionCollapsingStates = A.interactionCollapsingStates, A.bookmarksContent && (this.reportParams.bookmarksContent = A.bookmarksContent), A.isEditableReport && this.controls.buttons.Editor && (this.controls.buttons.Editor.style.display = "")), A
}, StiJsViewer.prototype.showParametersPanel = function(A, t) {
    t.showError(A) && (A = null), t.options.isParametersReceived = !0;
    var e = "string" == typeof A ? JSON.parse(A) : A;
    t.options.paramsVariables = e, t.InitializeParametersPanel(), t.controls.processImage.hide()
}, StiJsViewer.prototype.parseCloudParameters = function(A) {
    A.maxReportPages && this.showError({
        success: !1,
        type: "Warning",
        text: this.collections.loc.QuotaMaximumReportPagesCountExceeded + "\n" + this.collections.loc.Maximum + " " + this.numberWithSpaces(A.maxReportPages) + "."
    }), A.maxDataRows && this.showError({
        success: !1,
        type: "Warning",
        text: this.collections.loc.QuotaMaximumDataRowsCountExceeded + "\n" + this.collections.loc.Maximum + " " + this.numberWithSpaces(A.maxDataRows) + "."
    })
}, StiJsViewer.prototype.showReportPage = function(A, t) {
    if ("ServerError:The report is not specified." == A && t.options.isReportRecieved) return t.options.isReportRecieved = !1, void t.postAction("GetReport");
    if (t.controls.processImage.hide(), t.options.isReportRecieved = !0, t.showError(A)) return;
    if (t.options.server.useCompression && (A = StiGZipHelper.unpack(A), t.showError(A))) return;
    var e = "string" == typeof A && "{" == A.substr(0, 1) ? JSON.parse(A) : A;
    t.showError(A) && t.showError(e);
    var o = t.parseParameters(e);
    if (null == o) return;
    t.parseCloudParameters(e), o.bookmarksContent && t.InitializeBookmarksPanel(), o.pagesArray && t.controls.reportPanel.addPages(), t.controls.toolbar && (t.controls.toolbar.changeToolBarState(), t.controls.toolbar.setEnabled(!0), t.controls.navigatePanel && t.controls.navigatePanel.setEnabled(!0)), null != t.reportParams.autoZoom && (t.postAction(-1 == t.reportParams.autoZoom ? "ZoomPageWidth" : "ZoomOnePage"), delete t.reportParams.autoZoom), null != t.options.bookmarkAnchor && (t.scrollToAnchor(t.options.bookmarkAnchor), t.options.bookmarkAnchor = null), t.options.findMode && t.controls.findPanel && t.showFindLabels(t.controls.findPanel.controls.findTextBox.value), !t.options.isParametersReceived && t.options.toolbar.showParametersButton && t.postInteraction({
        action: "InitVars"
    }), t.initAutoUpdateCache(null, t)
}, StiJsViewer.prototype.InitializeNavigatePanel = function() {
    var A = document.createElement("div");
    A.id = this.controls.viewer.id + "NavigatePanel", A.jsObject = this, this.controls.navigatePanel = A, this.controls.mainPanel.appendChild(A), A.className = "stiJsViewerNavigatePanel", this.options.isMobileDevice && (A.style.transition = "margin 300ms ease, opacity 300ms ease", this.options.toolbar.autoHide && (A.style.zIndex = 5));
    var t = this.CreateHTMLTable();
    A.appendChild(t);
    var e = [];
    this.options.toolbar.showFirstPageButton && e.push(["FirstPage", null, "PageFirst20.png", this.collections.loc.FirstPageToolTip, null]), this.options.toolbar.showPreviousPageButton && e.push(["PrevPage", null, "PagePrevious20.png", this.collections.loc.PrevPageToolTip, null]), this.options.toolbar.showCurrentPageControl && (e.push(["Separator"]), e.push(["PageControl"]), e.push(["Separator"])), this.options.toolbar.showNextPageButton && e.push(["NextPage", null, "PageNext20.png", this.collections.loc.NextPageToolTip, null]), this.options.toolbar.showLastPageButton && e.push(["LastPage", null, "PageLast20.png", this.collections.loc.LastPageToolTip, null]), e.push(["Space"]), e.push(["ZoomPageWidth", null, "ZoomPageWidth20.png", this.collections.loc.ZoomPageWidth, null]), e.push(["ZoomOnePage", null, "ZoomOnePage20.png", this.collections.loc.ZoomOnePage, null]), this.options.toolbar.showZoomButton && (e.push(["Separator"]), e.push(["Zoom", "100%", null, this.collections.loc.Zoom, "Up"]));
    for (var o = 0; o < e.length; o++) {
        var i = e[o][0];
        if (0 == i.indexOf("Space")) {
            t.addCell().style.width = "100%";
            continue
        }
        if (0 == i.indexOf("Separator")) {
            t.addCell(this.NavigatePanelSeparator());
            continue
        }
        var s = "PageControl" != i ? this.NavigateButton(i, e[o][1], e[o][2], e[o][3] ? [e[o][3], this.helpLinks[i]] : null, e[o][4]) : this.PageControl();
        if ("PageControl" != i) {
            if (null == s.caption && (s.imageCell.style.textAlign = "center", s.innerTable.style.width = "100%", s.style.width = this.options.isMobileDevice ? "0.4in" : "35px"), s.toolTip) {
                var n = {
                    top: "isNavigatePanelTooltip"
                };
                "Zoom" != i && "ZoomPageWidth" != i && "ZoomOnePage" != i || (n.rightToLeft = !0), s.toolTip.push(n)
            }
        } else s.textBox.style.border = "0px";
        s.arrow && (s.arrow.src = this.collections.images["ButtonArrowUpWhite.png"]), s.style.margin = "FirstPage" == i ? "0 1px 0 3px" : "Zoom" == i ? "0 3px 0 1px" : "0px 1px 0 1px", this.controls.toolbar.controls[i] = s, t.addCell(s)
    }
    var a = document.createElement("div");
    A.disabledPanel = a, a.className = "stiJsViewerNavigatePanelDisabledPanel", A.appendChild(a), A.setEnabled = function(A) {
        a.style.display = A ? "none" : ""
    }, A.setEnabled(!0), this.options.isMobileDevice && (this.controls.toolbar.addEventListener("touchstart", function() {
        A.jsObject.controls.reportPanel.keepToolbar()
    }), A.addEventListener("touchstart", function() {
        A.jsObject.controls.reportPanel.keepToolbar()
    }), this.controls.reportPanel.showToolbar())
}, StiJsViewer.prototype.NavigatePanelSeparator = function() {
    var A = document.createElement("div");
    return A.style.height = this.options.isMobileDevice ? "0.5in" : "35px", A.className = "stiJsViewerNavigatePanelSeparator", A
}, StiJsViewer.prototype.NavigateButton = function(A, t, e, o, i) {
    var s = this.SmallButton(A, t, e, o, i, "stiJsViewerNavigateButton");
    return s.style.height = this.options.isMobileDevice ? "0.5in" : "35px", s
};
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(A) {
        if ("undefined" != typeof unescape) A = unescape(encodeURIComponent(A));
        else {
            A = A.replace(/\r\n/g, "\n");
            for (var t = "", e = 0; e < A.length; e++) {
                var o = A.charCodeAt(e);
                o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128))
            }
            A = t
        }
        if (void 0 !== window.btoa) return window.btoa(A);
        var i = "",
            s, n, a, r, l, h, p, c = 0;
        while (c < A.length) s = A.charCodeAt(c++), n = A.charCodeAt(c++), a = A.charCodeAt(c++), r = s >> 2, l = (3 & s) << 4 | n >> 4, h = (15 & n) << 2 | a >> 6, p = 63 & a, isNaN(n) ? h = p = 64 : isNaN(a) && (p = 64), i = i + this._keyStr.charAt(r) + this._keyStr.charAt(l) + this._keyStr.charAt(h) + this._keyStr.charAt(p);
        return i
    },
    decode: function(A) {
        var t = "";
        if (void 0 !== window.atob) t = window.atob(A);
        else {
            var e, o, i, s, n, a, r, l = 0;
            A = A.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (l < A.length) s = this._keyStr.indexOf(A.charAt(l++)), n = this._keyStr.indexOf(A.charAt(l++)), a = this._keyStr.indexOf(A.charAt(l++)), r = this._keyStr.indexOf(A.charAt(l++)), e = s << 2 | n >> 4, o = (15 & n) << 4 | a >> 2, i = (3 & a) << 6 | r, t += String.fromCharCode(e), 64 != a && (t += String.fromCharCode(o)), 64 != r && (t += String.fromCharCode(i))
        }
        if ("undefined" != typeof escape) return decodeURIComponent(escape(t));
        var h = "",
            l = 0,
            p = c1 = c2 = 0;
        while (l < t.length) p = t.charCodeAt(l), p < 128 ? (h += String.fromCharCode(p), l++) : p > 191 && p < 224 ? (c2 = t.charCodeAt(l + 1), h += String.fromCharCode((31 & p) << 6 | 63 & c2), l += 2) : (c2 = t.charCodeAt(l + 1), c3 = t.charCodeAt(l + 2), h += String.fromCharCode((15 & p) << 12 | (63 & c2) << 6 | 63 & c3), l += 3);
        return h
    }
};;
var Stimulsoft;
! function(e) {
    var t;
    ! function(t) {
        var r = e.Base.Localization.StiLocalization,
            o = function() {
                function t() {}
                return t.GetLocalizationItems = function() {
                    e.Base.Localization.StiLocalization.getJsonStringLocalization();
                    var t = {};
                    return t.EditorToolTip = r.get("FormViewer", "Editor"), t.TellMeMore = r.get("HelpDesigner", "TellMeMore"), t.Print = r.get("A_WebViewer", "PrintReport"), t.PrintToolTip = r.get("HelpViewer", "Print"), t.Save = r.get("A_WebViewer", "SaveReport"), t.SaveToolTip = r.get("HelpViewer", "Save"), t.Open = r.get("Buttons", "Open"), t.OpenToolTip = r.get("HelpViewer", "Open"), t.SendEmail = r.get("FormViewer", "SendEMail").replaceAll("...", String.empty), t.SendEmailToolTip = r.get("HelpViewer", "SendEMail"), t.BookmarksToolTip = r.get("HelpViewer", "Bookmarks"), t.ParametersToolTip = r.get("HelpViewer", "Parameters"), t.FindToolTip = r.get("HelpViewer", "Find"), t.FirstPageToolTip = r.get("HelpViewer", "PageFirst"), t.PrevPageToolTip = r.get("HelpViewer", "PagePrevious"), t.NextPageToolTip = r.get("HelpViewer", "PageNext"), t.LastPageToolTip = r.get("HelpViewer", "PageLast"), t.FullScreenToolTip = r.get("HelpViewer", "FullScreen"), t.ZoomToolTip = r.get("FormViewer", "Zoom"), t.Loading = r.get("A_WebViewer", "Loading").replaceAll("...", ""), t.Bookmarks = r.get("FormViewer", "Bookmarks"), t.Parameters = r.get("FormViewer", "Parameters"), t.Time = r.get("FormFormatEditor", "Time"), t.Version = r.get("PropertyMain", "Version"), t.FindWhat = r.get("FormViewerFind", "FindWhat"), t.FindPrevious = r.get("FormViewerFind", "FindPrevious"), t.FindNext = r.get("FormViewerFind", "FindNext"), t.MatchCase = r.get("Editor", "MatchCase"), t.MatchWholeWord = r.get("Editor", "MatchWholeWord"), t.EmailOptions = r.get("A_WebViewer", "EmailOptions"), t.Email = r.get("A_WebViewer", "Email"), t.Subject = r.get("A_WebViewer", "Subject"), t.Message = r.get("A_WebViewer", "Message"), t.Attachment = r.get("A_WebViewer", "Attachment"), t.SinglePage = r.get("FormViewer", "PageViewModeSinglePage"), t.Continuous = r.get("FormViewer", "PageViewModeContinuous"), t.MultiplePages = r.get("FormViewer", "PageViewModeMultiplePages"), t.OnePage = r.get("A_WebViewer", "OnePage"), t.ViewModeToolTip = r.get("FormViewer", "ViewMode"), t.WholeReport = r.get("A_WebViewer", "WholeReport"), t.Design = r.get("Buttons", "Design"), t.Page = r.get("A_WebViewer", "Page"), t.PageOf = r.get("A_WebViewer", "PageOf"), t.SaveDocument = r.get("FormViewer", "DocumentFile"), t.SavePdf = r.get("Export", "ExportTypePdfFile"), t.SaveXps = r.get("Export", "ExportTypeXpsFile"), t.SavePpt2007 = r.get("Export", "ExportTypePpt2007File"), t.SaveHtml = r.get("Export", "ExportTypeHtmlFile"), t.SaveText = r.get("Export", "ExportTypeTxtFile"), t.SaveRtf = r.get("Export", "ExportTypeRtfFile"), t.SaveWord2007 = r.get("Export", "ExportTypeWord2007File"), t.SaveOdt = r.get("Export", "ExportTypeWriterFile"), t.SaveExcel = r.get("Export", "ExportTypeExcelFile"), t.SaveOds = r.get("Export", "ExportTypeCalcFile"), t.SaveData = r.get("Export", "ExportTypeDataFile"), t.SaveImage = r.get("Export", "ExportTypeImageFile"), t.PrintPdf = r.get("A_WebViewer", "PrintToPdf"), t.PrintWithPreview = r.get("A_WebViewer", "PrintWithPreview"), t.PrintWithoutPreview = r.get("A_WebViewer", "PrintWithoutPreview"), t.ZoomOnePage = r.get("Zoom", "PageHeight"), t.ZoomPageWidth = r.get("FormViewer", "ZoomPageWidth"), t.RemoveAll = r.get("Buttons", "RemoveAll"), t.NewItem = r.get("FormDictionaryDesigner", "NewItem"), t.Close = r.get("Buttons", "Close"), t.Reset = r.get("Gui", "cust_pm_reset"), t.Submit = r.get("Buttons", "Submit"), t.RangeFrom = r.get("PropertyMain", "RangeFrom"), t.RangeTo = r.get("PropertyMain", "RangeTo"), t.ExportFormTitle = r.get("Export", "title"), t.ButtonOk = r.get("Gui", "barname_ok"), t.ButtonCancel = r.get("Gui", "barname_cancel"), t.PagesRange = r.get("Report", "RangePage"), t.PagesRangeAll = r.get("Report", "RangeAll"), t.PagesRangeCurrentPage = r.get("Report", "RangeCurrentPage"), t.PagesRangePages = r.get("Report", "RangePages"), t.PagesRangeAllTooltip = r.get("HelpViewer", "PageAll"), t.PagesRangeCurrentPageTooltip = r.get("HelpViewer", "CurrentPage"), t.PagesRangePagesTooltip = r.get("HelpViewer", "RangePages"), t.SettingsGroup = r.get("Export", "Settings"), t.Type = r.get("PropertyMain", "Type") + ":", t.TypeTooltip = r.get("HelpViewer", "TypeExport"), t.ZoomHtml = r.get("Export", "Scale"), t.ZoomHtmlTooltip = r.get("HelpViewer", "ScaleHtml"), t.ImageFormatForHtml = r.get("Export", "ImageFormat"), t.ImageFormatForHtmlTooltip = r.get("HelpViewer", "ImageFormat"), t.SavingReport = r.get("DesignerFx", "SavingReport"), t.EmailSuccessfullySent = r.get("DesignerFx", "EmailSuccessfullySent"), t.SaveReportMdc = r.get("FormViewer", "DocumentFile").replaceAll("...", "") + " (.mdc)", t.SaveReportMdz = r.get("FormViewer", "CompressedDocumentFile") + " (.mdz)", t.SaveReportMdx = r.get("FormViewer", "EncryptedDocumentFile") + " (.mdx)", t.PasswordEnter = r.get("Password", "lbPasswordLoad"), t.PasswordSaveReport = r.get("Report", "LabelPassword"), t.PasswordSaveReportTooltip = r.get("HelpViewer", "UserPassword"), t.ExportMode = r.get("Export", "ExportMode"), t.ExportModeTooltip = r.get("HelpViewer", "ExportMode"), t.CompressToArchive = r.get("Export", "CompressToArchive"), t.CompressToArchiveTooltip = r.get("HelpViewer", "CompressToArchive"), t.EmbeddedImageData = r.get("Export", "EmbeddedImageData"), t.EmbeddedImageDataTooltip = r.get("HelpViewer", "EmbeddedImageData"), t.AddPageBreaks = r.get("Export", "AddPageBreaks"), t.AddPageBreaksTooltip = r.get("HelpViewer", "AddPageBreaks"), t.ImageResolution = r.get("Export", "ImageResolution"), t.ImageResolutionTooltip = r.get("HelpViewer", "ImageResolution"), t.ImageCompressionMethod = r.get("Export", "ImageCompressionMethod"), t.ImageCompressionMethodTooltip = r.get("HelpViewer", "ImageCompressionMethod"), t.ImageQuality = r.get("Export", "ImageQuality"), t.ImageQualityTooltip = r.get("HelpViewer", "ImageQuality"), t.ContinuousPages = r.get("Export", "ContinuousPages"), t.ContinuousPagesTooltip = r.get("HelpViewer", "ContinuousPages"), t.StandardPDFFonts = r.get("Export", "StandardPDFFonts"), t.StandardPDFFontsTooltip = r.get("HelpViewer", "StandardPdfFonts"), t.EmbeddedFonts = r.get("Export", "EmbeddedFonts"), t.EmbeddedFontsTooltip = r.get("HelpViewer", "EmbeddedFonts"), t.UseUnicode = r.get("Export", "UseUnicode"), t.UseUnicodeTooltip = r.get("HelpViewer", "UseUnicode"), t.Compressed = r.get("Export", "Compressed"), t.CompressedTooltip = r.get("HelpViewer", "Compressed"), t.ExportRtfTextAsImage = r.get("Export", "ExportRtfTextAsImage"), t.ExportRtfTextAsImageTooltip = r.get("HelpViewer", "ExportRtfTextAsImage"), t.PdfACompliance = r.get("Export", "PdfACompliance"), t.PdfAComplianceTooltip = r.get("HelpViewer", "PdfACompliance"), t.KillSpaceLines = r.get("Export", "TxtKillSpaceLines"), t.KillSpaceLinesTooltip = r.get("HelpViewer", "KillSpaceLines"), t.PutFeedPageCode = r.get("Export", "TxtPutFeedPageCode"), t.PutFeedPageCodeTooltip = r.get("HelpViewer", "PutFeedPageCode"), t.DrawBorder = r.get("Export", "TxtDrawBorder"), t.DrawBorderTooltip = r.get("HelpViewer", "DrawBorder"), t.CutLongLines = r.get("Export", "TxtCutLongLines"), t.CutLongLinesTooltip = r.get("HelpViewer", "CutLongLines"), t.BorderType = r.get("Export", "TxtBorderType"), t.BorderTypeTooltip = r.get("HelpViewer", "BorderType"), t.BorderTypeSimple = r.get("Export", "TxtBorderTypeSimple"), t.BorderTypeSingle = r.get("Export", "TxtBorderTypeSingle"), t.BorderTypeDouble = r.get("Export", "TxtBorderTypeDouble"), t.ZoomXY = r.get("Export", "Zoom"), t.ZoomXYTooltip = r.get("HelpViewer", "ZoomTxt"), t.EncodingData = r.get("Export", "Encoding"), t.EncodingDataTooltip = r.get("HelpViewer", "EncodingData"), t.ImageFormat = r.get("Export", "ImageType"), t.ImageFormatTooltip = r.get("HelpViewer", "ImageType"), t.ImageFormatColor = r.get("PropertyMain", "Color"), t.ImageFormatGrayscale = r.get("Export", "ImageGrayscale"), t.ImageFormatMonochrome = r.get("Export", "ImageMonochrome"), t.MonochromeDitheringType = r.get("Export", "MonochromeDitheringType"), t.MonochromeDitheringTypeTooltip = r.get("HelpViewer", "DitheringType"), t.TiffCompressionScheme = r.get("Export", "TiffCompressionScheme"), t.TiffCompressionSchemeTooltip = r.get("HelpViewer", "TiffCompressionScheme"), t.CutEdges = r.get("Export", "ImageCutEdges"), t.CutEdgesTooltip = r.get("HelpViewer", "CutEdges"), t.MultipleFiles = r.get("Export", "MultipleFiles"), t.MultipleFilesTooltip = r.get("HelpViewer", "MultipleFiles"), t.ExportDataOnly = r.get("Export", "ExportDataOnly"), t.ExportDataOnlyTooltip = r.get("HelpViewer", "ExportDataOnly"), t.UseDefaultSystemEncoding = r.get("Export", "UseDefaultSystemEncoding"), t.UseDefaultSystemEncodingTooltip = r.get("HelpViewer", "UseDefaultSystemEncoding"), t.EncodingDifFile = r.get("Export", "Encoding"), t.EncodingDifFileTooltip = r.get("HelpViewer", "EncodingData"), t.ExportModeRtf = r.get("Export", "ExportMode"), t.ExportModeRtfTooltip = r.get("HelpViewer", "ExportModeRtf"), t.ExportModeRtfTable = r.get("Export", "ExportModeTable"), t.ExportModeRtfFrame = r.get("Export", "ExportModeFrame"), t.UsePageHeadersFooters = r.get("Export", "UsePageHeadersAndFooters"), t.UsePageHeadersFootersTooltip = r.get("HelpViewer", "UsePageHeadersAndFooters"), t.RemoveEmptySpace = r.get("Export", "RemoveEmptySpaceAtBottom"), t.RemoveEmptySpaceTooltip = r.get("HelpViewer", "RemoveEmptySpaceAtBottom"), t.Separator = r.get("Export", "Separator"), t.SeparatorTooltip = r.get("HelpViewer", "Separator"), t.SkipColumnHeaders = r.get("Export", "SkipColumnHeaders"), t.SkipColumnHeadersTooltip = r.get("HelpViewer", "SkipColumnHeaders"), t.ExportObjectFormatting = r.get("Export", "ExportObjectFormatting"), t.ExportObjectFormattingTooltip = r.get("HelpViewer", "ExportObjectFormatting"), t.UseOnePageHeaderFooter = r.get("Export", "UseOnePageHeaderAndFooter"), t.UseOnePageHeaderFooterTooltip = r.get("HelpViewer", "UseOnePageHeaderAndFooter"), t.ExportEachPageToSheet = r.get("Export", "ExportEachPageToSheet"), t.ExportEachPageToSheetTooltip = r.get("HelpViewer", "ExportEachPageToSheet"), t.ExportPageBreaks = r.get("Export", "ExportPageBreaks"), t.ExportPageBreaksTooltip = r.get("HelpViewer", "ExportPageBreaks"), t.EncodingDbfFile = r.get("Export", "Encoding"), t.EncodingDbfFileTooltip = r.get("HelpViewer", "EncodingData"), t.DocumentSecurityButton = r.get("Export", "DocumentSecurity"), t.DigitalSignatureButton = r.get("Export", "DigitalSignature"), t.OpenAfterExport = r.get("Export", "OpenAfterExport"), t.OpenAfterExportTooltip = r.get("HelpViewer", "OpenAfterExport"), t.AllowEditable = r.get("Export", "AllowEditable"), t.AllowEditableTooltip = r.get("HelpViewer", "AllowEditable"), t.NameYes = r.get("FormFormatEditor", "nameYes"), t.NameNo = r.get("FormFormatEditor", "nameNo"), t.UserPassword = r.get("Export", "labelUserPassword"), t.UserPasswordTooltip = r.get("HelpViewer", "UserPassword"), t.OwnerPassword = r.get("Export", "labelOwnerPassword"), t.OwnerPasswordTooltip = r.get("HelpViewer", "OwnerPassword"), t.BandsFilter = r.get("Export", "BandsFilter"), t.BandsFilterTooltip = r.get("HelpViewer", "ExportMode"), t.BandsFilterAllBands = r.get("Export", "AllBands"), t.BandsFilterDataOnly = r.get("Export", "DataOnly"), t.BandsFilterDataAndHeadersFooters = r.get("Export", "DataAndHeadersFooters"), t.AllowPrintDocument = r.get("Export", "AllowPrintDocument"), t.AllowPrintDocumentTooltip = r.get("HelpViewer", "AllowPrintDocument"), t.AllowModifyContents = r.get("Export", "AllowModifyContents"), t.AllowModifyContentsTooltip = r.get("HelpViewer", "AllowModifyContents"), t.AllowCopyTextAndGraphics = r.get("Export", "AllowCopyTextAndGraphics"), t.AllowCopyTextAndGraphicsTooltip = r.get("HelpViewer", "AllowCopyTextAndGraphics"), t.AllowAddOrModifyTextAnnotations = r.get("Export", "AllowAddOrModifyTextAnnotations"), t.AllowAddOrModifyTextAnnotationsTooltip = r.get("HelpViewer", "AllowAddOrModifyTextAnnotations"), t.EncryptionKeyLength = r.get("Export", "labelEncryptionKeyLength"), t.EncryptionKeyLengthTooltip = r.get("HelpViewer", "EncryptionKeyLength"), t.UseDigitalSignature = r.get("Export", "UseDigitalSignature"), t.UseDigitalSignatureTooltip = r.get("HelpViewer", "DigitalSignature"), t.GetCertificateFromCryptoUI = r.get("Export", "GetCertificateFromCryptoUI"), t.GetCertificateFromCryptoUITooltip = r.get("HelpViewer", "GetCertificateFromCryptoUI"), t.SubjectNameString = r.get("Export", "labelSubjectNameString"), t.SubjectNameStringTooltip = r.get("HelpViewer", "SubjectNameString"), t.MonthJanuary = r.get("A_WebViewer", "MonthJanuary"), t.MonthFebruary = r.get("A_WebViewer", "MonthFebruary"), t.MonthMarch = r.get("A_WebViewer", "MonthMarch"), t.MonthApril = r.get("A_WebViewer", "MonthApril"), t.MonthMay = r.get("A_WebViewer", "MonthMay"), t.MonthJune = r.get("A_WebViewer", "MonthJune"), t.MonthJuly = r.get("A_WebViewer", "MonthJuly"), t.MonthAugust = r.get("A_WebViewer", "MonthAugust"), t.MonthSeptember = r.get("A_WebViewer", "MonthSeptember"), t.MonthOctober = r.get("A_WebViewer", "MonthOctober"), t.MonthNovember = r.get("A_WebViewer", "MonthNovember"), t.MonthDecember = r.get("A_WebViewer", "MonthDecember"), t.DayMonday = r.get("A_WebViewer", "DayMonday"), t.DayTuesday = r.get("A_WebViewer", "DayTuesday"), t.DayWednesday = r.get("A_WebViewer", "DayWednesday"), t.DayThursday = r.get("A_WebViewer", "DayThursday"), t.DayFriday = r.get("A_WebViewer", "DayFriday"), t.DaySaturday = r.get("A_WebViewer", "DaySaturday"), t.DaySunday = r.get("A_WebViewer", "DaySunday"), t.FormViewerTitle = r.get("FormViewer", "title"), t.Error = r.get("Errors", "Error"), t.SelectAll = r.get("MainMenu", "menuEditSelectAll").replaceAll("&", ""), t.CurrentMonth = r.get("DatePickerRanges", "CurrentMonth"), t.CurrentQuarter = r.get("DatePickerRanges", "CurrentQuarter"), t.CurrentWeek = r.get("DatePickerRanges", "CurrentWeek"), t.CurrentYear = r.get("DatePickerRanges", "CurrentYear"), t.NextMonth = r.get("DatePickerRanges", "NextMonth"), t.NextQuarter = r.get("DatePickerRanges", "NextQuarter"), t.NextWeek = r.get("DatePickerRanges", "NextWeek"), t.NextYear = r.get("DatePickerRanges", "NextYear"), t.PreviousMonth = r.get("DatePickerRanges", "PreviousMonth"), t.PreviousQuarter = r.get("DatePickerRanges", "PreviousQuarter"), t.PreviousWeek = r.get("DatePickerRanges", "PreviousWeek"), t.PreviousYear = r.get("DatePickerRanges", "PreviousYear"), t.FirstQuarter = r.get("DatePickerRanges", "FirstQuarter"), t.SecondQuarter = r.get("DatePickerRanges", "SecondQuarter"), t.ThirdQuarter = r.get("DatePickerRanges", "ThirdQuarter"), t.FourthQuarter = r.get("DatePickerRanges", "FourthQuarter"), t.MonthToDate = r.get("DatePickerRanges", "MonthToDate"), t.QuarterToDate = r.get("DatePickerRanges", "QuarterToDate"), t.WeekToDate = r.get("DatePickerRanges", "WeekToDate"), t.YearToDate = r.get("DatePickerRanges", "YearToDate"), t.Today = r.get("DatePickerRanges", "Today"), t.Tomorrow = r.get("DatePickerRanges", "Tomorrow"), t.Yesterday = r.get("DatePickerRanges", "Yesterday"), t.New = r.get("MainMenu", "menuFileNew").replaceAll("&", ""), t.Edit = r.get("MainMenu", "menuEditEdit"), t
                }, t
            }();
        t.StiCollectionsHelper = o
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(t) {
        var r = e.Report.Components.StiText,
            o = e.Report.Components.StiCheckBox,
            i = e.Report.Components.StiRichText,
            n = function() {
                function t() {}
                return t.checkEditableReport = function(e) {
                    for (var t = e.getComponents(), n = 0, a = t.list; n < a.length; n++) {
                        var s = a[n];
                        if (s.sti_is(r) && s.editable) return !0;
                        if (s.sti_is(o) && s.editable) return !0;
                        if (s.sti_is(i) && s.editable) return !0
                    }
                    return !1
                }, t.applyEditableFieldsToReport = function(t, i) {
                    if (null == i) return;
                    try {
                        var n = i;
                        for (var a in n) {
                            var s = a.toNumber(),
                                l = n[a];
                            for (var p in l) {
                                var g = p.toNumber(),
                                    m = l[p];
                                if (s < t.renderedPages.count) {
                                    var u = t.renderedPages.getByIndex(s);
                                    if (g < u.components.count) {
                                        var c = u.components.getByIndex(g);
                                        "CheckBox" == m.type.toString() && c.sti_is(o) ? c.checkedValue = m.checked.toBoolean() ? "true" : "false" : "Text" == m.type.toString() && c.sti_is(r) && (c.text = m.text.toString())
                                    }
                                }
                            }
                        }
                    } catch (t) {
                        e.System.StiError.showError(t)
                    }
                }, t
            }();
        t.StiEditableFieldsHelper = n
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(t) {
        var r = e.Report.Export.StiDataExportMode,
            o = e.Report.StiExportFormat,
            i = e.Report.Export.StiHtmlExportMode,
            n = e.Report.Export.StiHtmlType,
            a = e.Report.ImageFormat,
            s = e.Report.StiRangeType,
            l = e.Report.Export.StiPdfAllowEditable,
            p = e.Report.Export.StiPdfImageCompressionMethod,
            g = e.Report.Export.StiPdfEncryptionKeyLength,
            m = e.Report.Export.StiUserAccessPrivileges,
            u = e.Report.Export.StiExcelType,
            c = function() {
                function e() {}
                return e.getReportFileName = function(e) {
                    return (null == e.reportAlias || 0 == e.reportAlias.trim().length ? e.reportName : e.reportAlias).replaceAll('"', "")
                }, e.applyExportSettings = function(e, t, c) {
                    switch ("All" == t.PageRange ? c.pageRange.rangeType = s.All : (c.pageRange.rangeType = s.Pages, c.pageRange.pageRanges = t.PageRange), e) {
                        case o.Html:
                            c.htmlType = n[t.HtmlType], c.addPageBreaks = t.AddPageBreaks, c.exportMode = i[t.ExportMode], c.imageFormat = a[t.ImageFormat], c.useEmbeddedImages = t.UseEmbeddedImages, c.zoom = parseFloat(t.Zoom);
                            break;
                        case o.Html5:
                            c.htmlType = n[t.HtmlType], c.continuousPages = t.ContinuousPages, c.imageFormat = a[t.ImageFormat], c.imageQuality = parseFloat(t.ImageQuality), c.imageResolution = parseFloat(t.ImageResolution);
                            break;
                        case o.Pdf:
                            c.allowEditable = l[t.AllowEditable], c.compressed = !1, c.embeddedFonts = t.EmbeddedFonts, c.exportRtfTextAsImage = t.ExportRtfTextAsImage, c.getCertificateFromCryptoUI = t.GetCertificateFromCryptoUI, c.imageCompressionMethod = p[t.ImageCompressionMethod], c.imageQuality = parseFloat(t.ImageQuality), c.imageResolution = parseFloat(t.ImageResolution), c.keyLength = g[t.KeyLength], c.passwordInputOwner = t.PasswordInputOwner, c.passwordInputUser = t.PasswordInputUser, c.pdfACompliance = t.PdfACompliance, c.standardPdfFonts = !1, c.useDigitalSignature = t.UseDigitalSignature, c.useUnicode = !1, c.userAccessPrivileges = 0;
                            for (var d = t.UserAccessPrivileges.replaceAll(" ", "").split(","), y = 0; y < d.length; y++) c.userAccessPrivileges += m[d[y]];
                            break;
                        case o.Excel2007:
                            c.excelType = u[t.ExcelType], c.exportDataOnly = t.ExportDataOnly, c.exportEachPageToSheet = t.ExportEachPageToSheet, c.exportObjectFormatting = t.ExportObjectFormatting, c.exportPageBreaks = t.ExportPageBreaks, c.imageQuality = parseFloat(t.ImageQuality), c.imageResolution = parseFloat(t.ImageResolution), c.useOnePageHeaderAndFooter = t.UseOnePageHeaderAndFooter;
                            break;
                        case o.Word2007:
                            c.imageQuality = parseFloat(t.ImageQuality), c.imageResolution = parseFloat(t.ImageResolution), c.removeEmptySpaceAtBottom = t.RemoveEmptySpaceAtBottom, c.usePageHeadersAndFooters = t.UsePageHeadersAndFooters;
                            break;
                        case o.Csv:
                            c.separator = t.Separator, c.skipColumnHeaders = t.SkipColumnHeaders, c.dataExportMode = r[t.DataExportMode];
                            break
                    }
                }, e
            }();
        t.StiExportsHelper = c
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(t) {
        var r = e.Report.Chart.IStiChart,
            o = e.Report.Components.StiCrossHeaderInteraction,
            i = e.Report.StiReport,
            n = e.Report.Components.StiDataBand,
            a = e.Report.Components.StiInteractionSortDirection,
            s = e.Report.Components.StiSortHelper,
            l = function() {
                function e() {}
                return e.applySorting = function(e, t) {
                    var r = t.ComponentName.toString().split(";"),
                        o = e.getComponentByName(r[0]),
                        i = r[1].toBoolean();
                    r = t.DataBand.toString().split(";");
                    var l = e.getComponentByName(r[0]).sti_as(n);
                    if (null != l && (l.sort = r.where(function(e, t) {
                            return 0 != t
                        }).toArray()), null != o && null != l) {
                        var p = o.interaction.getSortColumnsString();
                        if (null == l.sort || 0 == l.sort.length) l.sort = s.addColumnToSorting(l.sort, p, !0);
                        else {
                            var g = s.getColumnIndexInSorting(l.sort, p);
                            if (i) l.sort = -1 == g ? s.addColumnToSorting(l.sort, p, !0) : s.changeColumnSortDirection(l.sort, p);
                            else if (-1 != g) {
                                var m = s.getColumnSortDirection(l.sort, p);
                                m = m == a.Ascending ? a.Descending : a.Ascending, l.sort = s.addColumnToSorting([], p, m == a.Ascending), o.interaction.sortingDirection = m
                            } else l.sort = s.addColumnToSorting([], p, !0), o.interaction.sortingDirection = a.Ascending
                        }
                        e.isRendered = !1
                    }
                }, e.applyCollapsing = function(e, t) {
                    var r = t.ComponentName.toString(),
                        i = e.getComponentByName(r),
                        n = i;
                    if (null != n && null != n.interaction) {
                        e.interactionCollapsingStates = t.InteractionCollapsingStates;
                        var a = n.interaction.sti_as(o);
                        null != a && a.collapsingEnabled, e.isRendered = !1
                    }
                }, e.cloneReport = function(e) {
                    var t = e.saveToJsonString(),
                        r = new i;
                    if (r.load(t), null != e.variables && e.variables.count > 0)
                        for (var o = 0; o < e.variables.count; o++) r.setVariable(e.variables.keys[o], e.variables.values[o]);
                    return r.regData("", "", e.dataStore), r.regBusinessObject(e.businessObjectsStore), r.onBeginProcessData = e.onBeginProcessData, r.onEndProcessData = e.onEndProcessData, r
                }, e.applyDrillDown = function(e, t, o) {
                    var n = o.PageIndex.toNumber(),
                        a = o.ComponentIndex.toNumber(),
                        s = o.PageGuid,
                        l = o.ReportFile,
                        p = null,
                        g = e;
                    if (String.isNullOrEmpty(s)) String.isNullOrEmpty(l) || (g = new i, g.loadFile(l));
                    else {
                        for (var m = 0, u = e.pages.list; m < u.length; m++) {
                            var c = u[m];
                            c.guid == s ? (p = c, c.enabled = !0, c.skip = !1) : c.enabled = !1
                        }
                        for (var d = e.getComponents(), y = 0, S = d.list; y < S.length; y++) {
                            var h = S[y];
                            if (null != h.interaction && h.interaction.drillDownEnabled && h.interaction.drillDownPageGuid == p.guid && (h.interaction.drillDownPage = null), h.sti_is(r))
                                for (var f = h.sti_as(r), v = 0, w = f.series.list; v < w.length; v++) var b = w[v]
                        }
                    }
                    e.reportAlias == g.reportAlias && null != p && (g.reportAlias = null == p.alias || 0 == p.alias.length ? p.name : p.alias), e.reportDescription == g.reportDescription && (g.reportDescription = g.reportAlias);
                    var E = t.renderedPages.getByIndex(n),
                        P = E.components.getByIndex(a);
                    if (null != P && null != P.drillDownParameters)
                        for (var x = 0, T = P.drillDownParameters; x < T.length; x++) {
                            var R = T[x];
                            g.setVariable(R.name, R.value)
                        }
                    return g
                }, e.addBookmarkNode = function(e, t, r) {
                    var o = new p;
                    o.parent = t;
                    var i = e.text.replace("'", "\\'");
                    o.title = i, o.url = "#" + i, o.used = !0, r.add(o);
                    var n = r.count - 1;
                    if (0 != e.bookmarks.count)
                        for (var a = 0; a < e.bookmarks.count; a++) this.addBookmarkNode(e.bookmarks.list[a], n, r)
                }, e.getBookmarksContent = function(e, t, r) {
                    for (var o = {}, i = 0, n = 0, a = e.renderedPages.list; n < a.length; n++) {
                        var s = a[n];
                        e.renderedPages.getPage(s);
                        for (var l = s.getComponents(), p = 0, g = l.list; p < g.length; p++) {
                            var m = g[p];
                            if (m.enabled) {
                                var u = m.bookmarkValue;
                                null == u && (u = String.empty), u = u.replace("'", "\\'"), u != String.empty && (o[u] || (o[u] = i))
                            }
                        }
                        i++
                    }
                    var c = [];
                    this.addBookmarkNode(e.bookmark, -1, c);
                    var d = String.empty;
                    d += String.stiFormat("bookmarks = new stiTree('bookmarks','{0}',{1}, imagesForBookmarks);", t, r);
                    for (var y = 0; y < c.count; y++) {
                        var S = c[y],
                            h = String.empty;
                        h = null != o[S.title] ? String.stiFormat("Page {0}", o[S.title] + 1) : "Page 0", d += String.stiFormat("bookmarks.add({0},{1},'{2}','{3}','{4}');", y, S.parent, S.title, S.url, h)
                    }
                    return d
                }, e
            }();
        t.StiReportHelper = l;
        var p = function() {
            function e() {}
            return e
        }();
        t.StiBookmarkTreeNode = p
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(t) {
        var r = e.Report.Dictionary.StiSelectionMode,
            o = e.Report.Dictionary.StiItemsInitializationType,
            i = e.Report.Engine.StiVariableHelper,
            n = e.Report.Dictionary.StiTypeMode,
            a = e.Report.Dictionary.StiType,
            s = e.System.Enum,
            l = e.Report.Dictionary.StiVariableInitBy,
            p = e.Report.Dictionary.StiDateTimeType,
            g = e.Report.Range,
            m = e.Report.StringRange,
            u = e.Report.FloatRange,
            c = e.Report.CharRange,
            d = e.Report.DateTimeRange,
            y = e.Report.TimeSpanRange,
            S = e.Report.DecimalRange,
            h = e.Report.DoubleRange,
            f = e.Report.ByteRange,
            v = e.Report.ShortRange,
            w = e.Report.IntRange,
            b = e.Report.LongRange,
            E = e.Report.GuidRange,
            P = e.System.Collections.Hashtable,
            x = function() {
                function t() {
                    this.en_us_culture = null
                }
                return t.fillDialogInfoItems = function(e) {
                    for (var t = !1, r = 0, n = e.dictionary.variables.list; r < n.length; r++) {
                        var a = n[r];
                        if (a.requestFromUser && a.dialogInfo.itemsInitializationType == o.Columns && (null == a.dialogInfo.keys || 0 == a.dialogInfo.keys.length || null == a.dialogInfo.values || 0 == a.dialogInfo.values.length)) {
                            t = !0;
                            break
                        }
                    }
                    t && (e.dictionary.connect(), i.fillItemsOfVariables(e), e.dictionary.disconnect())
                }, t.getVariableAlias = function(e) {
                    if (String.isNullOrEmpty(e.alias)) return e.name;
                    return e.alias
                }, t.getItems = function(t) {
                    var r = [],
                        o = null != t.dialogInfo.bindingVariable ? t.dialogInfo.bindingVariable.value : null,
                        i = 0;
                    if (null != t.dialogInfo.keys && 0 != t.dialogInfo.keys.length)
                        for (var n = t.dialogInfo.getDialogInfoItems(t.type), a = new P, s = 0, l = n; s < l.length; s++) {
                            var p = l[s];
                            if (null == o || o == e.System.Convert.toString(p.valueBinding)) {
                                var g = {};
                                g.value = p.value, g.key = p.keyObject, g.keyTo = p.keyObjectTo, t.type == e.System.DateTime || t.type == e.System.NullableDateTime || t.type == e.System.StimulsoftDateTimeRange || t.type == e.System.StimulsoftDateTimeList ? (null != p.keyObject && (g.key = this.getDateTimeObject(p.keyObject)), null != p.keyObjectTo && (g.keyTo = this.getDateTimeObject(p.keyObjectTo))) : (null != g.value && (g.value = g.value.toString()), null != g.key && (g.key = g.key.toString()), null != g.keyTo && (g.keyTo = g.keyTo.toString())), (String.isNullOrEmpty(o) || null == g.key || null == a.get(g.key)) && r.add(g), String.isNullOrEmpty(o) || a.set(g.key, !0)
                            }
                            i++
                        }
                    return i > 0 ? r : null
                }, t.getDateTimeObject = function(t) {
                    if (null != t && !t.sti_is(e.System.DateTime)) return t;
                    var r = e.System.DateTime.now;
                    null != t && t.sti_is(e.System.DateTime) && (r = t);
                    var o = {};
                    return o.year = r.year, o.month = r.month, o.day = r.day, o.hours = r.hour, o.minutes = r.minute, o.seconds = r.second, null == t && (o.isNull = !0), o
                }, t.getBasicType = function(e) {
                    var t = {
                        ref: n.Value
                    };
                    return a.getTypeModeFromType(e.type, t), s.getName(n, t.ref)
                }, t.getStiType = function(t) {
                    if (t.type == String || t.type == e.System.StimulsoftStringList || t.type == e.System.StimulsoftStringRange) return "String";
                    if (t.type == e.System.Char || t.type == e.System.NullableChar || t.type == e.System.StimulsoftCharRange || t.type == e.System.StimulsoftCharList) return "Char";
                    if (t.type == Boolean || t.type == e.System.NullableBoolean || t.type == e.System.StimulsoftBoolList) return "Bool";
                    if (t.type == e.System.DateTime || t.type == e.System.NullableDateTime || t.type == e.System.StimulsoftDateTimeList || t.type == e.System.StimulsoftDateTimeRange) return "DateTime";
                    if (t.type == e.System.TimeSpan || t.type == e.System.NullableTimeSpan || t.type == e.System.StimulsoftTimeSpanList || t.type == e.System.StimulsoftTimeSpanRange) return "TimeSpan";
                    if (t.type == e.System.Guid || t.type == e.System.NullableGuid || t.type == e.System.StimulsoftGuidList || t.type == e.System.StimulsoftGuidRange) return "Guid";
                    if (t.type == e.System.Drawing.Image) return "Image";
                    if (t.type == e.System.Single || t.type == e.System.Single || t.type == e.System.StimulsoftFloatList || t.type == e.System.StimulsoftFloatRange) return "Float";
                    if (t.type == e.System.Double || t.type == e.System.NullableDouble || t.type == e.System.StimulsoftDoubleList || t.type == e.System.StimulsoftDoubleRange) return "Double";
                    if (t.type == e.System.Decimal || t.type == e.System.NullableDecimal || t.type == e.System.StimulsoftDecimalList || t.type == e.System.StimulsoftDecimalRange) return "Decimal";
                    if (t.type == e.System.Int32 || t.type == e.System.NullableInt32 || t.type == e.System.StimulsoftIntList || t.type == e.System.StimulsoftIntRange) return "Int";
                    if (t.type == e.System.UInt32 || t.type == e.System.NullableUInt32) return "Uint";
                    if (t.type == e.System.Int16 || t.type == e.System.NullableInt16 || t.type == e.System.StimulsoftShortList || t.type == e.System.StimulsoftShortRange) return "Short";
                    if (t.type == e.System.UInt16 || t.type == e.System.NullableUInt16) return "Ushort";
                    if (t.type == e.System.Int64 || t.type == e.System.NullableInt64 || t.type == e.System.StimulsoftLongList || t.type == e.System.StimulsoftLongRange) return "Long";
                    if (t.type == e.System.UInt64 || t.type == e.System.NullableUInt64) return "Ulong";
                    if (t.type == e.System.Byte || t.type == e.System.NullableByte || t.type == e.System.StimulsoftByteList || t.type == e.System.StimulsoftByteRange) return "Byte";
                    if (t.type == e.System.SByte || t.type == e.System.NullableSByte) return "Sbyte";
                    return String.empty
                }, t.applyReportParameters = function(e, t) {
                    for (var r in t) {
                        var o = e.dictionary.variables.getByName(r);
                        null != o && this.setVariableValue(e, r, t[r], o)
                    }
                    e.isRendered = !1
                }, t.applyReportBindingVariables = function(t, r) {
                    for (var o in r)
                        for (var i = 0, n = t.dictionary.variables.list; i < n.length; i++) {
                            var a = n[i];
                            if (a.name == o) {
                                var s = e.System.Activator.createInstance(a.type);
                                s.sti_is(g) ? s.parse(r[o].from, r[o].to) : a.value = e.System.Convert.toString(r[o])
                            }
                            null != a.dialogInfo.bindingVariable && a.dialogInfo.bindingVariable.name == o && (a.dialogInfo.bindingVariable.value = e.System.Convert.toString(r[o]), delete r[a.name])
                        }
                }, t.setVariableValue = function(t, r, o, i) {
                    var n = e.System.Globalization.CultureInfo.currentCulture.numberFormat.numberDecimalSeparator,
                        a = null,
                        s = null,
                        l = null;
                    if (null != o && (o.sti_is(Array) && (l = o), "object" == typeof o ? s = o : a = e.System.Convert.toString(o)), i.type == String) t.setVariable(r, o);
                    else if (i.type == e.System.Single || i.type == e.System.Single) {
                        var p = 0;
                        p = parseFloat(a.replaceAll(".", ",").replaceAll(",", n)), t.setVariable(r, p)
                    } else if (i.type == e.System.Double || i.type == e.System.NullableDouble) {
                        var p = 0;
                        p = parseFloat(a.replaceAll(".", ",").replaceAll(",", n)), t.setVariable(r, p)
                    } else if (i.type == e.System.Decimal || i.type == e.System.NullableDecimal) {
                        var p = 0;
                        p = parseFloat(a.replaceAll(".", ",").replaceAll(",", n)), t.setVariable(r, p)
                    } else if (i.type == e.System.Int32 || i.type == e.System.NullableInt32) {
                        var p = 0;
                        p = parseInt(a), t.setVariable(r, p)
                    } else if (i.type == e.System.UInt32 || i.type == e.System.NullableUInt32) {
                        var p = 0;
                        p = parseInt(a), t.setVariable(r, p)
                    } else if (i.type == e.System.Int16 || i.type == e.System.NullableInt16) {
                        var p = 0;
                        p = parseInt(a), t.setVariable(r, p)
                    } else if (i.type == e.System.UInt16 || i.type == e.System.NullableUInt16) {
                        var p = 0;
                        p = parseInt(a), t.setVariable(r, p)
                    } else if (i.type == e.System.Int64 || i.type == e.System.NullableInt64) {
                        var p = 0;
                        p = parseInt(a), t.setVariable(r, p)
                    } else if (i.type == e.System.UInt64 || i.type == e.System.NullableUInt64) {
                        var p = 0;
                        p = parseInt(a), t.setVariable(r, p)
                    } else if (i.type == e.System.Byte || i.type == e.System.NullableByte) {
                        var p = 0;
                        p = parseInt(a), t.setVariable(r, p)
                    } else if (i.type == e.System.SByte || i.type == e.System.NullableSByte) {
                        var p = 0;
                        p = parseInt(a), t.setVariable(r, p)
                    } else if (i.type == e.System.Char || i.type == e.System.NullableChar) {
                        var p = " ";
                        p = o, t.setVariable(r, p)
                    } else if (i.type == Boolean || i.type == e.System.NullableBoolean) {
                        var p = !1;
                        p = "true" == a.toLower(), t.setVariable(r, p)
                    } else if (i.type == e.System.DateTime || i.type == e.System.NullableDateTime) {
                        var p = void 0;
                        try {
                            p = new e.System.DateTime(Date.parse(a))
                        } catch (t) {
                            e.System.StiError.showError(t, !1), p = e.System.DateTime.now
                        }
                        t.setVariable(r, p)
                    } else if (i.type == e.System.TimeSpan || i.type == e.System.NullableTimeSpan) {
                        var p = void 0;
                        try {
                            p = e.System.TimeSpan.fromString(a)
                        } catch (t) {
                            e.System.StiError.showError(t, !1), p = e.System.TimeSpan.zero
                        }
                        t.setVariable(r, p)
                    } else if (i.type == e.System.Guid || i.type == e.System.NullableGuid) {
                        var g = void 0;
                        try {
                            g = new e.System.Guid(a)
                        } catch (t) {
                            e.System.StiError.showError(t, !1), g = e.System.Guid.empty
                        }
                        t.setVariable(r, g)
                    } else if (i.type == e.System.StimulsoftStringRange) t.setVariable(r, new m(e.System.Convert.toString(s.from), e.System.Convert.toString(s.to)));
                    else if (i.type == e.System.StimulsoftFloatRange) {
                        var P = 0,
                            x = 0;
                        P = parseFloat(e.System.Convert.toString(s.from).replaceAll(",", n)), x = parseFloat(e.System.Convert.toString(s.to).replaceAll(",", n)), t.setVariable(r, new u(P, x))
                    } else if (i.type == e.System.StimulsoftDoubleRange) {
                        var P = 0,
                            x = 0;
                        P = parseFloat(e.System.Convert.toString(s.from).replaceAll(",", n)), x = parseFloat(e.System.Convert.toString(s.to).replaceAll(",", n)), t.setVariable(r, new h(P, x))
                    } else if (i.type == e.System.StimulsoftDecimalRange) {
                        var P = 0,
                            x = 0;
                        P = parseFloat(e.System.Convert.toString(s.from).replaceAll(",", n)), x = parseFloat(e.System.Convert.toString(s.to).replaceAll(",", n)), t.setVariable(r, new S(P, x))
                    } else if (i.type == e.System.StimulsoftIntRange) {
                        var P = 0,
                            x = 0;
                        P = parseInt(e.System.Convert.toString(s.from).replaceAll(",", n)), x = parseInt(e.System.Convert.toString(s.to).replaceAll(",", n)), t.setVariable(r, new w(P, x))
                    } else if (i.type == e.System.StimulsoftShortRange) {
                        var P = 0,
                            x = 0;
                        P = parseInt(e.System.Convert.toString(s.from).replaceAll(",", n)), x = parseInt(e.System.Convert.toString(s.to).replaceAll(",", n)), t.setVariable(r, new v(P, x))
                    } else if (i.type == e.System.StimulsoftLongRange) {
                        var P = 0,
                            x = 0;
                        P = parseInt(e.System.Convert.toString(s.from).replaceAll(",", n)), x = parseInt(e.System.Convert.toString(s.to).replaceAll(",", n)), t.setVariable(r, new b(P, x))
                    } else if (i.type == e.System.StimulsoftByteRange) {
                        var P = 0,
                            x = 0;
                        P = parseInt(e.System.Convert.toString(s.from).replaceAll(",", n)), x = parseInt(e.System.Convert.toString(s.to).replaceAll(",", n)), t.setVariable(r, new f(P, x))
                    } else if (i.type == e.System.StimulsoftCharRange) {
                        var P = 0,
                            x = 0;
                        P = e.System.Convert.toString(s.from), x = e.System.Convert.toString(s.to), t.setVariable(r, new c(P, x))
                    } else if (i.type == e.System.StimulsoftDateTimeRange) {
                        var P = e.System.DateTime.now,
                            x = e.System.DateTime.now;
                        P = new e.System.DateTime(Date.parse(s.from)), x = new e.System.DateTime(Date.parse(s.to)), t.setVariable(r, new d(P, x))
                    } else if (i.type == e.System.StimulsoftTimeSpanRange) {
                        var P = e.System.TimeSpan.zero,
                            x = e.System.TimeSpan.zero;
                        P = e.System.TimeSpan.fromString(s.from), x = e.System.TimeSpan.fromString(s.to), t.setVariable(r, new y(P, x))
                    } else if (i.type == e.System.StimulsoftGuidRange) {
                        var P = e.System.Guid.empty,
                            x = e.System.Guid.empty;
                        try {
                            P = new e.System.Guid(e.System.Convert.toString(s.from)), x = new e.System.Guid(e.System.Convert.toString(s.to))
                        } catch (t) {
                            e.System.StiError.showError(t, !1)
                        }
                        t.setVariable(r, new E(P, x))
                    } else if (i.type == e.System.StimulsoftStringList) {
                        for (var T = [], R = 0, D = l; R < D.length; R++) {
                            var p = D[R];
                            T.add(p.toString())
                        }
                        t.setVariable(r, T), null != i.dialogInfo.keys && 0 != i.dialogInfo.keys.length || (i.dialogInfo.keys = T.toArray())
                    } else if (i.type == e.System.StimulsoftFloatList || i.type == e.System.StimulsoftDoubleList || i.type == e.System.StimulsoftDecimalList || i.type == e.System.StimulsoftByteList || i.type == e.System.StimulsoftShortList || i.type == e.System.StimulsoftLongList) {
                        for (var T = [], V = 0, A = l; V < A.length; V++) {
                            var p = A[V];
                            T.add(p.toNumber())
                        }
                        t.setVariable(r, T), null != i.dialogInfo.keys && 0 != i.dialogInfo.keys.length || (i.dialogInfo.keys = T.toArray().select(function(e) {
                            return e.toString()
                        }).toArray())
                    } else if (i.type == e.System.StimulsoftIntList) {
                        for (var T = [], k = [], C = 0, I = l; C < I.length; C++) {
                            var p = I[C];
                            T.add(p.toNumber()), k.add(p.toString())
                        }
                        t.setVariable(r, T), null != i.dialogInfo.keys && 0 != i.dialogInfo.keys.length || (i.dialogInfo.keys = k)
                    } else if (i.type == e.System.StimulsoftCharList) {
                        for (var T = [], F = 0, M = l; F < M.length; F++) {
                            var p = M[F];
                            T.add(p.toString())
                        }
                        t.setVariable(r, T), null != i.dialogInfo.keys && 0 != i.dialogInfo.keys.length || (i.dialogInfo.keys = T.toArray().select(function(e) {
                            return e.toString()
                        }).toArray())
                    } else if (i.type == e.System.StimulsoftBoolList) {
                        for (var T = [], O = 0, H = l; O < H.length; O++) {
                            var p = H[O];
                            T.add(p.toBoolean())
                        }
                        t.setVariable(r, T), null != i.dialogInfo.keys && 0 != i.dialogInfo.keys.length || (i.dialogInfo.keys = T.toArray().select(function(e) {
                            return e.toString
                        }).toArray())
                    }
                }, t.getVariables = function(t, o) {
                    this.fillDialogInfoItems(t);
                    for (var i = {}, n = {}, a = 0, g = 0, m = t.dictionary.variables.list; g < m.length; g++) {
                        var u = m[g];
                        if (u.requestFromUser) {
                            null != u.dialogInfo.bindingVariable && (n[u.dialogInfo.bindingVariable.name] = !0);
                            var c = {};
                            c.name = u.name, c.alias = this.getVariableAlias(u), c.basicType = this.getBasicType(u), c.type = this.getStiType(u), c.allowUserValues = u.dialogInfo.allowUserValues, c.dateTimeType = s.getName(p, u.dialogInfo.dateTimeType);
                            var d = this.getItems(u);
                            c.items = d, o && void 0 !== o[u.name] ? c.value = o[u.name] : u.selection == r.Nothing ? c.value = "" : u.selection == r.First ? c.value = null != d && d.count > 0 ? d[0].key : "" : c.value = u.initBy == l.Value ? u.valueObject : t.getVariable(u.name), c.key = c.value, c.keyTo = String.empty;
                            var y = null;
                            if (null != d && d.count > 0) {
                                u.selection == r.First ? y = d[0] : (y = {}, y.value = "", y.key = "");
                                for (var S = e.System.Convert.toString(c.value), h = 0, f = d; h < f.length; h++) {
                                    var v = f[h];
                                    if (e.System.Convert.toString(v.key) == S) {
                                        y = v;
                                        break
                                    }
                                }
                            }
                            if ("Value" == c.basicType || "NullableValue" == c.basicType) {
                                null != y && (c.key = y.key, c.value = y.value, (u.dialogInfo.allowUserValues || null == c.value || "string" == typeof c.value && "" == c.value) && (c.value = c.key));
                                for (var w = 0, b = t.dictionary.variables.list; w < b.length; w++) {
                                    var E = b[w];
                                    null != E.dialogInfo.bindingVariable && E.dialogInfo.bindingVariable.name == u.name && (E.dialogInfo.bindingVariable.valueObject = c.key)
                                }
                                "DateTime" == c.type && (c.key = this.getDateTimeObject(c.key))
                            }
                            "Range" == c.basicType && ("DateTime" == c.type ? c.key = this.getDateTimeObject(u.initBy == l.Value ? u.valueObject.fromObject : t.getVariable(u.name).fromObject) : c.key = u.initBy == l.Value ? u.valueObject.fromObject.toString() : t.getVariable(u.name).fromObject.toString(), "DateTime" == c.type ? c.keyTo = this.getDateTimeObject(u.initBy == l.Value ? u.valueObject.toObject : t.getVariable(u.name).toObject) : c.keyTo = u.initBy == l.Value ? u.valueObject.toObject.toString() : t.getVariable(u.name).toObject.toString()), c.basicType, c.type, i[a.toString()] = c, a++
                        }
                    }
                    if (a > 0) {
                        for (var P in n)
                            for (var x in i) i[x].name == P && (i[x].binding = !0);
                        return i
                    }
                    return null
                }, t
            }();
        t.StiVariablesHelper = x
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(t) {
        var r = e.System.Drawing.Color,
            o = e.Report.Export.StiHtmlExportMode,
            i = function() {
                function e() {
                    this.backgroundColor = r.white, this.pageBorderColor = r.gray, this.rightToLeft = !1, this.fullScreenMode = !1, this.scrollbarsMode = !1, this.openLinksWindow = "_blank", this.openExportedReportWindow = "_blank", this.showTooltips = !0, this.showTooltipsHelp = !0, this.pageAlignment = t.StiContentAlignment.Center, this.showPageShadow = !0, this.bookmarksPrint = !1, this.bookmarksTreeWidth = 180, this.parametersPanelPosition = t.StiParametersPanelPosition.Top, this.parametersPanelMaxHeight = 300, this.parametersPanelColumnsCount = 2, this.parametersPanelDateFormat = String.empty, this.interfaceType = t.StiInterfaceType.Auto, this.chartRenderType = t.StiChartRenderType.AnimatedVector, this.reportDisplayMode = o.Table, this.datePickerFirstDayOfWeek = t.StiFirstDayOfWeek.Monday, this.allowTouchZoom = !0, this.htmlRenderMode = o.Table
                }
                return e
            }();
        t.StiAppearanceOptions = i
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e() {
                this.showEmailDialog = !0, this.showExportDialog = !0, this.defaultEmailAddress = "", this.defaultEmailSubject = "", this.defaultEmailMessage = ""
            }
            return e
        }();
        e.StiEmailOptions = t
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e() {
                this.storeExportSettings = !0, this.showExportDialog = !0, this.showExportToDocument = !0, this.showExportToPdf = !0, this.showExportToXps = !1, this.showExportToPowerPoint = !1, this.showExportToHtml = !0, this.showExportToHtml5 = !0, this.showExportToMht = !1, this.showExportToText = !1, this.showExportToRtf = !1, this.showExportToWord2007 = !0, this.showExportToOpenDocumentWriter = !1, this.showExportToExcel = !1, this.showExportToExcelXml = !1, this.showExportToExcel2007 = !0, this.showExportToOpenDocumentCalc = !1, this.showExportToCsv = !0, this.showExportToDbf = !1, this.showExportToXml = !1, this.showExportToDif = !1, this.showExportToSylk = !1, this.showExportToImageBmp = !1, this.showExportToImageGif = !1, this.showExportToImageJpeg = !1, this.showExportToImagePcx = !1, this.showExportToImagePng = !1, this.showExportToImageTiff = !1, this.showExportToImageMetafile = !1, this.showExportToImageSvg = !1, this.showExportToImageSvgz = !1
            }
            return e
        }();
        e.StiExportsOptions = t
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(t) {
        var r = e.System.Drawing.Color,
            o = function() {
                function o() {
                    this.visible = !0, this.displayMode = t.StiToolbarDisplayMode.Simple, this.backgroundColor = r.empty, this.borderColor = r.empty, this.fontColor = r.empty, this.fontFamily = "Arial", this.alignment = t.StiContentAlignment.Default, this.showButtonCaptions = !0, this.showPrintButton = !0, this.showOpenButton = !1, this.showSaveButton = !0, this.showSendEmailButton = !1, this.showFindButton = !0, this.showBookmarksButton = !0, this.showParametersButton = !0, this.showEditorButton = !0, this.showFullScreenButton = !0, this.showFirstPageButton = !0, this.showPreviousPageButton = !0, this.showCurrentPageControl = !0, this.showNextPageButton = !0, this.showLastPageButton = !0, this.showZoomButton = !0, this.showViewModeButton = !0, this.showDesignButton = !1, this.showAboutButton = !0, this.showPinToolbarButton = !0, this.printDestination = t.StiPrintDestination.Default, this.viewMode = t.StiWebViewMode.SinglePage, this.multiPageWidthCount = 2, this.multiPageHeightCount = 2, this._zoom = 100, this.menuAnimation = !0, this.showMenuMode = t.StiShowMenuMode.Click, this.autoHide = !1
                }
                return Object.defineProperty(o.prototype, "zoom", {
                    get: function() {
                        return this._zoom
                    },
                    set: function(t) {
                        t == e.Viewer.StiZoomMode.PageWidth || t == e.Viewer.StiZoomMode.PageHeight || t >= 10 && t <= 500 ? this._zoom = t : this._zoom = t > 500 ? 500 : t < 10 ? 10 : 100
                    },
                    enumerable: !0,
                    configurable: !0
                }), o
            }();
        t.StiToolbarOptions = o
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(e) {
            e[e.Left = 0] = "Left", e[e.Center = 1] = "Center", e[e.Right = 2] = "Right", e[e.Default = 3] = "Default"
        }(t = e.StiContentAlignment || (e.StiContentAlignment = {}));
        var r;
        ! function(e) {
            e[e.Auto = 0] = "Auto", e[e.Mouse = 1] = "Mouse", e[e.Touch = 2] = "Touch", e[e.Mobile = 3] = "Mobile"
        }(r = e.StiInterfaceType || (e.StiInterfaceType = {}));
        var o;
        ! function(e) {
            e[e.Vector = 2] = "Vector", e[e.AnimatedVector = 3] = "AnimatedVector"
        }(o = e.StiChartRenderType || (e.StiChartRenderType = {}));
        var i;
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Pdf = 1] = "Pdf", e[e.Direct = 2] = "Direct", e[e.WithPreview = 3] = "WithPreview"
        }(i = e.StiPrintDestination || (e.StiPrintDestination = {}));
        var n;
        ! function(e) {
            e[e.SinglePage = 0] = "SinglePage", e[e.Continuous = 1] = "Continuous", e[e.MultiplePages = 2] = "MultiplePages", e[e.OnePage = 3] = "OnePage", e[e.WholeReport = 4] = "WholeReport", e[e.MultiPage = 5] = "MultiPage"
        }(n = e.StiWebViewMode || (e.StiWebViewMode = {}));
        var a;
        ! function(e) {
            e[e.Click = 0] = "Click", e[e.Hover = 1] = "Hover"
        }(a = e.StiShowMenuMode || (e.StiShowMenuMode = {}));
        var s;
        ! function(e) {
            e[e.PageWidth = -1] = "PageWidth", e[e.PageHeight = -2] = "PageHeight"
        }(s = e.StiZoomMode || (e.StiZoomMode = {}));
        var l;
        ! function(e) {
            e[e.ExportReport = 1] = "ExportReport", e[e.SendEmail = 2] = "SendEmail"
        }(l = e.StiExportAction || (e.StiExportAction = {}));
        var p;
        ! function(e) {
            e[e.Monday = 0] = "Monday", e[e.Sunday = 1] = "Sunday"
        }(p = e.StiFirstDayOfWeek || (e.StiFirstDayOfWeek = {}));
        var g;
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.Left = 1] = "Left"
        }(g = e.StiParametersPanelPosition || (e.StiParametersPanelPosition = {}));
        var m;
        ! function(e) {
            e[e.Simple = 0] = "Simple", e[e.Separated = 1] = "Separated"
        }(m = e.StiToolbarDisplayMode || (e.StiToolbarDisplayMode = {}))
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e() {
                this.email = null, this.subject = null, this.message = null
            }
            return e
        }();
        e.StiEmailSettings = t
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(t) {
        var r = e.System.JSON2,
            o = e.Report.Export.StiCsvExportSettings,
            i = e.Report.Export.StiCsvExportService,
            n = e.Report.Export.StiHtmlChartType,
            a = e.Report.Export.StiWord2007ExportService,
            s = e.Report.Export.StiWord2007ExportSettings,
            l = e.System.Drawing.ColorTranslator,
            p = e.System.IO.TextWriter,
            g = e.Report.StiReport,
            m = e.Report.Export.StiHtmlExportService,
            u = e.Report.Export.StiHtmlTextWriter,
            c = e.Report.Export.StiHtmlExportSettings,
            d = e.Report.StiPagesRange,
            y = e.Report.StiRangeType,
            S = e.Report.Export.StiHtmlExportMode,
            h = e.Report.Export.StiHtmlExportQuality,
            f = e.Report.Export.StiHtmlExportBookmarksMode,
            v = e.Base.Drawing.StiBrush,
            w = e.Report.StiExportFormat,
            b = e.Base.StiGZipHelper,
            E = e.Report.Export.StiPdfExportSettings,
            P = e.Report.Export.StiPdfExportService,
            x = e.System.IO.MemoryStream,
            T = e.Report.Export.StiExcel2007ExportService,
            R = e.Report.Export.StiExcelExportSettings,
            D = e.System.Promise,
            V = function() {
                function V(e, r, o) {
                    this.drillDownReportCache = {}, this.onBeginProcessData = null, this.onEndProcessData = null, this.onPrintReport = null, this.onBeginExportReport = null, this.onEndExportReport = null, this.onInteraction = null, this.onEmailReport = null, this.onDesignReport = null, this.onShowReport = null, this.onLoadDocument = null, this.onGetReport = null, this.reportCache = {}, this._visible = !0, this._options = e || new t.StiViewerOptions, this._viewerId = r || "StiViewer", this._options.viewerId = this._viewerId, this._renderAfterCreate = void 0 === o || o, this._renderAfterCreate && this.renderHtml()
                }
                return Object.defineProperty(V.prototype, "viewerId", {
                    get: function() {
                        return this._viewerId
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(V.prototype, "options", {
                    get: function() {
                        return this._options
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(V.prototype, "jsObject", {
                    get: function() {
                        return this._jsObject
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(V.prototype, "currentReportGuid", {
                    get: function() {
                        return this._currentReportGuid
                    },
                    set: function(e) {
                        this._currentReportGuid = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(V.prototype, "reportTemplate", {
                    get: function() {
                        var e = this.currentReportGuid.split("|")[0];
                        return this.reportCache[e]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(V.prototype, "report", {
                    get: function() {
                        if (null == this.currentReportGuid) return null;
                        return this.reportCache[this.currentReportGuid]
                    },
                    set: function(e) {
                        this.currentReportGuid = null, this.reportCache = {}, null != e && (this.reportCache[e.reportGuid] = e, this.currentReportGuid = e.reportGuid), this.jsObject && this.jsObject.assignReport(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(V.prototype, "visible", {
                    get: function() {
                        return this._visible
                    },
                    set: function(e) {
                        this._visible = e, this._jsObject && (this._jsObject.controls.viewer.style.display = e ? String.empty : "none")
                    },
                    enumerable: !0,
                    configurable: !0
                }), V.prototype.renderHtml = function(n) {
                    n && "string" == typeof n && (n = document.getElementById(n));
                    var l = String.isNullOrEmpty(this.options.width) ? "100%" : this.options.width,
                        d = String.isNullOrEmpty(this.options.height) ? this.options.appearance.scrollbarsMode ? "600px" : "100%" : this.options.height,
                        y = String.stiFormat("#{0:X2}{1:X2}{2:X2}", this.options.appearance.backgroundColor.r, this.options.appearance.backgroundColor.g, this.options.appearance.backgroundColor.b),
                        h = "<div style='width: " + l + "; height: " + d + "; background: " + y + ";";
                    this.visible || (h += " display: none;"), h += "' id='" + this.viewerId + "'><div id='" + this.viewerId + "_JsViewerMainPanel' class='stiJsViewerMainPanel'></div></div>", n && void 0 !== n.innerHTML ? n.innerHTML = h : document.write(h), String.isNullOrEmpty(this.options.width) && (this.options.width = "100%"), String.isNullOrEmpty(this.options.height) && (this.options.height = this.options.appearance.fullScreenMode ? "650px" : "100%"), this.options.appearance.reportDisplayMode == S.Table && this.options.appearance.htmlRenderMode != S.Table && (this.options.appearance.reportDisplayMode = this.options.appearance.htmlRenderMode);
                    var f = this.options.toParameters();
                    if (f.loc = t.StiCollectionsHelper.GetLocalizationItems(), f.options.viewerHeightType = this.options.height.endsWith("%") ? "Percentage" : "Pixel", f.options.jsMode = !0, this._jsObject = new StiJsViewer(f), this._jsObject.viewer = this, this._jsObject.options.server.useCompression = !1, e.System.StiError.errorMessageForm = e.System.StiError.errorMessageForm || this.jsObject.controls.forms.errorMessageForm || this.jsObject.InitializeErrorMessageForm(), this.jsObject.assignReport = function(t) {
                            var r = this;
                            if (null != this.viewer.report && (this.viewer.report.onBeginProcessData = null, this.viewer.report.onEndProcessData = null), this.viewer.drillDownReportCache = {}, t) {
                                this.viewer.showProcessIndicator();
                                var o = this;
                                t.onBeginProcessData = function(e, t) {
                                    r.viewer.invokeBeginProcessData(e, t)
                                }, t.onEndProcessData = function(e) {
                                    r.viewer.invokeEndProcessData(e)
                                };
                                var i = function() {
                                    r.options.isParametersReceived = !1, r.options.paramsVariables = null, r.controls.drillDownPanel.reset(), r.reportParams.bookmarksContent = null, r.InitializeBookmarksPanel(), setTimeout(function() {
                                        r.reportParams.reportGuid = t.reportGuid, r.reportParams.paramsGuid = null, r.reportParams.drillDownGuid = null, r.reportParams.drillDownParameters = [], r.reportParams.pageNumber = 0, r.reportParams.pagesCount = t.renderedPages.count, r.reportParams.zoom != e.Viewer.StiZoomMode.PageWidth && r.reportParams.zoom != e.Viewer.StiZoomMode.PageHeight || (r.reportParams.autoZoom = r.options.toolbar.zoom, r.reportParams.zoom = 100), r.postAction(null)
                                    }, 50)
                                };
                                this.viewer.invokeLoadDocument(function() {
                                    t.isRendered ? i() : t.renderAsync(function() {
                                        i()
                                    })
                                })
                            }
                        }, this.jsObject.getReportParameters = function(e) {
                            null != this.viewer.report && (this.viewer.currentReportGuid = String.isNullOrEmpty(e.reportGuid) ? this.viewer.report.reportGuid : e.reportGuid, String.isNullOrEmpty(e.drillDownGuid) || (this.viewer.currentReportGuid += "|" + e.drillDownGuid), t.StiEditableFieldsHelper.applyEditableFieldsToReport(this.viewer.report, e.editableParameters), "DrillDown" == e.action && (e.pageNumber = 0), "Variables" != e.action && "Collapsing" != e.action || (e.pageNumber = Math.min(e.pageNumber, this.viewer.report.renderedPages.count - 1)));
                            var r = {};
                            return r.action = e.action, r.pagesArray = this.viewer.getPagesArray(this.viewer.report, {
                                viewMode: e.viewMode,
                                multiPageWidthCount: e.multiPageWidthCount,
                                multiPageHeightCount: e.multiPageHeightCount,
                                multiPageContainerWidth: e.multiPageContainerWidth,
                                multiPageContainerHeight: e.multiPageContainerHeight,
                                multiPageMargins: e.multiPageMargins,
                                pageNumber: e.pageNumber,
                                zoom: e.zoom,
                                openLinksTarget: this.options.appearance.openLinksTarget
                            }, e), "GetPages" != e.action && (r.pagesCount = 0, null != this.viewer.report && (r.reportGuid = this.viewer.report.reportGuid, r.isEditableReport = t.StiEditableFieldsHelper.checkEditableReport(this.viewer.report), r.pagesCount = this.viewer.report.renderedPages.count, r.reportFileName = this.viewer.getReportFileName(), r.interactionCollapsingStates = this.viewer.report.interactionCollapsingStates), r.paramsGuid = e.paramsGuid, r.drillDownGuid = e.drillDownGuid, r.zoom = e.zoom, r.viewMode = e.viewMode, "DrillDown" == e.action && (r.drillDownParameters = e.drillDownParameters), null != this.viewer.report && null != this.viewer.report.bookmark && this.viewer.report.bookmark.bookmarks.count > 0 && (r.bookmarksContent = t.StiReportHelper.getBookmarksContent(this.viewer.report, e.viewerId, "SinglePage" == e.viewMode ? e.pageNumber : -1))), r
                        }, this.jsObject.postAjax = function(t, r, o) {
                            var i = this,
                                n = this.createPostParameters(r, !0),
                                a = e.System.Convert.fromBase64StringText(n.stiweb_parameters),
                                s = JSON.parse(a);
                            s.action = n.stiweb_action;
                            var l = this.getReportParameters(s);
                            setTimeout(function() {
                                i.viewer.invokeShowReport(), i.showReportPage(l, i)
                            }, 50)
                        }, this.jsObject.postDesign = function() {
                            this.viewer.showProcessIndicator(), this.viewer.invokeDesignReport(), this.viewer.hideProcessIndicator()
                        }, this.jsObject.postEmail = function(e, r) {
                            this.postExport(e, r, t.StiExportAction.SendEmail)
                        }, this.jsObject.postOpen = function(t, r) {
                            var o = this,
                                i = function(t, r) {
                                    setTimeout(function() {
                                        o.viewer.showProcessIndicator()
                                    }, 50);
                                    var t = t.substring(t.indexOf("base64,") + "base64,".length),
                                        i = e.System.Convert.fromBase64String(t),
                                        n = new g;
                                    null != r ? n.loadEncryptedDocument(i, r) : n.loadDocument(i), o.viewer.report = n
                                };
                            if (t && t.toLowerCase().indexOf(".mdx") >= 0) {
                                this.InitializePasswordForm().show(function(e) {
                                    i(r, e)
                                }, this.collections.loc.PasswordEnter + ":")
                            } else i(r, null)
                        }, this.jsObject.postExport = function(n, l, g) {
                            var d = w[n],
                                y = null;
                            g == t.StiExportAction.SendEmail && (y = new t.StiEmailSettings, y.email = l.Email, y.message = l.Message, y.subject = l.Subject);
                            var S = this.viewer,
                                h = S.getReportFileName();
                            switch (S.jsObject.reportParams.editableParameters && t.StiEditableFieldsHelper.applyEditableFieldsToReport(S.report, S.jsObject.reportParams.editableParameters), d) {
                                case w.Document:
                                    var f = function(t) {
                                            var r = S.report.saveDocumentToJsonString();
                                            if (t = S.invokeEndExportReport(d, t.fileName, t.openAfterExport, r), t.preventDefault) return;
                                            if ("Mdz" == l.Format) {
                                                var o = b.pack(e.System.Text.Encoding.UTF8.getBytes(r));
                                                Object.saveAs(o, t.fileName + ".mdz")
                                            } else if ("Mdx" == l.Format) {
                                                var o = S.report.saveEncryptedDocumentToByteArray(l.Password);
                                                Object.saveAs(o, t.fileName + ".mdx")
                                            } else Object.saveAs(r, t.fileName + ".mdc", "application/json;charset=utf-8")
                                        },
                                        v = S.invokeBeginExportReport(null, d, h, !1, f);
                                    if (v.preventDefault) return void S.hideProcessIndicator();
                                    1 != v.async && f(v);
                                    break;
                                case w.Html:
                                    var f = function(e) {
                                            var o = new m,
                                                i = new p,
                                                n = new u(i),
                                                a = null;
                                            e.settings && e.settings.sti_is(c) ? a = e.settings : (a = new c, r.stiPopulateObject(e.settings, a)), o.exportToAsync(function() {
                                                var r = i.getStringBuilder().toString();
                                                if (g == t.StiExportAction.SendEmail) return void S.invokeEmailReport(y, d, e.fileName, r);
                                                if (e = S.invokeEndExportReport(d, e.fileName, e.openAfterExport, r), e.preventDefault) return;
                                                Object.saveAs(r, e.fileName + ".html", "text/html;charset=utf-8")
                                            }, S.report, n, a)
                                        },
                                        D = 1 == l.OpenAfterExport,
                                        V = new c;
                                    V.useWatermarkMargins = !1, V.exportMode = S.options.appearance.reportDisplayMode, t.StiExportsHelper.applyExportSettings(d, l, V);
                                    var v = S.invokeBeginExportReport(V, d, h, D, f);
                                    if (v.preventDefault) return void S.hideProcessIndicator();
                                    1 != v.async && f(v);
                                    break;
                                case w.Html5:
                                    var f = function(e) {
                                            var o = new m,
                                                i = new p,
                                                n = new u(i),
                                                a = null;
                                            e.settings && e.settings.sti_is(c) ? a = e.settings : (a = new c, r.stiPopulateObject(e.settings, a)), o.exportToAsync(function() {
                                                var r = i.getStringBuilder().toString();
                                                if (g == t.StiExportAction.SendEmail) return void S.invokeEmailReport(y, d, e.fileName, r);
                                                if (e = S.invokeEndExportReport(d, e.fileName, e.openAfterExport, r), e.preventDefault) return;
                                                Object.saveAs(r, e.fileName + ".html", "text/html;charset=utf-8")
                                            }, S.report, n, a)
                                        },
                                        D = 1 == l.OpenAfterExport,
                                        V = new c;
                                    t.StiExportsHelper.applyExportSettings(d, l, V);
                                    var v = S.invokeBeginExportReport(V, d, h, D, f);
                                    if (v.preventDefault) return void S.hideProcessIndicator();
                                    1 != v.async && f(v);
                                    break;
                                case w.Pdf:
                                    var f = function(e) {
                                            var o = new P,
                                                i = new x,
                                                n = null;
                                            e.settings && e.settings.sti_is(E) ? n = e.settings : (n = new E, r.stiPopulateObject(e.settings, n)), o.exportToAsync(function() {
                                                var r = i.toArray();
                                                if (g == t.StiExportAction.SendEmail) return void S.invokeEmailReport(y, d, e.fileName, r);
                                                if (e = S.invokeEndExportReport(d, e.fileName, e.openAfterExport, r), e.preventDefault) return;
                                                Object.saveAs(r, e.fileName + ".pdf", "application/pdf")
                                            }, S.report, i, n)
                                        },
                                        D = 1 == l.OpenAfterExport,
                                        V = new E;
                                    t.StiExportsHelper.applyExportSettings(d, l, V);
                                    var v = S.invokeBeginExportReport(V, d, h, D, f);
                                    if (v.preventDefault) return void S.hideProcessIndicator();
                                    1 != v.async && f(v);
                                    break;
                                case w.Excel2007:
                                    var f = function(e) {
                                            var o = new T,
                                                i = new x,
                                                n = null;
                                            e.settings && e.settings.sti_is(R) ? n = e.settings : (n = new R, r.stiPopulateObject(e.settings, n)), o.exportToAsync(function() {
                                                var r = i.toArray();
                                                if (g == t.StiExportAction.SendEmail) return void S.invokeEmailReport(y, d, e.fileName, r);
                                                if (e = S.invokeEndExportReport(d, e.fileName, e.openAfterExport, r), e.preventDefault) return;
                                                Object.saveAs(r, e.fileName + ".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
                                            }, S.report, i, n)
                                        },
                                        V = new R;
                                    t.StiExportsHelper.applyExportSettings(d, l, V);
                                    var v = S.invokeBeginExportReport(V, d, h, !1, f);
                                    if (v.preventDefault) return void S.hideProcessIndicator();
                                    1 != v.async && f(v);
                                    break;
                                case w.Word2007:
                                    var f = function(e) {
                                            var o = new a,
                                                i = new x,
                                                n = null;
                                            e.settings && e.settings.sti_is(s) ? n = e.settings : (n = new s, r.stiPopulateObject(e.settings, n)), o.exportToAsync(function() {
                                                var r = i.toArray();
                                                if (g == t.StiExportAction.SendEmail) return void S.invokeEmailReport(y, d, e.fileName, r);
                                                if (e = S.invokeEndExportReport(d, e.fileName, e.openAfterExport, r), e.preventDefault) return;
                                                Object.saveAs(r, e.fileName + ".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
                                            }, S.report, i, n)
                                        },
                                        V = new s;
                                    t.StiExportsHelper.applyExportSettings(d, l, V);
                                    var v = S.invokeBeginExportReport(V, d, h, !1, f);
                                    if (v.preventDefault) return void S.hideProcessIndicator();
                                    1 != v.async && f(v);
                                    break;
                                case w.Csv:
                                    var f = function(e) {
                                            var n = new i,
                                                a = new x,
                                                s = null;
                                            e.settings && e.settings.sti_is(o) ? s = e.settings : (s = new o, r.stiPopulateObject(e.settings, s)), n.exportToAsync(function() {
                                                var r = a.toArray();
                                                if (g == t.StiExportAction.SendEmail) return void S.invokeEmailReport(y, d, e.fileName, r);
                                                if (e = S.invokeEndExportReport(d, e.fileName, e.openAfterExport, r), e.preventDefault) return;
                                                Object.saveAs(r, e.fileName + ".csv", "text/csv")
                                            }, S.report, a, s)
                                        },
                                        V = new o;
                                    t.StiExportsHelper.applyExportSettings(d, l, V);
                                    var v = S.invokeBeginExportReport(V, d, h, !1, f);
                                    if (v.preventDefault) return void S.hideProcessIndicator();
                                    1 != v.async && f(v);
                                    break
                            }
                        }, this.jsObject.postPrint = function(e) {
                            var r = this.viewer,
                                o = r.invokePrintReport(e);
                            if (null == o || !o.preventDefault) {
                                var i = r.report;
                                switch (null != o && (i = o.report), r.jsObject.reportParams.editableParameters && t.StiEditableFieldsHelper.applyEditableFieldsToReport(i, r.jsObject.reportParams.editableParameters), e) {
                                    case "PrintPdf":
                                        i.printToPdf(null);
                                        break;
                                    case "PrintWithPreview":
                                        var n = new c,
                                            a = new m,
                                            s = new p,
                                            l = new u(s);
                                        n.exportMode = r.options.appearance.reportDisplayMode, n.useWatermarkMargins = !1, n.removeEmptySpaceAtBottom = !1, a.exportToAsync(function() {
                                            var e = s.getStringBuilder().toString(),
                                                t = new Blob([e], {
                                                    type: "text/html"
                                                });
                                            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                                                var o = r.getReportFileName();
                                                window.navigator.msSaveOrOpenBlob(t, o + ".html")
                                            } else {
                                                var i = URL.createObjectURL(t);
                                                window.open(i)
                                            }
                                        }, i, l, n);
                                        break;
                                    case "PrintWithoutPreview":
                                        i.print(null, r.options.appearance.reportDisplayMode);
                                        break
                                }
                            }
                        }, this.jsObject.postInteraction = function(e) {
                            var r = this.viewer,
                                o = r.report,
                                i = null;
                            if (null != o) {
                                if ("InitVars" == e.action) {
                                    e.variables && t.StiVariablesHelper.applyReportBindingVariables(r.report, e.variables);
                                    var n = r.report.isDocument ? null : t.StiVariablesHelper.getVariables(r.report, e.variables);
                                    this.showParametersPanel(n, this)
                                }
                                "Variables" == e.action && (r.showProcessIndicator(), i = function(i) {
                                    t.StiVariablesHelper.applyReportParameters(o, i.variables), o.isRendered || o.renderAsync(function() {
                                        return r.jsObject.postAjax(null, e)
                                    })
                                }), "Sorting" == e.action ? (r.showProcessIndicator(), i = function(i) {
                                    t.StiVariablesHelper.applyReportParameters(o, i.variables), t.StiReportHelper.applySorting(o, i.sortingParameters), o.isRendered || o.renderAsync(function() {
                                        return r.jsObject.postAjax(null, e)
                                    })
                                }) : "Collapsing" == e.action && (r.showProcessIndicator(), i = function(i) {
                                    t.StiVariablesHelper.applyReportParameters(o, i.variables), t.StiReportHelper.applyCollapsing(o, i.collapsingParameters), o.isRendered || o.renderAsync(function() {
                                        return r.jsObject.postAjax(null, e)
                                    })
                                }), "DrillDown" == e.action && (r.showProcessIndicator(), e.drillDownParameters = this.reportParams.drillDownParameters.concat(e.drillDownParameters), e.drillDownGuid = hex_md5(JSON.stringify(e.drillDownParameters)), i = function(o) {
                                    var i = t.StiReportHelper.cloneReport(r.reportTemplate),
                                        n = r.report,
                                        a = 0,
                                        s = function() {
                                            n = t.StiReportHelper.applyDrillDown(i, n, o.drillDownParameters[a]), n.isRendered = !1, n.isInteractionRendering = !0, n.renderAsync(function() {
                                                n.isInteractionRendering = !1, a < o.drillDownParameters.length - 1 ? (a++, s()) : (r.reportCache[n.reportGuid + "|" + e.drillDownGuid] = n, r.jsObject.postAjax(null, e))
                                            })
                                        };
                                    s()
                                }), null != i && r.invokeInteraction(e.action, e.variables, e.sortingParameters, e.collapsingParameters, e.drillDownParameters, i)
                            }
                        }, this._renderAfterCreate || this.jsObject.assignReport(this.report), !this.report) {
                        var v = this;
                        setTimeout(function() {
                            v.invokeGetReport()
                        })
                    }
                }, V.prototype.invokeBeginProcessData = function(e, t) {
                    this.onBeginProcessData && this.onBeginProcessData.sti_is(Function) && (e.sender = "Viewer", this.onBeginProcessData(e, t))
                }, V.prototype.invokeEndProcessData = function(e) {
                    this.onEndProcessData && this.onEndProcessData.sti_is(Function) && (e.sender = "Viewer", this.onEndProcessData(e))
                }, V.prototype.invokePrintReport = function(e) {
                    if (this.onPrintReport && this.onPrintReport.sti_is(Function)) {
                        var t = {
                            sender: "Viewer",
                            event: "PrintReport",
                            preventDefault: !1,
                            fileName: this.getReportFileName(),
                            printAction: e,
                            report: this.report
                        };
                        return this.onPrintReport(t), t
                    }
                    return null
                }, V.prototype.invokeBeginExportReport = function(e, t, r, o, i) {
                    this.showProcessIndicator();
                    var n = {
                        sender: "Viewer",
                        event: "BeginExportReport",
                        preventDefault: !1,
                        async: !1,
                        settings: e,
                        format: w[t],
                        fileName: r,
                        openAfterExport: o
                    };
                    return this.onBeginExportReport && this.onBeginExportReport.sti_is(Function) && this.onBeginExportReport(n, i), n
                }, V.prototype.invokeEndExportReport = function(e, t, r, o) {
                    this.hideProcessIndicator();
                    var i = {
                        sender: "Viewer",
                        event: "EndExportReport",
                        preventDefault: !1,
                        format: w[e],
                        fileName: t,
                        openAfterExport: r,
                        data: o
                    };
                    return this.onEndExportReport && this.onEndExportReport.sti_is(Function) && this.onEndExportReport(i), i
                }, V.prototype.invokeInteraction = function(e, t, r, o, i, n) {
                    this.showProcessIndicator();
                    var a = {
                        sender: "Viewer",
                        event: "Interaction",
                        async: !1,
                        action: e,
                        variables: t,
                        sortingParameters: r,
                        collapsingParameters: o,
                        drillDownParameters: i
                    };
                    return this.onInteraction && this.onInteraction.sti_is(Function) && this.onInteraction(a, n), 0 == a.async && n && setTimeout(function() {
                        return n(a)
                    }, 50), a
                }, V.prototype.invokeEmailReport = function(e, t, r, o) {
                    if (this.hideProcessIndicator(), this.onEmailReport && this.onEmailReport.sti_is(Function)) {
                        var i = {
                            sender: "Viewer",
                            event: "EmailReport",
                            settings: e,
                            format: w[t],
                            fileName: r,
                            data: o
                        };
                        this.onEmailReport(i)
                    }
                }, V.prototype.invokeDesignReport = function() {
                    if (this.onDesignReport && this.onDesignReport.sti_is(Function)) {
                        var e = {
                            sender: "Viewer",
                            event: "DesignReport",
                            fileName: this.getReportFileName(),
                            report: this.report
                        };
                        this.onDesignReport(e)
                    }
                }, V.prototype.invokeShowReport = function() {
                    if (this.onShowReport && this.onShowReport.sti_is(Function)) {
                        var e = {
                            sender: "Viewer",
                            event: "ShowReport",
                            report: this.report
                        };
                        this.onShowReport(e)
                    }
                }, V.prototype.invokeLoadDocument = function(e) {
                    var t = {
                        sender: "Viewer",
                        event: "LoadReport",
                        report: this.report,
                        async: !1
                    };
                    this.onLoadDocument && this.onLoadDocument.sti_is(Function) && this.onLoadDocument(t, e), 0 == t.async && setTimeout(function() {
                        return e()
                    }, 50)
                }, V.prototype.invokeGetReport = function() {
                    var e = {
                        report: null
                    };
                    this.onGetReport && this.onGetReport.sti_is(Function) && (this.showProcessIndicator(), this.onGetReport(e), e.report && e.report.sti_is(g) ? this.report = e.report : this.hideProcessIndicator())
                }, V.prototype.callRemoteApi = function(t, r) {
                    void 0 === r && (r = 0);
                    var o = new D;
                    try {
                        var i = new XMLHttpRequest;
                        i.open("post", StiOptions.WebServer.url, !0), i.timeout = r > 0 ? r : StiOptions.WebServer.timeout, i.onload = function() {
                            if (200 == i.status) {
                                var e = i.responseText;
                                i.abort(), o.callTry(e)
                            }
                        }, i.onerror = function(e) {
                            o.callCatch("Connect to remote error: [" + i.status + "] " + i.statusText)
                        }, i.send(JSON.stringify(t))
                    } catch (t) {
                        e.System.StiError.showError(t, !1), o.callCatch(t.message)
                    }
                    return o.catch(function(e) {
                        i && i.abort()
                    }), o
                }, V.prototype.getReportPage = function(e, r, o, i, a) {
                    var s = new c;
                    switch (s.pageRange = new d(y.CurrentPage, "", o), s.zoom = i, s.exportMode = this.options.appearance.reportDisplayMode, s.exportQuality = h.High, s.exportBookmarksMode = f.ReportOnly, s.removeEmptySpaceAtBottom = !1, s.openLinksTarget = a, s.useWatermarkMargins = !0, this.options.appearance.chartRenderType) {
                        case t.StiChartRenderType.AnimatedVector:
                            s.chartType = n.AnimatedVector;
                            break;
                        case t.StiChartRenderType.Vector:
                            s.chartType = n.Vector;
                            break
                    }
                    var g = new p,
                        m = new u(g);
                    r.exportTo(e, m, s);
                    var S = g.getStringBuilder().toString(),
                        w = {};
                    w.content = S;
                    var b = e.renderedPages.getByIndex(o);
                    if (!b) return null;
                    return w.margins = String.stiFormat("{0}px {1}px {2}px {3}px", Math.round(e.unit.convertToHInches(b.margins.top) * i), Math.round(e.unit.convertToHInches(b.margins.right) * i), Math.round(e.unit.convertToHInches(b.margins.bottom) * i), Math.round(e.unit.convertToHInches(b.margins.left) * i)), w.sizes = String.stiFormat("{0};{1}", Math.round(e.unit.convertToHInches(b.pageWidth) * i), Math.round(e.unit.convertToHInches(b.pageHeight) * i)), w.background = l.toHtml(v.toColor(b.brush)), w
                }, V.prototype.getPagesArray = function(e, t, r) {
                    if (null == e) return [];
                    var o = new m;
                    o.insertInteractionParameters = !0, o.renderAsDocument = this.options.appearance.reportDisplayMode != S.Table, o.styles = [], o.clearOnFinish = !1, o.renderStyles = !1, o.exportServiceId = this.viewerId;
                    var i = String.empty,
                        n = String.empty,
                        a = String.empty,
                        s = String.empty,
                        l = [];
                    if ("SinglePage" == t.viewMode) {
                        var g = this.getReportPage(e, o, t.pageNumber, t.zoom / 100, t.openLinksTarget);
                        l.add(g)
                    } else if ("MultiplePages" == t.viewMode || "Continuous" == t.viewMode)
                        for (var c = 0; c < e.renderedPages.count; c++) {
                            var g = this.getReportPage(e, o, c, t.zoom / 100, t.openLinksTarget);
                            l.add(g)
                        } else if ("MultiPage" == t.viewMode) {
                            var d = t.multiPageWidthCount,
                                y = t.multiPageHeightCount;
                            null == d && (d = 1), null == y && (y = 1);
                            for (var h = [], f = Math.min(t.pageNumber + d * y, t.pageNumber + e.renderedPages.count), c = 0; c < f; c++) {
                                var v = void 0;
                                null != h[h.length - 1] && h[h.length - 1].length < d ? v = h[h.length - 1] : (v = [], h.add(v)), v.add({
                                    pageWidth: e.unit.convertToHInches(e.renderedPages.getByIndex(c).pageWidth),
                                    pageHeight: e.unit.convertToHInches(e.renderedPages.getByIndex(c).pageHeight)
                                })
                            }
                            for (var w = 0, b = 0, E = 0, P = h; E < P.length; E++) {
                                for (var v = P[E], x = 0, T = 0, R = 0, D = v; R < D.length; R++) {
                                    var V = D[R];
                                    x += t.multiPageMargins, x += V.pageWidth, x += t.multiPageMargins, T = Math.max(V.pageHeight, T)
                                }
                                w = Math.max(x, w), b += t.multiPageMargins, b += T, b += t.multiPageMargins
                            }
                            var A = t.multiPageContainerWidth / w,
                                k = t.multiPageContainerHeight / b,
                                C = Math.trunc(100 * Math.min(A, k)) / 100 - .05;
                            null == C && (C = 1), r.zoom = Math.round(100 * C);
                            for (var c = 0; c < e.renderedPages.count; c++) {
                                var g = this.getReportPage(e, o, c, C, t.openLinksTarget);
                                l.add(g)
                            }
                        }
                    var I = new p,
                        F = new u(I);
                    o.htmlWriter = F, null != o.tableRender && o.tableRender.renderStylesTable2(!0, !1, !1, null);
                    var M = I.getStringBuilder().toString();
                    l.add(M);
                    var O = o.getChartScript();
                    return l.add(O), o.clear(), l
                }, V.prototype.getReportFileName = function() {
                    var e = null == this.report.reportAlias || 0 == this.report.reportAlias.trim().length ? this.report.reportName : this.report.reportAlias;
                    return null != e && 0 != e.trim().length || (e = null != this.report.reportFile && this.report.reportFile.trim().length > 0 ? this.report.reportFile.replaceAll(".mrt", "").replaceAll(".mrz", "").replaceAll(".mrx", "").replaceAll(".mdc", "").replaceAll(".mdz", "").replaceAll(".mdx", "") : "Report"), e = e.replace(/\\/, "/"), e.substr(e.lastIndexOf("/") + 1)
                }, V.prototype.showProcessIndicator = function() {
                    this.jsObject && this.jsObject.controls.processImage.show()
                }, V.prototype.hideProcessIndicator = function() {
                    this.jsObject && this.jsObject.controls.processImage.hide()
                }, V
            }();
        t.StiViewer = V
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));
var Stimulsoft;
! function(e) {
    var t;
    ! function(t) {
        var r = e.System.Drawing.Color,
            o = function() {
                function o() {
                    this.appearance = new t.StiAppearanceOptions, this.toolbar = new t.StiToolbarOptions, this.exports = new t.StiExportsOptions, this.email = new t.StiEmailOptions, this.width = "100%", this.height = String.empty, this.viewerId = String.empty, this.reportDesignerMode = !1, this.requestStylesUrl = String.empty, this.productVersion = e.StiVersion.version + " from " + e.StiVersion.created.toString("dd MMMM yyyy"), this.actions = {
                        exportReport: t.StiExportAction.ExportReport,
                        emailReport: t.StiExportAction.SendEmail
                    }
                }
                return o.prototype.toParameters = function() {
                    var e = {};
                    return this.serializeObject(this, e), {
                        options: e
                    }
                }, o.prototype.serializeObject = function(e, i) {
                    for (var n in e)
                        if ("object" == typeof e[n])
                            if (e[n].sti_is(r)) {
                                var a = e[n];
                                a.isNamedColor ? i[n] = a.name : i[n] = String.stiFormat("#{0:X2}{1:X2}{2:X2}", a.r, a.g, a.b)
                            } else i[n] = {}, this.serializeObject(e[n], i[n]);
                    else {
                        if (e.sti_is(o) && ("width" == n || "height" == n)) continue;
                        i[n] = e[n], e.sti_is(t.StiAppearanceOptions) && ("pageAlignment" == n ? i[n] = t.StiContentAlignment[e[n]] : "interfaceType" == n ? i[n] = t.StiInterfaceType[e[n]] : "chartRenderType" == n ? i[n] = t.StiChartRenderType[e[n]] : "datePickerFirstDayOfWeek" == n ? i[n] = t.StiFirstDayOfWeek[e[n]] : "parametersPanelPosition" == n && (i[n] = t.StiParametersPanelPosition[e[n]])), e.sti_is(t.StiToolbarOptions) && ("alignment" == n ? i[n] = t.StiContentAlignment[e[n]] : "printDestination" == n ? i[n] = t.StiPrintDestination[e[n]] : "viewMode" == n ? i[n] = t.StiWebViewMode[e[n]] : "showMenuMode" == n ? i[n] = t.StiWebViewMode[e[n]] : "displayMode" == n && (i[n] = t.StiToolbarDisplayMode[e[n]]))
                    }
                }, o
            }();
        t.StiViewerOptions = o
    }(t = e.Viewer || (e.Viewer = {}))
}(Stimulsoft || (Stimulsoft = {}));;