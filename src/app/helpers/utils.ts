import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    TSauthLogado = '';
    TSauthSessaoExpirada = '';
    TSauthInvalido = '';
    TSauthDeslogado = '';
    TSauthEmailenviado = '';
    TSauthAlterado = '';

    TSdashVendas = '';
    TSdashAbaVendas = '';
    TSdashAbaMeta = '';
    TSdashAbaCancelamentos = '';

    TSEditUserCampo = '';
    TSEditUserCampoObrigatorio = '';
    TSEditUserCampoInvalido = '';

    TStitleTrainingsMaterial = '';
    TStitleTrainingsNovoTreina = '';
    TStitleTrainingsEstatistica = '';
    safeVendasTitle = '';
    barLineChartTitle = '';
    pieCancelInsuranceChartTitle = '';
    pieCancelCategoryChartTitle = '';
    TSRegisterClientTypPerson = '';
    barLineChartTitleSinist = '';
    pieClaimsCategoryChartTitle = '';
    pieClaimsInsuranceChartTitle = '';
    pieSalesCategoryChartTitle = '';
    pieSalesInsuranceChartTitle = '';
    barLineChartTitleVendasCom = '';

    ComercialDashboardSales = '';
    ComercialDashboardCancelled = '';
    ComercialDashboardAccident = '';
    ComercialNewGoalsListTit = '';

    cancellationCategoryTitle = '';
    cancellationSafeTitle = '';
    salesSafeTitle = '';
    salesCategoryTitle = '';

    AggregatorListId = '';
    AggregatorListPartName = '';
    AggregatorListCpfCnpj = '';
    AggregatorListEmail = '';
    AggregatorListStat = '';

    myPerformanceTitle = '';
    salesVolumeTitle = '';
    productCategoryTitle = '';
    insuranceSalesTitle = '';
    campgoalsTitle = '';
    performanceTitle = '';
    dashTitle = '';
    campanhasTitle = '';
    listaCampTitle = '';
    novaCampTitle = '';
    metasTitle = '';
    goalsListTitle = '';
    personalGoalsTitle = '';
    partnerGoalsTitle = '';

    AggregTitleList = '';
    AggregMyGoals = '';
    AggregPartnGoals = '';

    AggregatorDashboardTitleSales = '';
    AggregatorDashboardTitleCanc = '';
    AggregatorDashboardComis = '';
    AggregatorDashboardGoals = '';
    AggregatorDashboardExtract = '';

    PartnerResultsTitle = '';
    AggregatorDashVolumeTitle = '';
    DistributionSecurityTitle = '';
    DistributionProductsTitle = '';

    comissaoVendaTitle = '';
    historySalesTriTitle = '';
    lossCommissionsTitle = '';

    AggregatorDashSaleInsurGoal = '';
    AggregatorDashGoalSaleCatProduct = '';
    ComercialInterestedPartnersCatSeguro = '';

    GeralTitle = '';
    PerforLojasTitle = '';

    MasterDealerTitle = '';
    MasterDealerStoreNewManager = ''
    ComercialNewGoalsListProf = '';
    ComercialHomeNovosParcNome = '';
    MasterDealerStore = '';

    MasterDealerMyStorTitle = '';
    MasterDealerStoreList = '';
    MasterDealerNewStore = '';

    MasterDealerListStoreName = '';
    MasterDealerProductsList = '';
    MasterDealerNewProduct = '';
    MasterDealerListImage = '';
    MasterDealerProdFilterBrand = '';
    MasterDealerProdFilterModel = '';
    MasterDealerListVersion = '';
    MasterDealerListValue = '';
    MasterDealerListCateg = '';
    MasterDealerListName = '';

    MasterDealerDashboardTitle = '';
    MasterDealerPayment = '';
    MasterDealerDashboardExtr = '';
    MasterDealerSalesFoll = '';
    MasterDealerSalesPerStore = '';
    MasterDealerStoreVsProd = '';

    MasterDealerDashboardSalesHist = '';
    MasterDealerDashCancelIns = '';
    MasterDealerDashboardPerfResel = '';

    AggregatorListType = '';
    ComercialNewCampNewDescr = '';
    ComercialNewGoalsListDtStart = '';
    ComercialNewGoalsListDtEnd = '';
    ComercialNewGoalsListIns = '';

    ManagerSellersTitle = '';
    ManagerSellerList = '';
    ManagerSellerNewSal = '';
    ManagerSellerStore = '';
    ManagerSellerPosition = '';
    ManagerDashPerformBySel = '';
    ManagerGoalsSellerRegis = '';
    ComercialAdvFilterMore = '';
    ComercialAdvFilterMenos = '';
    ComercialToastrState = '';
    ComercialToastrCity = '';
    ComercialToastrInsur = '';
    VendedorProdCatCancel = '';
    ComercialInterestedPartnersCidade = '';
    ComercialInterestedPartnersUf = '';
    ComercialInterestedPartnersRazSoc = '';
    ManagerFilterRegDate = '';
    vendProtectionDetailsTimelineTitle = '';

    constructor(
        private translateService: TranslateService) {
    }

    getauthLogado() {
        this.translateService.get('TSauthLogado').subscribe((TSauthLogado: any) => {
            this.TSauthLogado = TSauthLogado;
        });
        return this.TSauthLogado;
    }

    getauthInvalido() {
        this.translateService.get('TSauthInvalido').subscribe((TSauthInvalido: any) => {
            this.TSauthInvalido = TSauthInvalido;
        });
        return this.TSauthInvalido;
    }

    getauthSessaoExpirada() {
        this.translateService.get('TSauthSessaoExpirada').subscribe((TSauthSessaoExpirada: any) => {
            this.TSauthSessaoExpirada = TSauthSessaoExpirada;
        });
        return this.TSauthSessaoExpirada;
    }

    getauthDeslogado() {
        this.translateService.get('TSauthDeslogado').subscribe((TSauthDeslogado: any) => {
            this.TSauthDeslogado = TSauthDeslogado;
        });
        return this.TSauthDeslogado;
    }

    getauthEmailenviado() {
        this.translateService.get('TSauthEmailenviado').subscribe((TSauthEmailenviado: any) => {
            this.TSauthEmailenviado = TSauthEmailenviado;
        });
        return this.TSauthEmailenviado;
    }

    getauthAlterado() {
        this.translateService.get('TSauthAlterado').subscribe((TSauthAlterado: any) => {
            this.TSauthAlterado = TSauthAlterado;
        });
        return this.TSauthAlterado;
    }

    getTitleDash() {
        this.translateService.get('TSdashVendas').subscribe((TSdashVendas: any) => {
            this.TSdashVendas = TSdashVendas;
        });
        return this.TSdashVendas;
    }

    getAbaVendasDash() {
        this.translateService.get('TSdashAbaVendas').subscribe((TSdashAbaVendas: any) => {
            this.TSdashAbaVendas = TSdashAbaVendas;
        });
        return this.TSdashAbaVendas;
    }

    getAbaMetaDash() {
        this.translateService.get('TSdashAbaMeta').subscribe((TSdashAbaMeta: any) => {
            this.TSdashAbaMeta = TSdashAbaMeta;
        });
        return this.TSdashAbaMeta;
    }

    getAbaCancelamentosDash() {
        this.translateService.get('TSdashAbaCancelamentos').subscribe((TSdashAbaCancelamentos: any) => {
            this.TSdashAbaCancelamentos = TSdashAbaCancelamentos;
        });
        return this.TSdashAbaCancelamentos;
    }

    getEditUserCampo() {
        this.translateService.get('TSEditUserCampo').subscribe((TSEditUserCampo: any) => {
            this.TSEditUserCampo = TSEditUserCampo;
        });
        return this.TSEditUserCampo;
    }

    getEditUserCampoObrigatorio() {
        this.translateService.get('TSEditUserCampoObrigatorio').subscribe((TSEditUserCampoObrigatorio: any) => {
            this.TSEditUserCampoObrigatorio = TSEditUserCampoObrigatorio;
        });
        return this.TSEditUserCampoObrigatorio;
    }

    getEditUserCampoInvalido() {
        this.translateService.get('TSEditUserCampoInvalido').subscribe((TSEditUserCampoInvalido: any) => {
            this.TSEditUserCampoInvalido = TSEditUserCampoInvalido;
        });
        return this.TSEditUserCampoInvalido;
    }

    getTitleTrainingsMaterial() {
        this.translateService.get('TStitleTrainingsMaterial').subscribe((TStitleTrainingsMaterial: any) => {
            this.TStitleTrainingsMaterial = TStitleTrainingsMaterial;
        });
        return this.TStitleTrainingsMaterial;
    }

    getTitleTrainingsNovoTreina() {
        this.translateService.get('TStitleTrainingsNovoTreina').subscribe((TStitleTrainingsNovoTreina: any) => {
            this.TStitleTrainingsNovoTreina = TStitleTrainingsNovoTreina;
        });
        return this.TStitleTrainingsNovoTreina;
    }

    getTitleTrainingsEstatistica() {
        this.translateService.get('TStitleTrainingsEstatistica').subscribe((TStitleTrainingsEstatistica: any) => {
            this.TStitleTrainingsEstatistica = TStitleTrainingsEstatistica;
        });
        return this.TStitleTrainingsEstatistica;
    }

    getTypePerson() {
        this.translateService.get('TSRegisterClientTypPerson').subscribe((TSRegisterClientTypPerson: any) => {
            this.TSRegisterClientTypPerson = TSRegisterClientTypPerson;
        });
        return this.TSRegisterClientTypPerson;
    }
    getsafeVendasTitle() {
        this.translateService.get('safeVendasTitle').subscribe((safeVendasTitle: any) => {
            this.safeVendasTitle = safeVendasTitle;
        });
        return this.safeVendasTitle;
    }
    getbarLineChartTitle() {
        this.translateService.get('barLineChartTitle').subscribe((barLineChartTitle: any) => {
            this.barLineChartTitle = barLineChartTitle;
        });
        return this.barLineChartTitle;
    }
    getpieCancelInsuranceChartTitle() {
        this.translateService.get('pieCancelInsuranceChartTitle').subscribe((pieCancelInsuranceChartTitle: any) => {
            this.pieCancelInsuranceChartTitle = pieCancelInsuranceChartTitle;
        });
        return this.pieCancelInsuranceChartTitle;
    }
    getpieCancelCategoryChartTitle() {
        this.translateService.get('pieCancelCategoryChartTitle').subscribe((pieCancelCategoryChartTitle: any) => {
            this.pieCancelCategoryChartTitle = pieCancelCategoryChartTitle;
        });
        return this.pieCancelCategoryChartTitle;
    }
    getbarLineChartTitleSinist() {
        this.translateService.get('barLineChartTitleSinist').subscribe((barLineChartTitleSinist: any) => {
            this.barLineChartTitleSinist = barLineChartTitleSinist;
        });
        return this.barLineChartTitleSinist;
    }
    getpieClaimsInsuranceChartTitle() {
        this.translateService.get('pieClaimsInsuranceChartTitle').subscribe((pieClaimsInsuranceChartTitle: any) => {
            this.pieClaimsInsuranceChartTitle = pieClaimsInsuranceChartTitle;
        });
        return this.pieClaimsInsuranceChartTitle;
    }
    getpieClaimsCategoryChartTitle() {
        this.translateService.get('pieClaimsCategoryChartTitle').subscribe((pieClaimsCategoryChartTitle: any) => {
            this.pieClaimsCategoryChartTitle = pieClaimsCategoryChartTitle;
        });
        return this.pieClaimsCategoryChartTitle;
    }
    getpieSalesCategoryChartTitle() {
        this.translateService.get('pieSalesCategoryChartTitle').subscribe((pieSalesCategoryChartTitle: any) => {
            this.pieSalesCategoryChartTitle = pieSalesCategoryChartTitle;
        });
        return this.pieSalesCategoryChartTitle;
    }
    getpieSalesInsuranceChartTitle() {
        this.translateService.get('pieSalesInsuranceChartTitle').subscribe((pieSalesInsuranceChartTitle: any) => {
            this.pieSalesInsuranceChartTitle = pieSalesInsuranceChartTitle;
        });
        return this.pieSalesInsuranceChartTitle;
    }
    getbarLineChartTitleVendasCom() {
        this.translateService.get('barLineChartTitleVendasCom').subscribe((barLineChartTitleVendasCom: any) => {
            this.barLineChartTitleVendasCom = barLineChartTitleVendasCom;
        });
        return this.barLineChartTitleVendasCom;
    }

    getDashboardSales() {
        this.translateService.get('ComercialDashboardSales').subscribe((ComercialDashboardSales: any) => {
            this.ComercialDashboardSales = ComercialDashboardSales;
        })
        return this.ComercialDashboardSales;
    }
    getDashboardCancelled() {
        this.translateService.get('ComercialDashboardCancelled').subscribe((ComercialDashboardCancelled: any) => {
            this.ComercialDashboardCancelled = ComercialDashboardCancelled;
        })
        return this.ComercialDashboardCancelled;
    }
    getDashboardAccident() {
        this.translateService.get('ComercialDashboardAccident').subscribe((ComercialDashboardAccident: any) => {
            this.ComercialDashboardAccident = ComercialDashboardAccident;
        })
        return this.ComercialDashboardAccident;
    }

    getCancellationCategoryTitle() {
        this.translateService.get('cancellationCategoryTitle').subscribe((cancellationCategoryTitle: any) => {
            this.cancellationCategoryTitle = cancellationCategoryTitle;
        })
        return this.cancellationCategoryTitle;
    }

    getCancellationSafeTitle() {
        this.translateService.get('cancellationSafeTitle').subscribe((cancellationSafeTitle: any) => {
            this.cancellationSafeTitle = cancellationSafeTitle;
        })
        return this.cancellationSafeTitle;
    }

    getSalesSafeTitle() {
        this.translateService.get('salesSafeTitle').subscribe((salesSafeTitle: any) => {
            this.salesSafeTitle = salesSafeTitle;
        })
        return this.salesSafeTitle
    }

    getSalesCategoryTitle() {
        this.translateService.get('salesCategoryTitle').subscribe((salesCategoryTitle: any) => {
            this.salesCategoryTitle = salesCategoryTitle;
        })
        return this.salesCategoryTitle
    }

    getAggregatorListId() {
        this.translateService.get('AggregatorListId').subscribe((AggregatorListId: any) => {
            this.AggregatorListId = AggregatorListId;
        })
        return this.AggregatorListId;
    }
    getAggregatorListPartName() {
        this.translateService.get('AggregatorListPartName').subscribe((AggregatorListPartName: any) => {
            this.AggregatorListPartName = AggregatorListPartName;
        })
        return this.AggregatorListPartName;
    }
    getAggregatorListCpfCnpj() {
        this.translateService.get('AggregatorListCpfCnpj').subscribe((AggregatorListCpfCnpj: any) => {
            this.AggregatorListCpfCnpj = AggregatorListCpfCnpj
        })
        return this.AggregatorListCpfCnpj;
    }
    getAggregatorListEmail() {
        this.translateService.get('AggregatorListEmail').subscribe((AggregatorListEmail: any) => {
            this.AggregatorListEmail = AggregatorListEmail
        })
        return this.AggregatorListEmail;
    }
    getAggregatorListStat() {
        this.translateService.get('AggregatorListStat').subscribe((AggregatorListStat: any) => {
            this.AggregatorListStat = AggregatorListStat;
        })
        return this.AggregatorListStat;
    }
    getMyPerformanceTitle() {
        this.translateService.get('myPerformanceTitle').subscribe((myPerformanceTitle: any) => {
            this.myPerformanceTitle = myPerformanceTitle;
        })
        return this.myPerformanceTitle;
    }
    getSalesVolumeTitle() {
        this.translateService.get('salesVolumeTitle').subscribe((salesVolumeTitle: any) => {
            this.salesVolumeTitle = salesVolumeTitle;
        })
        return this.salesVolumeTitle;
    }
    getInsuranceSalesTitle() {
        this.translateService.get('insuranceSalesTitle').subscribe((insuranceSalesTitle: any) => {
            this.insuranceSalesTitle = insuranceSalesTitle;
        })
        return this.insuranceSalesTitle;
    }
    getProductCategoryTitle() {
        this.translateService.get('productCategoryTitle').subscribe((productCategoryTitle: any) => {
            this.productCategoryTitle = productCategoryTitle;
        })
        return this.productCategoryTitle;
    }
    getCampgoalsTitle() {
        this.translateService.get('campgoalsTitle').subscribe((campgoalsTitle: any) => {
            this.campgoalsTitle = campgoalsTitle;
        })
        return this.campgoalsTitle;
    }
    getPerformanceTitle() {
        this.translateService.get('performanceTitle').subscribe((performanceTitle: any) => {
            this.performanceTitle = performanceTitle;
        })
        return this.performanceTitle;
    }
    getDashTitle() {
        this.translateService.get('dashTitle').subscribe((dashTitle: any) => {
            this.dashTitle = dashTitle;
        })
        return this.dashTitle;
    }
    getCampanhasTitle() {
        this.translateService.get('campanhasTitle').subscribe((campanhasTitle: any) => {
            this.campanhasTitle = campanhasTitle;
        })
        return this.campanhasTitle;
    }
    getListaCampTitle() {
        this.translateService.get('listaCampTitle').subscribe((listaCampTitle: any) => {
            this.listaCampTitle = listaCampTitle;
        })
        return this.listaCampTitle;
    }
    getNovaCampTitle() {
        this.translateService.get('novaCampTitle').subscribe((novaCampTitle: any) => {
            this.novaCampTitle = novaCampTitle;
        })
        return this.novaCampTitle;
    }
    getMetasTitle() {
        this.translateService.get('metasTitle').subscribe((metasTitle: any) => {
            this.metasTitle = metasTitle;
        })
        return this.metasTitle;
    }
    getGoalsListTitle() {
        this.translateService.get('goalsListTitle').subscribe((goalsListTitle: any) => {
            this.goalsListTitle = goalsListTitle;
        })
        return this.goalsListTitle;
    }
    getPersonalGoalsTitle() {
        this.translateService.get('personalGoalsTitle').subscribe((personalGoalsTitle: any) => {
            this.personalGoalsTitle = personalGoalsTitle;
        })
        return this.personalGoalsTitle;
    }
    getPartnerGoalsTitle() {
        this.translateService.get('partnerGoalsTitle').subscribe((partnerGoalsTitle: any) => {
            this.partnerGoalsTitle = partnerGoalsTitle;
        })
        return this.partnerGoalsTitle;
    }

    getAggregTitleList() {
        this.translateService.get('AggregTitleList').subscribe((AggregTitleList: any) => {
            this.AggregTitleList = AggregTitleList;
        })
        return this.AggregTitleList;
    }
    getAggregMyGoals() {
        this.translateService.get('AggregMyGoals').subscribe((AggregMyGoals: any) => {
            this.AggregMyGoals = AggregMyGoals;
        })
        return this.AggregMyGoals;
    }
    getAggregPartnGoals() {
        this.translateService.get('AggregPartnGoals').subscribe((AggregPartnGoals: any) => {
            this.AggregPartnGoals = AggregPartnGoals;
        })
        return this.AggregPartnGoals;
    }

    getAggregatorDashboardTitleSales() {
        this.translateService.get('AggregatorDashboardTitleSales').subscribe((AggregatorDashboardTitleSales: any) => {
            this.AggregatorDashboardTitleSales = AggregatorDashboardTitleSales;
        })
        return this.AggregatorDashboardTitleSales;
    }
    getAggregatorDashboardTitleCanc() {
        this.translateService.get('AggregatorDashboardTitleCanc').subscribe((AggregatorDashboardTitleCanc: any) => {
            this.AggregatorDashboardTitleCanc = AggregatorDashboardTitleCanc;
        })
        return this.AggregatorDashboardTitleCanc;
    }
    getAggregatorDashboardComis() {
        this.translateService.get('AggregatorDashboardComis').subscribe((AggregatorDashboardComis: any) => {
            this.AggregatorDashboardComis = AggregatorDashboardComis;
        })
        return this.AggregatorDashboardComis;
    }
    getAggregatorDashboardGoals() {
        this.translateService.get('AggregatorDashboardGoals').subscribe((AggregatorDashboardGoals: any) => {
            this.AggregatorDashboardGoals = AggregatorDashboardGoals;
        })
        return this.AggregatorDashboardGoals;
    }
    getAggregatorDashboardExtract() {
        this.translateService.get('AggregatorDashboardExtract').subscribe((AggregatorDashboardExtract: any) => {
            this.AggregatorDashboardExtract = AggregatorDashboardExtract;
        })
        return this.AggregatorDashboardExtract;
    }

    getPartnerResultsTitle() {
        this.translateService.get('PartnerResultsTitle').subscribe((PartnerResultsTitle) => {
            this.PartnerResultsTitle = PartnerResultsTitle;
        })
        return this.PartnerResultsTitle
    }

    getAggregatorDashVolumeTitle() {
        this.translateService.get('AggregatorDashVolumeTitle').subscribe((AggregatorDashVolumeTitle) => {
            this.AggregatorDashVolumeTitle = AggregatorDashVolumeTitle;
        })
        return this.AggregatorDashVolumeTitle
    }

    getComissaoVendaTitle() {
        this.translateService.get('comissaoVendaTitle').subscribe((comissaoVendaTitle: any) => {
            this.comissaoVendaTitle = comissaoVendaTitle;
        })
        return this.comissaoVendaTitle
    }

    getHistorySalesTriTitle() {
        this.translateService.get('historySalesTriTitle').subscribe((historySalesTriTitle: any) => {
            this.historySalesTriTitle = historySalesTriTitle;
        })
        return this.historySalesTriTitle;
    }

    getLossCommissionsTitle() {
        this.translateService.get('lossCommissionsTitle').subscribe((lossCommissionsTitle: any) => {
            this.lossCommissionsTitle = lossCommissionsTitle;
        })
        return this.lossCommissionsTitle;
    }

    getAggregatorDashSaleInsurGoal() {
        this.translateService.get('AggregatorDashSaleInsurGoal').subscribe((AggregatorDashSaleInsurGoal: any) => {
            this.AggregatorDashSaleInsurGoal = AggregatorDashSaleInsurGoal;
        })
        return this.AggregatorDashSaleInsurGoal;
    }

    getAggregatorDashGoalSaleCatProduct() {
        this.translateService.get('AggregatorDashGoalSaleCatProduct').subscribe((AggregatorDashGoalSaleCatProduct: any) => {
            this.AggregatorDashGoalSaleCatProduct = AggregatorDashGoalSaleCatProduct;
        })
        return this.AggregatorDashGoalSaleCatProduct;
    }
    getGeralTitle() {
        this.translateService.get('GeralTitle').subscribe((GeralTitle: any) => {
            this.GeralTitle = GeralTitle;
        })
        return this.GeralTitle;
    }

    getPerforLojasTitle() {
        this.translateService.get('PerforLojasTitle').subscribe((PerforLojasTitle: any) => {
            this.PerforLojasTitle = PerforLojasTitle;
        })
        return this.PerforLojasTitle;
    }

    getMasterDealerTitle() {
        this.translateService.get('MasterDealerTitle').subscribe((MasterDealerTitle: any) => {
            this.MasterDealerTitle = MasterDealerTitle;
        })
        return this.MasterDealerTitle;
    }

    getMasterDealerStoreNewManager() {
        this.translateService.get('MasterDealerStoreNewManager').subscribe((MasterDealerStoreNewManager: any) => {
            this.MasterDealerStoreNewManager = MasterDealerStoreNewManager;
        })
        return this.MasterDealerStoreNewManager;
    }

    getComercialNewGoalsListProf() {
        this.translateService.get('ComercialNewGoalsListProf').subscribe((ComercialNewGoalsListProf: any) => {
            this.ComercialNewGoalsListProf = ComercialNewGoalsListProf;
        })
        return this.ComercialNewGoalsListProf;
    }

    getComercialHomeNovosParcNome() {
        this.translateService.get('ComercialHomeNovosParcNome').subscribe((ComercialHomeNovosParcNome: any) => {
            this.ComercialHomeNovosParcNome = ComercialHomeNovosParcNome;
        })
        return this.ComercialHomeNovosParcNome
    }

    getMasterDealerStore() {
        this.translateService.get('MasterDealerStore').subscribe((MasterDealerStore: any) => {
            this.MasterDealerStore = MasterDealerStore;
        })
        return this.MasterDealerStore;
    }

    getMasterDealerMyStorTitle() {
        this.translateService.get('MasterDealerMyStorTitle').subscribe((MasterDealerMyStorTitle: any) => {
            this.MasterDealerMyStorTitle = MasterDealerMyStorTitle;
        })
        return this.MasterDealerMyStorTitle;
    }

    getMasterDealerStoreList() {
        this.translateService.get('MasterDealerStoreList').subscribe((MasterDealerStoreList: any) => {
            this.MasterDealerStoreList = MasterDealerStoreList;
        })
        return this.MasterDealerStoreList
    }

    getMasterDealerNewStore() {
        this.translateService.get('MasterDealerNewStore').subscribe((MasterDealerNewStore: any) => {
            this.MasterDealerNewStore = MasterDealerNewStore;
        })
        return this.MasterDealerNewStore;
    }

    getMasterDealerListStoreName() {
        this.translateService.get('MasterDealerListStoreName').subscribe((MasterDealerListStoreName: any) => {
            this.MasterDealerListStoreName = MasterDealerListStoreName;
        })
        return this.MasterDealerListStoreName;
    }

    getMasterDealerProductsList() {
        this.translateService.get('MasterDealerProductsList').subscribe((MasterDealerProductsList: any) => {
            this.MasterDealerProductsList = MasterDealerProductsList;
        })
        return this.MasterDealerProductsList;
    }

    getMasterDealerNewProduct() {
        this.translateService.get('MasterDealerNewProduct').subscribe((MasterDealerNewProduct: any) => {
            this.MasterDealerNewProduct = MasterDealerNewProduct;
        })
        return this.MasterDealerNewProduct;
    }

    getMasterDealerListImage() {
        this.translateService.get('MasterDealerListImage').subscribe((MasterDealerListImage: any) => {
            this.MasterDealerListImage = MasterDealerListImage;
        })
        return this.MasterDealerListImage
    }

    getMasterDealerProdFilterBrand() {
        this.translateService.get('MasterDealerProdFilterBrand').subscribe((MasterDealerProdFilterBrand: any) => {
            this.MasterDealerProdFilterBrand = MasterDealerProdFilterBrand;
        })
        return this.MasterDealerProdFilterBrand;
    }

    getMasterDealerProdFilterModel() {
        this.translateService.get('MasterDealerProdFilterModel').subscribe((MasterDealerProdFilterModel: any) => {
            this.MasterDealerProdFilterModel = MasterDealerProdFilterModel;
        })
        return this.MasterDealerProdFilterModel;
    }

    getMasterDealerListVersion() {
        this.translateService.get('MasterDealerListVersion').subscribe((MasterDealerListVersion: any) => {
            this.MasterDealerListVersion = MasterDealerListVersion;
        })
        return this.MasterDealerListVersion;
    }

    getMasterDealerListValue() {
        this.translateService.get('MasterDealerListValue').subscribe((MasterDealerListValue: any) => {
            this.MasterDealerListValue = MasterDealerListValue;
        })
        return this.MasterDealerListValue;
    }

    getMasterDealerListCateg() {
        this.translateService.get('MasterDealerListCateg').subscribe((MasterDealerListCateg: any) => {
            this.MasterDealerListCateg = MasterDealerListCateg;
        })
        return this.MasterDealerListCateg;
    }

    getMasterDealerListName() {
        this.translateService.get('MasterDealerListName').subscribe((MasterDealerListName: any) => {
            this.MasterDealerListName = MasterDealerListName;
        })
        return this.MasterDealerListName;
    }

    getMasterDealerDashboardTitle() {
        this.translateService.get('MasterDealerDashboardTitle').subscribe((MasterDealerDashboardTitle: any) => {
            this.MasterDealerDashboardTitle = MasterDealerDashboardTitle;
        })
        return this.MasterDealerDashboardTitle;
    }

    getMasterDealerPayment() {
        this.translateService.get('MasterDealerPayment').subscribe((MasterDealerPayment: any) => {
            this.MasterDealerPayment = MasterDealerPayment;
        })
        return this.MasterDealerPayment;
    }

    getMasterDealerDashboardExtr() {
        this.translateService.get('MasterDealerDashboardExtr').subscribe((MasterDealerDashboardExtr: any) => {
            this.MasterDealerDashboardExtr = MasterDealerDashboardExtr;
        })
        return this.MasterDealerDashboardExtr;
    }

    getMasterDealerSalesFoll() {
        this.translateService.get('MasterDealerSalesFoll').subscribe((MasterDealerSalesFoll: any) => {
            this.MasterDealerSalesFoll = MasterDealerSalesFoll;
        })
        return this.MasterDealerSalesFoll;
    }

    getMasterDealerSalesPerStore() {
        this.translateService.get('MasterDealerSalesPerStore').subscribe((MasterDealerSalesPerStore: any) => {
            this.MasterDealerSalesPerStore = MasterDealerSalesPerStore;
        })
        return this.MasterDealerSalesPerStore;
    }

    getMasterDealerStoreVsProd() {
        this.translateService.get('MasterDealerStoreVsProd').subscribe((MasterDealerStoreVsProd: any) => {
            this.MasterDealerStoreVsProd = MasterDealerStoreVsProd;
        })
        return this.MasterDealerStoreVsProd;
    }

    getMasterDealerDashboardSalesHist() {
        this.translateService.get('MasterDealerDashboardSalesHist').subscribe((MasterDealerDashboardSalesHist: any) => {
            this.MasterDealerDashboardSalesHist = MasterDealerDashboardSalesHist;
        })
        return this.MasterDealerDashboardSalesHist;
    }

    getMasterDealerDashCancelIns() {
        this.translateService.get('MasterDealerDashCancelIns').subscribe((MasterDealerDashCancelIns: any) => {
            this.MasterDealerDashCancelIns = MasterDealerDashCancelIns;
        })
        return this.MasterDealerDashCancelIns;
    }

    getMasterDealerDashboardPerfResel() {
        this.translateService.get('MasterDealerDashboardPerfResel').subscribe((MasterDealerDashboardPerfResel: any) => {
            this.MasterDealerDashboardPerfResel = MasterDealerDashboardPerfResel;
        })
        return this.MasterDealerDashboardPerfResel;
    }

    getAggregatorListType() {
        this.translateService.get('AggregatorListType').subscribe((AggregatorListType: any) => {
            this.AggregatorListType = AggregatorListType;
        })
        return this.AggregatorListType;
    }

    getComercialNewGoalsListTit() {
        this.translateService.get('ComercialNewGoalsListTit').subscribe((ComercialNewGoalsListTit: any) => {
            this.ComercialNewGoalsListTit = ComercialNewGoalsListTit;
        })
        return this.ComercialNewGoalsListTit;
    }

    getComercialNewCampNewDescr() {
        this.translateService.get('ComercialNewCampNewDescr').subscribe((ComercialNewCampNewDescr: any) => {
            this.ComercialNewCampNewDescr = ComercialNewCampNewDescr;
        })
        return this.ComercialNewCampNewDescr;
    }

    getComercialNewGoalsListDtStart() {
        this.translateService.get('ComercialNewGoalsListDtStart').subscribe((ComercialNewGoalsListDtStart: any) => {
            this.ComercialNewGoalsListDtStart = ComercialNewGoalsListDtStart;
        })
        return this.ComercialNewGoalsListDtStart;
    }

    getComercialNewGoalsListDtEnd() {
        this.translateService.get('ComercialNewGoalsListDtEnd').subscribe((ComercialNewGoalsListDtEnd: any) => {
            this.ComercialNewGoalsListDtEnd = ComercialNewGoalsListDtEnd;
        })
        return this.ComercialNewGoalsListDtEnd;
    }

    getComercialNewGoalsListIns() {
        this.translateService.get('ComercialNewGoalsListIns').subscribe((ComercialNewGoalsListIns: any) => {
            this.ComercialNewGoalsListIns = ComercialNewGoalsListIns;
        })
        return this.ComercialNewGoalsListIns;
    }

    getManagerSellersTitle() {
        this.translateService.get('ManagerSellersTitle').subscribe((ManagerSellersTitle: any) => {
            this.ManagerSellersTitle = ManagerSellersTitle;
        })
        return this.ManagerSellersTitle
    }

    getManagerSellerList() {
        this.translateService.get('ManagerSellerList').subscribe((ManagerSellerList: any) => {
            this.ManagerSellerList = ManagerSellerList;
        })
        return this.ManagerSellerList;
    }

    getManagerSellerNewSal() {
        this.translateService.get('ManagerSellerNewSal').subscribe((ManagerSellerNewSal: any) => {
            this.ManagerSellerNewSal = ManagerSellerNewSal;
        })
        return this.ManagerSellerNewSal;
    }

    getManagerSellerStore() {
        this.translateService.get('ManagerSellerStore').subscribe((ManagerSellerStore: any) => {
            this.ManagerSellerStore = ManagerSellerStore;
        })
        return this.ManagerSellerStore;
    }

    getManagerSellerPosition() {
        this.translateService.get('ManagerSellerPosition').subscribe((ManagerSellerPosition: any) => {
            this.ManagerSellerPosition = ManagerSellerPosition;
        })
        return this.ManagerSellerPosition;
    }

    getManagerDashPerformBySel() {
        this.translateService.get('ManagerDashPerformBySel').subscribe((ManagerDashPerformBySel: any) => {
            this.ManagerDashPerformBySel = ManagerDashPerformBySel;
        })
        return this.ManagerDashPerformBySel;
    }

    getManagerGoalsSellerRegis() {
        this.translateService.get('ManagerGoalsSellerRegis').subscribe((ManagerGoalsSellerRegis: any) => {
            this.ManagerGoalsSellerRegis = ManagerGoalsSellerRegis;
        })
        return this.ManagerGoalsSellerRegis;
    }

    getComercialAdvFilterMore() {
        this.translateService.get('ComercialAdvFilterMore').subscribe((ComercialAdvFilterMore: any) => {
            this.ComercialAdvFilterMore = ComercialAdvFilterMore;
        })
        return this.ComercialAdvFilterMore;
    }

    getComercialAdvFilterMenos() {
        this.translateService.get('ComercialAdvFilterMenos').subscribe((ComercialAdvFilterMenos: any) => {
            this.ComercialAdvFilterMenos = ComercialAdvFilterMenos;
        })
        return this.ComercialAdvFilterMenos;
    }

    getComercialToastrState() {
        this.translateService.get('ComercialToastrState').subscribe((ComercialToastrState: any) => {
            this.ComercialToastrState = ComercialToastrState;
        })
        return this.ComercialToastrState;
    }

    getComercialToastrCity() {
        this.translateService.get('ComercialToastrCity').subscribe((ComercialToastrCity: any) => {
            this.ComercialToastrCity = ComercialToastrCity;
        })
        return this.ComercialToastrCity;
    }

    getComercialToastrInsur() {
        this.translateService.get('ComercialToastrInsur').subscribe((ComercialToastrInsur: any) => {
            this.ComercialToastrInsur = ComercialToastrInsur;
        })
        return this.ComercialToastrInsur;
    }

    getVendedorProdCatCancel() {
        this.translateService.get('VendedorProdCatCancel').subscribe((VendedorProdCatCancel: any) => {
            this.VendedorProdCatCancel = VendedorProdCatCancel;
        })
        return this.VendedorProdCatCancel;
    }
    getComercialInterestedPartnersCatSeguro() {
        this.translateService.get('ComercialInterestedPartnersCatSeguro').subscribe((ComercialInterestedPartnersCatSeguro: any) => {
            this.ComercialInterestedPartnersCatSeguro = ComercialInterestedPartnersCatSeguro;
        })
        return this.ComercialInterestedPartnersCatSeguro;
    }

    getComercialInterestedPartnersCidade() {
        this.translateService.get('ComercialInterestedPartnersCidade').subscribe((ComercialInterestedPartnersCidade: any) => {
            this.ComercialInterestedPartnersCidade = ComercialInterestedPartnersCidade;
        })
        return this.ComercialInterestedPartnersCidade;
    }

    getComercialInterestedPartnersUf() {
        this.translateService.get('ComercialInterestedPartnersUf').subscribe((ComercialInterestedPartnersUf: any) => {
            this.ComercialInterestedPartnersUf = ComercialInterestedPartnersUf;
        })
        return this.ComercialInterestedPartnersUf;
    }

    getComercialInterestedPartnersRazSoc() {
        this.translateService.get('ComercialInterestedPartnersRazSoc').subscribe((ComercialInterestedPartnersRazSoc: any) => {
            this.ComercialInterestedPartnersRazSoc = ComercialInterestedPartnersRazSoc;
        })
        return this.ComercialInterestedPartnersRazSoc;
    }

    getManagerFilterRegDate() {
        this.translateService.get('ManagerFilterRegDate').subscribe((ManagerFilterRegDate: any) => {
            this.ManagerFilterRegDate = ManagerFilterRegDate;
        })
        return this.ManagerFilterRegDate;
    }

    getVendProtectionDetailsTimelineTitle() {
        this.translateService.get('vendProtectionDetailsTimelineTitle').subscribe((vendProtectionDetailsTimelineTitle: any) => {
            this.vendProtectionDetailsTimelineTitle = vendProtectionDetailsTimelineTitle;
        })
        return this.vendProtectionDetailsTimelineTitle;
    }
}
