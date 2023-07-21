let ten = prompt("Hãy nhập tên");
let tuoi = prompt("Hãy nhập tuổi");
let namsinh = 2023 - tuoi;
console.log("Chào mừng " + ten +", bạn tuổi "+ tuoi+" , sinh năm " +namsinh);
function tinhNamNhuan(namsinh){
    let a="nhuận";
    let b="không nhuận";
    if((namsinh % 4 == 0) && (namsinh % 100 != 0) || namsinh % 400 == 0)
        return a;
    else
        return b;    
}

function tinhCan(namsinh){
    let can;
    switch(namsinh % 10){
        case 0:
            can = "Canh";
            break;
        case 1:
            can = "Tân";
            break;
        case 2:
            can = "Nhâm";
            break;
        case 3:
            can = "Quý";
            break;
        case 4:
            can = "Giáp";
            break;
        case 5:
            can = "Ất";
            break;
        case 6:
            can = "Bính";
        case 7:
            can = "Đinh";
            break;
        case 8:
            can = "Mậu";
            break;
        case 9:
            can = "Kỷ";
            break;
        default:
            break;                                       
    }
    return can;
}

function tinhChi(namsinh){
    let chi;
    switch(namsinh % 12){
        case 0:
            chi = "Thân";
            break;
        case 1:
            chi = "Dậu";
            break;
        case 2:
            chi = "Tuất";
            break;
        case 3:
            chi = "Hợi";
            break;
        case 4:
            chi = "Tý";
            break;  
        case 5:
            chi = "Sửu";
            break;
        case 6:
            chi = "Dần";
            break;
        case 7:
            chi = "Mẹo";
            break;
        case 8:
            chi = "Thìn";
            break;
        case 9:
            chi = "Tị";
            break;
        case 10:
            chi = "Ngọ";
            break;
        case 11:
            chi = "Mùi";
            break;                           
        }
    return chi;
}
console.log("Đây là năm "+tinhCan(namsinh)+" "+tinhChi(namsinh)+" và đây là năm "+tinhNamNhuan(namsinh));
