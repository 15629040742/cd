<template>
    <div class="yh-calendar">
        <div class="yh-calendar-header">
            <span> {{getDate}}</span>
            <div class="btn-group">
                <yh-button>上个月</yh-button>
                <yh-button>今天</yh-button>
                <yh-button>下个月</yh-button>
            </div>
        </div>
        <div class="yh-calendar-content">
            <div v-for="i in 6" :key="i" class="yh-calendar-content-row">
                <span v-for="j in 7" :key="j" class="yh-calendar-content-col">
                    {{mainDate[(i-1)*7+(j-1)]}}
                </span>
            </div>
            <!-- {{ preDate}} -->
            <!-- {{mainDate}} -->
            <!-- {{nextDate}} -->
        </div>
    </div>
</template>
<script>
export default {
    name:'yh-calendar',
    props:{
        value:{
            type:Date,
            default:new Date()
        }
    },
    data(){
        return {
           data:{
               getDate:''
           }
        }
    },
    created(){
        console.log(this.value)
        var date = new Date()
        let getYear = date.getFullYear();
        let getMonth = date.getMonth()+1;
        this.getDate = `${getYear}-${getMonth}`
    },
    methods:{
        getYearMonthDay(value){
            let year = value.getFullYear()
            let month = value.getMonth()
            let date =value.getDate()
            return {year,month,date}
        }
    },
    computed:{
        mainDate(){
            let {year,month,date} = this.getYearMonthDay(this.value)
            console.log(year,month,date)
            // let year = date.getFullYear()
            // let month = date.getMonth()
            // console.log(month)
            let currentFirstDay = new Date(year,month,1)
            // console.log("currentFirstDay",currentFirstDay)
            let week = new Date(year,month,1).getDay(); // 这个月的第一天是周几
            // console.log("week",week)
            let startDay = currentFirstDay - week*60*60*1000*24 // 当前显示第一天的日期
            // console.log(new Date(startDay))
            // console.log("startDay",startDay)
            var arr = []
            for(var i=0;i<42;i++){
                let day = new Date(startDay+i*60*60*1000*24)
                let getMonth = day.getMonth()+1
                let getDate = day.getDate()
                arr.push(`${getMonth}-${getDate}`)
            }
            return arr
        },
    }
}
</script>
<style lang="less">
    .yh-calendar{
        width: 100%;
        border: 1px solid red;
        .yh-calendar-header{
            height: 45px;
            width: 100%;
            line-height: 45px;
            margin: 0 10px;
            color: black;
            font-size: 24px;
            font-weight: 500;
            border-bottom: 1px solid gray;
            position: relative;
            .btn-group{
                position: absolute;
                top:-5px;
                right: 20px;
            }
        }
        .yh-calendar-content{
            .yh-calendar-content-row{
                display: flex;
                width: 100%;
               
                .yh-calendar-content-col{
                    flex: 1;
                    height: 45px;
                    border: 1px solid;
                    display: flex;
                     justify-content: center;
                    align-items: center;
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>