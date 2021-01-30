// 20190910 소프트웨어학과 권수빈
$(document).ready(function() {
    $('#file').on('change', function() {
        let file = $('#file')[0].files[0];
        let reader = new FileReader();

        $(reader).on('load', function() {
            let studentInfos = this.result.split('\n');
            let $stu = [];
            let $rankInfo = [];
            
            $(studentInfos).each(function(index, item) {
                $stu.push(item.split(','));
                let kor = parseFloat($stu[index][2]);
                let eng = parseFloat($stu[index][3]);
                let math = parseFloat($stu[index][4]);
                let total = kor + eng + math;
                let average = (total/3).toFixed(2); //소수 두번째 자리까지 
                $stu[index].push(total, average);
            });
            
            $($stu).each(function(index, item) {
                $rankInfo.push([item[5], 1]);     
            });

            $($rankInfo).each(function(index, item) {
                let x = item[0];
                $($rankInfo).each(function(index, item) {
                    if (x > item[0]) {
                        item[1]++;
                    }
                });
            });
            
            $($stu).each(function(index, item) {
                $stu[index].push($rankInfo[index][1]);
            });
        
            let title = `<center><h1> ⋆⁺₊⋆ ♡권수빈이 만든 삐약반 성적표♡⋆₊⁺⋆</h1></center>`;
            let tableStart = `<center><table id="table" border="1">`;
            let lineStart = `<tr id="line1"><td>번호</td><td>이름</td>
                            <td>국어</td><td>영어</td><td>수학</td><td>총점</td>
                            <td>평균</td><td>등수</td></tr>`;
            let tableEnd = `</table></center>`;
            elem = title + tableStart + lineStart;
            
            $($stu).each(function(index, item) {
                 let stuNum = item[0];
                 let stuName = item[1];
                 let stuKor = item[2];
                 let stuEng = item[3];
                 let stuMath = item[4];
                 let stuTotal = item[5];
                 let stuAve = item[6];
                 let stuRank = item[7];
                 let student = `<tr><td>${stuNum}</td><td>${stuName}</td><td>${stuKor}</td>
                                <td>${stuEng}</td><td>${stuMath}</td><td>${stuTotal}</td>
                                <td>${stuAve}</td><td>${stuRank}</td></tr>`;
                elem = elem + student;
            });
            
            elem = elem + tableEnd;
            $('#result').append(elem);
            $('#line1').addClass('line');
        });

        $(reader).on('error', function() {
            $('#result').html(reader.error.message);
        });
        reader.readAsText(file, 'UTF-8');
    });
});
