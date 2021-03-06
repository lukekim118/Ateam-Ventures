import { useEffect, useState } from "react";
import PostData from './db.json';
import Filter from "./Filter";
import dividerHorizontal from './img/dividerHorizontal.png';

const PostList = () => {
    const [methodFilter, setMethodFilter] = useState<string[]>([]);
    const [materialFilter, setMaterialFilter] = useState<string[]>([]);
    const [posts, setPosts] = useState<any>([]);
    const [methodCheck,setMethodCheck] = useState<any>();
    const [materialCheck,setMaterialCheck] = useState<any>();
    const [switchState,setSwitchState]= useState<boolean>(false);
    const [methodFilled,setMethodFilled]=useState<string>("button");
    const [materialFilled,setMaterialFilled]=useState<string>("button");
    const allPosts = PostData.requests;
    useEffect(() => {
        if (methodFilter.length > 0) {
            setMethodCheck(methodFilter.length);
            setMethodFilled("methodBlue")
            const newArray = allPosts.filter((post: any) => {
                for(let i=0;i<post.method.length;i++) {
                    if (methodFilter.includes(post.method[i])) {
                        return true;
                    }    
                }
                return false;
            });
            setPosts(newArray);
        } else {
            setPosts(allPosts);
            setMethodCheck(null);
            setMethodFilled("button")
        }
    }, [methodFilter])
    useEffect(() => {
        if (materialFilter.length > 0) {
            setMaterialCheck(materialFilter.length);
            setMaterialFilled("materialBlue")
            const newArray = allPosts.filter((post: any) => {
                for(let i=0;i<post.material.length;i++) {
                    if (materialFilter.includes(post.material[i])) {
                        return true;
                    }    
                }
                return false;
            });
            setPosts(newArray);
        } 
        else {
            setPosts(allPosts);
            setMaterialCheck(null);
            setMaterialFilled("button")
        }
    }, [materialFilter])
    useEffect(()=>{
        let newArray:any = [];
        if(switchState===true){
        allPosts.forEach(post=>{
            if(post.status==="?????????"){
                newArray.push(post)
            }
        })
        setPosts(newArray)
        } else {
            setPosts(allPosts)
        }
    },[switchState])
    if (posts.length === 0) return <div className="content">
                                        <Filter methodFilter={methodFilter} 
                                        setMethodFilter={setMethodFilter} 
                                        materialFilter={materialFilter} 
                                        setMaterialFilter={setMaterialFilter}
                                        methodCheck={methodCheck}
                                        materialCheck={materialCheck}
                                        switchState={switchState}
                                        setSwitchState={setSwitchState}
                                        methodFilled={methodFilled}
                                        materialFilled={materialFilled}/>
                                        <div className="noContent"><p>???????????? ?????? ????????? ????????????</p></div>
                                    </div>
    return(
        <div className="content">
            <Filter 
                methodFilter={methodFilter} 
                setMethodFilter={setMethodFilter} 
                materialFilter={materialFilter} 
                setMaterialFilter={setMaterialFilter}
                methodCheck={methodCheck}
                materialCheck={materialCheck}
                switchState={switchState}
                setSwitchState={setSwitchState}
                methodFilled={methodFilled}
                materialFilled={materialFilled}
            />
            <div id="postsContainer">
            {posts.map((postDetail:any, index:any)=>{
                return <div>
                            <div id="postContainer">
                                <div id="postContent">
                                    <div id="contentTopContent">
                                        <div id="titleAlign">
                                            <h3>{postDetail.title}</h3>
                                            {postDetail.status==="?????????"?<div id="status"><p>?????????</p></div>:""}
                                        </div>    
                                        <p>{postDetail.client}</p>
                                    </div>
                                    <p id="date">{postDetail.due}?????? ??????</p>
                                    <img src={dividerHorizontal} id="dividerHorizontal"></img>
                                    <div id="contentBottomContainer">
                                        <div>
                                            <p>?????? ??????</p>
                                            <p>??? ??????</p>
                                            <p>????????????</p>
                                            <p>??????</p>
                                        </div>
                                        <div id="info">
                                            <p><strong>{postDetail.count}???</strong></p>
                                            <p><strong>{postDetail.amount}???</strong></p>
                                            <p><strong>{postDetail.method.length>1?postDetail.method[0]+","+postDetail.method[1]:postDetail.method[0]}</strong></p>
                                            <p><strong>{postDetail.material}</strong></p>
                                        </div>
                                    </div>
                                    <div id="contentButtons">
                                        <div id="contentButton1">
                                            <p>?????? ?????? ??????</p>
                                        </div>
                                        <div id="contentButton2">
                                            <p>????????????</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            })}
            </div>
        </div>
    )
}
export default PostList;
