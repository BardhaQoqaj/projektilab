using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Books.Any()) return;
            
            var books = new List<Books>
            {
                new Books
                {
                    Titulli = "Zera nga Cernobili",
                    Faqet =256,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = " Ky libër nuk flet për Çernobilin, por për botën e Çernobilit. Pikërisht për atë që ne e njohim shumë pak. Për atë që nuk njohim thuajse asgjë. Një histori e munguar: ja kështu mund ta kisha titulluar.",
                    Kategoria = "Roman",
                    Botuesi ="Svetllana Aleksieviç",
                    Cmimi= 19,
                },
                new Books
                {
                    Titulli = "Fuqia e shprehise",
                    Faqet =286,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = " Nëse ne kuptojmë sekretet e shprehisë, mënyrën e funksionimit të tyre, mund ta transformojme biznesin tonë, dhe jetën tonë. Ky libër ofron shumë sekrete që vlejnë në përditshmëri. ",
                    Kategoria = "Roman",
                    Botuesi ="Charles Duhigg",
                    Cmimi= 22,
                },
                new Books
                {
                    Titulli = "Pertej botes time",
                    Faqet =301,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = " Melodia është një vajzë 11-vjeçare, krejt ndryshe nga shumica prej nesh. Ajo s'mund të ecë, s'mund të flasë, s'mund të shkruajë, për shkak të një sëmundjeje të lindur. ",
                    Kategoria = "Roman",
                    Botuesi ="Sharon M.Draper",
                    Cmimi= 28,
                },
                new Books
                {
                    Titulli = "Eleanor & Park nje here ne jete",
                    Faqet =200,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = " Ky roman më sjell ndërmend çfarë gjëra duan të thonë të rinjtë e dashuruar. Dhe çfarë do të thotë të dashurohesh në një libër ",
                    Kategoria = "Roman",
                    Botuesi ="Rainbow Rowell",
                    Cmimi= 24,
                },
                new Books
                {
                    Titulli = "Tri bijat e Eves",
                    Faqet =216,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = " Te Tri bijat e Evës ajo na fut nën lëkurën e tri vajzave, duke i shpalosur shkallët e miqësisë përmes dashurisë dhe humbjes. Një libër vërtet me peshë." ,
                    Kategoria = "Novele",
                    Botuesi ="Elif Shafak",
                    Cmimi= 18,
                },
                new Books
                {
                    Titulli = "Te fitosh ne cdo negociate - NSA",
                    Faqet =230,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = "  'Të fitosh në çdo negociatë' do te ju japë mprehtësinë konkurruese në çdo diskutim.",
                    Kategoria = "Roman",
                    Botuesi =" Chris Voss",
                    Cmimi= 17,
                },
                new Books
                {
                    Titulli = "Mendo dhe behu i pasur",
                    Faqet =211,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = " Mendo dhe bëhu i pasur i autorit shumë të njohur amerikan Napoleon Hill, është libri që ka ndihmuar shumë njerëz të ndryshojnë rrjedhën e jetës së tyre.",
                    Kategoria = "Roman",
                    Botuesi =" Napoleon Hill",
                    Cmimi= 19,
                },
                new Books
                {
                    Titulli = "Nje mije e nje net - Aeditions",
                    Faqet =359,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = "Libri me i bukur i perrallave Nje mije e nje net vjen me nje tjeter perkthim ne shqip nga Sokol Cunga, pas botimit te vjeter qe pati perkthyer Mustafa Greblleshi. Ne kete botim cilesor do te gjeni edhe ilustrime qe e shoqerojne kete botim fantastik",
                    Kategoria = "Perralla",
                    Botuesi ="Grup Autoresh",
                    Cmimi= 17,
                },
                new Books
                {
                   Titulli = "Jeta qesharake e mesuesve",
                    Faqet =106,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = "I urren apo i dashuron mësuesit, do të bëhesh një nga ata apo nuk teplas fare, por thjesht të pëlqen të lexosh histori me potere - ky libër është për ty!",
                    Kategoria = "Libra per femije",
                    Botuesi =" James Campbell",
                    Cmimi= 15,
                },
                new Books
                {
                   Titulli = "Liza ne boten e cudirave",
                    Faqet =199,
                    Disponueshmeria = "Aktive",
                    Pershkrimi = "Një ndër risitë e këtij botimi është edhe pajisja e këtij libri me ilustrimet me ngjyra të Arthur Rackham të shtypura në letër kalku.",
                    Kategoria = "Roman per femije",
                    Botuesi ="Lewis Caroll",
                    Cmimi= 19,
                }
            };

           await context.Books.AddRangeAsync(books);
            await context.SaveChangesAsync();
        }
    }
}